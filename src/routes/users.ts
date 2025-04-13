// src/routes/userRoutes.ts
import { Router } from 'express';
import { getUserDetails, loginUser, registerUser } from '../controllers/users';
import { authenticate } from '../middlewares/auth';

const router = Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get("/me", authenticate, getUserDetails);

export default router