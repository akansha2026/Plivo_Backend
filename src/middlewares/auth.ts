import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { OrgRole, UserRole } from '../constants/enums';
import prisma from '../db/client';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
  };
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'No token provided' });
    return
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyToken(token) as { id: string; role: string };
    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

export const requireSuperUser = (req: AuthRequest, res: Response, next: NextFunction) => {
  const role = req.user?.role;

  if (!role || role !== UserRole.SUPERUSER) {
    res.status(403).json({ message: 'Forbidden: SuperUser only' });
    return
  }

  next();
};

export const requireOrgMember = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const userId = req.user?.id;
  const orgId = req.headers['org-id'];


  const membership = await prisma.userOrganization.findUnique({
    where: {
      userId_organizationId: {
        userId: userId as string,
        organizationId: orgId as string,
      },
    },
  });

  if (!membership) {
    res.status(403).json({ message: 'User is not a member of the specified organization.' });
    return
  }

  next();
};


export const requireOrgAdmin = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const userId = req.user?.id;
  const orgId = req.headers['org-id'];

  const membership = await prisma.userOrganization.findUnique({
    where: {
      userId_organizationId: {
        userId: userId as string,
        organizationId: orgId as string,
      },
    },
  });

  if (!membership || membership.role !== OrgRole.ADMIN) {
    res.status(403).json({ message: 'User is not an admin of the specified organization.' });
    return
  }

  next();
};