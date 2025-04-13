// src/controllers/userController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../db/client';
import { signToken } from '../utils/jwt';
import { userSchema } from '../utils/validator';
import { AuthRequest } from '../middlewares/auth';
import { UserRole } from '../generated/prisma';

export const registerUser = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  const result = userSchema.safeParse({email, password, name})
  if(result.error){
    res.status(400).json({
        message: 'validation failed!',
        error: result.error.errors
    })
    return;
  }

  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    return
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: UserRole.USER
    },
  });


  res.status(201).json({ message: 'User created succesfully!' });
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = userSchema.omit({ name: true }).safeParse({ email, password });
  if (!result.success) {
     res.status(400).json({
      message: 'Validation failed!',
      error: result.error.errors,
    });
    return
  }

  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      memberships: {
        select: {
          organizationId: true,
        },
      },
    },
  });

  if (!user) {
        res.status(404).json({ message: 'Invalid email address.' });
        return
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
     res.status(401).json({ message: 'Invalid password.' });
     return
  }

  const token = signToken({ id: user.id, role: user.role }, '1h');

  const defaultOrg =
    user.defaultOrgId || user.memberships[0]?.organizationId || null;

    console.log(defaultOrg)

  res.status(200).json({
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    },
    orgId: defaultOrg,
    token,
  });
};

export const getUserDetails = async (req: AuthRequest, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    res.status(400).json({ message: 'User not authenticated.' });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        createdOrganizations: {
          select: {
            id: true,
            name: true,
          },
        },
        memberships: {
          include: {
            organization: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      res.status(404).json({ message: 'User not found.' });
      return;
    }

    const userResponse = {
      id: user.id,
      email: user.email,
      name: user.name,
      createdOrganizations: user.createdOrganizations,
      memberships: user.memberships.map(m => m.organization),
    };

    res.status(200).json(userResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving user details.' });
  }
};