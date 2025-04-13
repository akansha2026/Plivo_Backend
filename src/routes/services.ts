// src/routes/services.ts
import { Router } from 'express';
import {
    getServices,
    getServiceById,
    createService,
    updateService,
    deleteService,
} from '../controllers/services';
import { authenticate, requireOrgAdmin, requireOrgMember, requireSuperUser } from '../middlewares/auth';
import { requireOrgHeader } from '../middlewares/headers';

const router = Router();

router.get('/', authenticate, requireOrgHeader, requireOrgMember, getServices);
router.get('/:id', authenticate, requireOrgHeader, requireOrgMember, getServiceById);
router.post('/', authenticate, requireOrgHeader, requireOrgAdmin, createService);
router.put('/:id', authenticate, requireOrgHeader, requireOrgAdmin, updateService);
router.delete('/:id', authenticate, requireOrgHeader, requireOrgAdmin, deleteService);

export default router;