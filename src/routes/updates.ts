import { Router } from 'express';
import {
  createIncidentUpdate,
  getIncidentUpdateById,
  deleteIncidentUpdate,
  getIncidentUpdatesForIncident // New controller method
} from '../controllers/updates';
import {
  authenticate,
  requireOrgMember,
} from '../middlewares/auth';
import { requireOrgHeader } from '../middlewares/headers';

const router = Router();

// Create an incident update (linked to a specific incident, members and admins)
router.post(
  '/incident/:incidentId',
  authenticate,
  requireOrgHeader,
  requireOrgMember,
  createIncidentUpdate
);

// Get all updates for a specific incident (linked to an incident, members and admins)
router.get(
  '/incident/:incidentId',
  authenticate,
  requireOrgHeader,
  requireOrgMember,
  getIncidentUpdatesForIncident // New route to fetch updates for an incident
);

// Get one update by ID (members and admins)
router.get(
  '/:id',
  authenticate,
  requireOrgHeader,
  requireOrgMember,
  getIncidentUpdateById
);

// Delete update (only the creator can delete their update)
router.delete(
  '/:id',
  authenticate,
  requireOrgHeader,
  requireOrgMember,
  deleteIncidentUpdate
);

export default router;