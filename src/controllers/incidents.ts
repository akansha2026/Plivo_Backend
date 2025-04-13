import { Request, Response } from 'express';
import prisma from '../db/client';
import { IncidentStatus } from '../constants/enums';
import { AuthRequest } from '../middlewares/auth';
import { incidentSchema } from '../utils/validator';

export const getIncidents = async (req: Request, res: Response) => {
  try {
    const { serviceId } = req.params;  // Extracting serviceId from the route parameters
    const organizationId = req.headers['org-id'] as string;

    const incidents = await prisma.incident.findMany({
      where: {
        serviceId,    // Filtering incidents based on serviceId
        organizationId,
      },
    });

    res.json(incidents);
  } catch (error) {
    console.error('Error fetching incidents:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAllIncidents = async (req: Request, res: Response) => {
  try {
    const organizationId = req.headers['org-id'] as string;

    const incidents = await prisma.incident.findMany({
      where: {
        organizationId,
      },
    });

    res.json(incidents);
  } catch (error) {
    console.error('Error fetching incidents:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getIncidentById = async (req: Request, res: Response) => {
  try {
    const { serviceId, id } = req.params;  // Extracting serviceId and incidentId
    const organizationId = req.headers['org-id'] as string;

    const incident = await prisma.incident.findFirst({
      where: { 
        id,
        serviceId,   // Ensuring the incident belongs to the specified service
        organizationId,
      },
      include: {
        updates: true,
        service: true
      },
    });

    if (!incident) {
      res.status(404).json({ message: 'Incident not found' });
      return;
    }

    res.json(incident);
  } catch (error) {
    console.error('Error fetching incident:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createIncident = async (req: AuthRequest, res: Response) => {
  try {
    const { serviceId } = req.params;  // Extracting serviceId from the route parameters
    const organizationId = req.headers['org-id'] as string;
    const userId = req.user?.id as string;

    const {
      title,
      description,
      status,
    } = req.body;

    const result = incidentSchema.safeParse({
      title,
      description,
      status,
    });

    if (result.error) {
      res.status(400).json({
        message: 'Validation failed!',
        error: result.error.errors,
      });
      return;
    }

    const service = await prisma.service.findUnique({
      where: { id: serviceId },
    });

    if (!service) {
      res.status(404).json({ message: 'Service not found' });
      return;
    }

    const incident = await prisma.incident.create({
      data: {
        title,
        description,
        status,
        startedAt: new Date(),
        organizationId,
        createdBy: userId,
        serviceId,  // Associating the incident with the service
      },
    });

    res.status(201).json(incident);
  } catch (error) {
    console.error('Error creating incident:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateIncident = async (req: Request, res: Response) => {
  try {
    const { serviceId, id } = req.params;  // Extracting serviceId and incidentId
    const organizationId = req.headers['org-id'] as string;
    const { title, description, status, resolvedAt } = req.body;

    const existing = await prisma.incident.findFirst({
      where: {
        id,
        serviceId,    // Ensuring the incident belongs to the specified service
        organizationId,
      },
    });

    if (!existing) {
      res.status(404).json({ message: 'Incident not found' });
      return;
    }

    const incident = await prisma.incident.update({
      where: { id },
      data: {
        title,
        description,
        status,
        resolvedAt: resolvedAt ? new Date(resolvedAt) : undefined,
      },
    });

    res.json(incident);
  } catch (error) {
    console.error('Error updating incident:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteIncident = async (req: AuthRequest, res: Response) => {
  try {
    const { serviceId, id } = req.params;  // Extracting serviceId and incidentId
    const organizationId = req.headers['org-id'] as string;
    const userId = req.user?.id;

    const existing = await prisma.incident.findFirst({
      where: {
        id,
        serviceId,    // Ensuring the incident belongs to the specified service
        organizationId,
      },
    });

    if (!existing) {
      res.status(404).json({ message: 'Incident not found' });
      return;
    }

    if (existing.createdBy !== userId) {
      res.status(403).json({ message: 'Unauthorized: only the creator can delete this incident' });
      return;
    }

    await prisma.incident.delete({ where: { id } });

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting incident:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};