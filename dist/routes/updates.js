"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const updates_1 = require("../controllers/updates");
const auth_1 = require("../middlewares/auth");
const headers_1 = require("../middlewares/headers");
const router = (0, express_1.Router)();
// Create an incident update (linked to a specific incident, members and admins)
router.post('/incident/:incidentId', auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgMember, updates_1.createIncidentUpdate);
// Get all updates for a specific incident (linked to an incident, members and admins)
router.get('/incident/:incidentId', auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgMember, updates_1.getIncidentUpdatesForIncident // New route to fetch updates for an incident
);
// Get one update by ID (members and admins)
router.get('/:id', auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgMember, updates_1.getIncidentUpdateById);
// Delete update (only the creator can delete their update)
router.delete('/:id', auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgMember, updates_1.deleteIncidentUpdate);
exports.default = router;
