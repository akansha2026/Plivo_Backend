import { Request, Response } from 'express';
import prisma from '../db/client';
import { IncidentStatus } from '../constants/enums';
import { AuthRequest } from '../middlewares/auth';
import { emitIncidentUpdate } from '../utils/sockets';

/**
 * Create an incident update linked to a specific incident
 * POST /incident/:incidentId
 */
export const createIncidentUpdate = async (req: AuthRequest, res: Response) => {
  const { incidentId } = req.params; // Getting incidentId from params
  const { message, status } = req.body;
  const userId = req.user?.id as string;

  try {
    const incident = await prisma.incident.findUnique({
      where: { id: incidentId },
    });

    if (!incident) {
       res.status(404).json({ message: 'Incident not found' });
       return
    }

    // Create the incident update
    const update = await prisma.incidentUpdate.create({
      data: {
        incidentId,
        message,
        status,
        createdBy: userId, // Set the user ID as the creator of the update
      },
    });

    // Update the incident status based on the new update's status
    await prisma.incident.update({
      where: { id: incidentId },
      data: { status },
    });

    // Emit the new incident update to notify subscribers
    emitIncidentUpdate({
      type: 'add',
      incidentId,
      update,
    });

     res.status(201).json(update);
  } catch (error) {
     res.status(500).json({ message: 'Failed to create incident update', error });
  }
};

/**
 * Delete a specific incident update (only creator can delete)
 * DELETE /incident/:incidentId/:id
 */
export const deleteIncidentUpdate = async (req: AuthRequest, res: Response) => {
  const { incidentId, id } = req.params; // Getting both incidentId and id from params
  const userId = req.user?.id as string;

  try {
    const update = await prisma.incidentUpdate.findUnique({
      where: { id },
    });

    if (!update) {
       res.status(404).json({ message: 'Update not found' });
       return
    }

    // Ensure the user is the creator of the update
    if (update.createdBy !== userId) {
       res.status(403).json({ message: 'Unauthorized to delete this update' });
       return
    }

    // Delete the incident update
    await prisma.incidentUpdate.delete({
      where: { id },
    });

    // Check if there are any remaining updates for the incident
    const remainingUpdates = await prisma.incidentUpdate.findMany({
      where: { incidentId },
    });

    // If no updates are left, set incident status to 'SCHEDULED'
    if (remainingUpdates.length === 0) {
      await prisma.incident.update({
        where: { id: incidentId },
        data: {
          status: IncidentStatus.SCHEDULED, // Default status when no updates exist
        },
      });
    } else {
      // Otherwise, update the incident status based on the most recent update
      const latestUpdate = remainingUpdates[remainingUpdates.length - 1];
      await prisma.incident.update({
        where: { id: incidentId },
        data: {
          status: latestUpdate.status, // Set status to the last update's status
        },
      });
    }

    // Emit the removal of the incident update
    emitIncidentUpdate({
      type: 'remove',
      incidentId,
      update,
    });

     res.status(204).send();
  } catch (error) {
     res.status(500).json({ message: 'Failed to delete update', error });
  }
};

/**
 * Get an incident update by its ID
 * GET /incident/:incidentId/:id
 */
export const getIncidentUpdateById = async (req: Request, res: Response) => {
  const { incidentId, id } = req.params; // Getting incidentId and id from params

  try {
    const update = await prisma.incidentUpdate.findUnique({
      where: { id },
      include: {
        incident: true,
        user: true, // Include user info for the creator of the update
      },
    });

    if (!update) {
       res.status(404).json({ message: 'Update not found' });
       return
    }

     res.json(update);
  } catch (error) {
     res.status(500).json({ message: 'Failed to fetch update', error });
  }
};

/**
 * Get all updates for a specific incident
 * GET /incident/:incidentId
 */
export const getIncidentUpdatesForIncident = async (req: Request, res: Response) => {
  const { incidentId } = req.params; // Getting incidentId from params

  try {
    const updates = await prisma.incidentUpdate.findMany({
      where: { incidentId },
      include: {
        incident: true,
        user: true, // Include user info for the creator of the update
      },
      orderBy: {
        createdAt: 'asc', // Order updates by creation date (ascending)
      },
    });

     res.json(updates || []);
  } catch (error) {
     res.status(500).json({ message: 'Failed to fetch incident updates', error });
  }
};