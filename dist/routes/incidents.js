"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const incidents_1 = require("../controllers/incidents");
const auth_1 = require("../middlewares/auth");
const headers_1 = require("../middlewares/headers"); // Only if org-specific context is needed
const router = (0, express_1.Router)();
/**
 * List all incidents for a specific service in the organization
 * GET /incidents/service/:serviceId
 */
router.get('/service/:serviceId', auth_1.authenticate, headers_1.requireOrgHeader, incidents_1.getIncidents // Get all incidents associated with a specific service
);
/**
 * List all incidents for a specific service in the organization
 * GET /incidents/service/:serviceId
 */
router.get('/', auth_1.authenticate, headers_1.requireOrgHeader, incidents_1.getAllIncidents // Get all incidents associated with a specific service
);
/**
 * Get a specific incident by ID for a service
 * GET /incidents/service/:serviceId/:id
 */
router.get('/:id', auth_1.authenticate, headers_1.requireOrgHeader, incidents_1.getIncidentById // Get an incident by its ID linked to a specific service
);
/**
 * Create a new incident for a specific service
 * POST /incidents/service/:serviceId
 */
router.post('/service/:serviceId', auth_1.authenticate, headers_1.requireOrgHeader, incidents_1.createIncident // Create a new incident linked to the specified service
);
/**
 * Update an existing incident for a specific service
 * PUT /incidents/service/:serviceId/:id
 */
router.put('/:id', auth_1.authenticate, headers_1.requireOrgHeader, incidents_1.updateIncident // Update the incident linked to the specific service
);
/**
 * Delete an incident for a specific service
 * DELETE /incidents/service/:serviceId/:id
 */
router.delete(':id', auth_1.authenticate, headers_1.requireOrgHeader, incidents_1.deleteIncident // Delete the incident linked to the specific service
);
exports.default = router;
