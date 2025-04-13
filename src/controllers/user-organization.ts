import { Request, Response } from "express";
import prisma from "../db/client";
import { OrgRole } from "../constants/enums";
import { AuthRequest } from "../middlewares/auth";

export const addUserToOrganization = async (req: Request, res: Response) => {
    const { userId, role } = req.body;
    const orgId = req.headers["org-id"];  // Get org-id from header

    if (!orgId || typeof orgId !== "string") {
        const message = "Missing or invalid 'org-id' header";
        res.status(400).json({ message });
        return;
    }

    try {
        const org = await prisma.organization.findUnique({ where: { id: orgId } });
        if (!org) {
            const message = "Organization not found";
            res.status(404).json({ message });
            return;
        }

        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            const message = "User not found";
            res.status(404).json({ message });
            return;
        }

        const existing = await prisma.userOrganization.findUnique({
            where: { userId_organizationId: { userId, organizationId: orgId } },
        });

        if (existing) {
            const message = "User already in organization";
            res.status(400).json({ message });
            return;
        }

        const membership = await prisma.userOrganization.create({
            data: {
                userId,
                organizationId: orgId,
                role: role || OrgRole.MEMBER,
            },
        });

        res.status(201).json(membership);
    } catch (error) {
        console.error("Error adding user to organization:", error);
        const message = "Internal server error";
        res.status(500).json({ message });
    }
};

export const getOrganizationMembers = async (req: Request, res: Response) => {
    const orgId = req.headers["org-id"];  // Get org-id from header

    if (!orgId || typeof orgId !== "string") {
        const message = "Missing or invalid 'org-id' header";
        res.status(400).json({ message });
        return;
    }

    try {
        const members = await prisma.userOrganization.findMany({
            where: { organizationId: orgId },
            include: { user: true },
        });

        res.json(members);
    } catch (error) {
        console.error("Error fetching organization members:", error);
        const message = "Internal server error";
        res.status(500).json({ message });
    }
};

export const removeUserFromOrganization = async (req: Request, res: Response) => {
    const orgId = req.headers["org-id"];  // Get org-id from header
    const { userId } = req.params;

    if (!orgId || typeof orgId !== "string") {
        const message = "Missing or invalid 'org-id' header";
        res.status(400).json({ message });
        return;
    }

    try {
        await prisma.userOrganization.delete({
            where: { userId_organizationId: { userId, organizationId: orgId } },
        });

        res.status(204).send();
    } catch (error) {
        console.error("Error removing user from organization:", error);
        const message = "Internal server error";
        res.status(500).json({ message });
    }
};

export const getUnassignedUsersForOrganization = async (req: Request, res: Response) => {
  const orgId = req.headers["org-id"] as string


  try {
    const unassignedUsers = await prisma.user.findMany({
      where: {
        memberships: {
          none: {
            organizationId: orgId,
          },
        },
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    res.status(200).json(unassignedUsers);
  } catch (error) {
    console.error("Error fetching unassigned users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserRoleInOrganization = async (req: Request, res: Response) => {
  const orgId = req.headers["org-id"] as string

  const { userId } = req.params;
  const { role } = req.body;

  if (!role || !Object.values(OrgRole).includes(role)) {
    const message = "Invalid or missing role";
    res.status(400).json({ message });
    return;
  }

  try {
    const existingMembership = await prisma.userOrganization.findUnique({
      where: {
        userId_organizationId: { userId, organizationId: orgId },
      },
    });

    if (!existingMembership) {
      const message = "User is not a member of the organization";
      res.status(404).json({ message });
      return;
    }

    const updated = await prisma.userOrganization.update({
      where: {
        userId_organizationId: { userId, organizationId: orgId },
      },
      data: {
        role,
      },
    });

    res.status(200).json(updated);
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserRoleInOrganization = async (req: AuthRequest, res: Response) => {
  const orgId = req.headers['org-id'] as string
  const userId = req.user?.id as string

  if (!orgId) {
     res.status(400).json({ message: 'Missing org-id header' })
     return
  }

  try {
    const membership = await prisma.userOrganization.findUnique({
      where: {
        userId_organizationId: {
          userId,
          organizationId: orgId,
        },
      },
      select: {
        role: true,
      },
    })


    if (!membership) {
       res.status(404).json({ message: 'User is not a member of this organization' })
       return
    }

     res.status(200).json({ role: membership.role })
  } catch (error) {
    console.error('Error fetching user role:', error)
     res.status(500).json({ message: 'Internal server error'})
  }
}