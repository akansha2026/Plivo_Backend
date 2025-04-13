import { Router } from "express";
import {
  addUserToOrganization,
  getOrganizationMembers,
  getUnassignedUsersForOrganization,
  getUserRoleInOrganization,
  removeUserFromOrganization,
  updateUserRoleInOrganization,
} from "../controllers/user-organization";
import {
  authenticate,
  requireOrgMember,
  requireOrgAdmin,
} from "../middlewares/auth";
import { requireOrgHeader } from "../middlewares/headers";

const router = Router();

/**
 * Add a user to the organization
 * POST /organizations/members
 */
router.post(
  "/members",
  authenticate,
  requireOrgHeader,
  requireOrgAdmin,
  addUserToOrganization
);

/**
 * Get all members of the organization
 * GET /organizations/members
 */
router.get(
  "/members",
  authenticate,
  requireOrgHeader,
  requireOrgMember,
  getOrganizationMembers
);

/**
 * Update role of a specific member
 * PUT /organizations/members/:userId/role
 */
router.put(
  "/members/:userId/role",
  authenticate,
  requireOrgHeader,
  requireOrgAdmin,
  updateUserRoleInOrganization
);

/**
 * Remove a user from the organization
 * DELETE /organizations/members/:userId
 */
router.delete(
  "/members/:userId",
  authenticate,
  requireOrgHeader,
  requireOrgAdmin,
  removeUserFromOrganization
);

/**
 * Get users not assigned to the organization
 * GET /organizations/unassigned-users
 */
router.get(
  "/members/unassigned",
  authenticate,
  requireOrgHeader,
  requireOrgAdmin,
  getUnassignedUsersForOrganization
);

/**
 * Get the role of the current user in the organization
 * GET /organizations/role
 */
router.get(
  "/role",
  authenticate,
  requireOrgHeader,
  requireOrgMember, // or remove this if you want to allow unauthenticated responses (e.g. null/unauthorized)
  getUserRoleInOrganization
)
export default router;