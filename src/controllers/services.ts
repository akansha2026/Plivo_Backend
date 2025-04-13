import { Request, Response } from 'express';
import prisma from '../db/client';

export const getServices = async (req: Request, res: Response) => {
  const orgId = req.headers['org-id'] as string;

  try {
    // Fetch services associated with the current organization
    const services = await prisma.service.findMany({
      where: {
        organizationId: orgId, // Filter services by the orgId
      },
    });

    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch services', error });
  }
};

export const getServiceById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const orgId = req.headers['org-id'] as string;

  try {
    // Fetch service by ID and ensure it belongs to the current organization
    const service = await prisma.service.findUnique({
      where: { id },
      include: {
        organization: true, // Optionally include the organization in the response
      },
    });

    if (!service || service.organizationId !== orgId) {
       res.status(404).json({ message: 'Service not found or unauthorized access' });
       return
    }

    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch service', error });
  }
};

export const createService = async (req: Request, res: Response) => {
  const { name, type = 'OTHER', status = 'OPERATIONAL' } = req.body;
  const orgId = req.headers['org-id'] as string;

  try {
    const service = await prisma.service.create({
      data: {
        name,
        type,
        status,
        organizationId: orgId, // Associate the service with the current organization
      },
    });

    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create service', error });
  }
};

export const updateService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, status } = req.body;
  const orgId = req.headers['org-id'] as string;

  try {
    // Ensure that the service belongs to the current organization before updating
    const service = await prisma.service.update({
      where: { id },
      data: { name, status },
    });

    if (service.organizationId !== orgId) {
       res.status(403).json({ message: 'Unauthorized access to update service' });
       return
    }

    res.json(service);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update service', error });
  }
};

export const deleteService = async (req: Request, res: Response) => {
  const { id } = req.params;
  const orgId = req.headers['org-id'] as string;

  try {
    // Ensure that the service belongs to the current organization before deleting
    const service = await prisma.service.findUnique({
      where: { id },
    });

    if (!service || service.organizationId !== orgId) {
       res.status(403).json({ message: 'Unauthorized access to delete service' });
       return
    }

    await prisma.service.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete service', error });
  }
};