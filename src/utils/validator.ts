import { z } from 'zod';
import { IncidentStatus } from '../constants/enums';

export const userSchema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
});

export const incidentSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  description: z.string().min(10, 'Description must be at least 10 characters long'),
  status: z.nativeEnum(IncidentStatus),
});