// src/controllers/organizations.ts
import { Response } from 'express';
import prisma from '../db/client';
import { OrgRole } from '../constants/enums';
import { AuthRequest } from '../middlewares/auth'; 

export const getOrganizations = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;

  try {
    const organizations = await prisma.userOrganization.findMany({
      where: { userId },
      include: { organization: true },
    });
    res.json(organizations.map(entry => entry.organization));
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch organizations', error });
  }
};

export const getOrganizationById = async (req: AuthRequest, res: Response) => {
  const orgId = req.headers['org-id'] as string;

  try {
    const organization = await prisma.organization.findUnique({
      where: { id: orgId },
    });

    if (!organization) {
      res.status(404).json({ message: 'Organization not found' });
    } else {
      res.json(organization);
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch organization', error });
  }
};

export const createOrganization = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;
  const { name } = req.body;

  try {
    const organization = await prisma.organization.create({
      data: {
        name,
        createdBy: userId!,
        users: {
          create: {
            userId: userId!,
            role: OrgRole.ADMIN,
          },
        },
      },
    });

    res.status(201).json(organization);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create organization', error });
  }
};

export const updateOrganization = async (req: AuthRequest, res: Response) => {
  const orgId = req.headers['org-id'] as string;
  const { name } = req.body;

  try {
    const organization = await prisma.organization.update({
      where: { id: orgId },
      data: { name },
    });

    res.json(organization);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update organization', error });
  }
};

export const deleteOrganization = async (req: AuthRequest, res: Response) => {
  const orgId = req.headers['org-id'] as string;

  try {
    // Step 1: Delete all UserOrganization entries associated with the organization
    await prisma.userOrganization.deleteMany({
      where: { organizationId: orgId },
    });
    
    await prisma.incident.deleteMany({
      where: { organizationId: orgId },
    });


    // Step 2: Now, delete the organization itself
    await prisma.organization.delete({
      where: { id: orgId },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete organization',
      error: error instanceof Error ? error.message : error,
    });
  }
};
