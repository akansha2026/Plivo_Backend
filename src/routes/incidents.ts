import { Router } from 'express';
import {
  getIncidents,
  getIncidentById,
  createIncident,
  updateIncident,
  deleteIncident,
  getAllIncidents,
} from '../controllers/incidents';
import { authenticate } from '../middlewares/auth';
import { requireOrgHeader } from '../middlewares/headers'; // Only if org-specific context is needed

const router = Router();

/**
 * List all incidents for a specific service in the organization
 * GET /incidents/service/:serviceId
 */
router.get(
  '/service/:serviceId',
  authenticate,
  requireOrgHeader,
  getIncidents // Get all incidents associated with a specific service
);

/**
 * List all incidents for a specific service in the organization
 * GET /incidents/service/:serviceId
 */
router.get(
  '/',
  authenticate,
  requireOrgHeader,
  getAllIncidents // Get all incidents associated with a specific service
);

/**
 * Get a specific incident by ID for a service
 * GET /incidents/service/:serviceId/:id
 */
router.get(
  '/:id',
  authenticate,
  requireOrgHeader,
  getIncidentById // Get an incident by its ID linked to a specific service
);

/**
 * Create a new incident for a specific service
 * POST /incidents/service/:serviceId
 */
router.post(
  '/service/:serviceId',
  authenticate,
  requireOrgHeader,
  createIncident // Create a new incident linked to the specified service
);

/**
 * Update an existing incident for a specific service
 * PUT /incidents/service/:serviceId/:id
 */
router.put(
  '/:id',
  authenticate,
  requireOrgHeader,
  updateIncident // Update the incident linked to the specific service
);

/**
 * Delete an incident for a specific service
 * DELETE /incidents/service/:serviceId/:id
 */
router.delete(
  ':id',
  authenticate,
  requireOrgHeader,
  deleteIncident // Delete the incident linked to the specific service
);

export default router;