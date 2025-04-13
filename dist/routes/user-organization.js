"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_organization_1 = require("../controllers/user-organization");
const auth_1 = require("../middlewares/auth");
const headers_1 = require("../middlewares/headers");
const router = (0, express_1.Router)();
/**
 * Add a user to the organization
 * POST /organizations/members
 */
router.post("/members", auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgAdmin, user_organization_1.addUserToOrganization);
/**
 * Get all members of the organization
 * GET /organizations/members
 */
router.get("/members", auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgMember, user_organization_1.getOrganizationMembers);
/**
 * Update role of a specific member
 * PUT /organizations/members/:userId/role
 */
router.put("/members/:userId/role", auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgAdmin, user_organization_1.updateUserRoleInOrganization);
/**
 * Remove a user from the organization
 * DELETE /organizations/members/:userId
 */
router.delete("/members/:userId", auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgAdmin, user_organization_1.removeUserFromOrganization);
/**
 * Get users not assigned to the organization
 * GET /organizations/unassigned-users
 */
router.get("/members/unassigned", auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgAdmin, user_organization_1.getUnassignedUsersForOrganization);
/**
 * Get the role of the current user in the organization
 * GET /organizations/role
 */
router.get("/role", auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgMember, // or remove this if you want to allow unauthenticated responses (e.g. null/unauthorized)
user_organization_1.getUserRoleInOrganization);
exports.default = router;
