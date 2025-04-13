"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserRoleInOrganization = exports.updateUserRoleInOrganization = exports.getUnassignedUsersForOrganization = exports.removeUserFromOrganization = exports.getOrganizationMembers = exports.addUserToOrganization = void 0;
const client_1 = __importDefault(require("../db/client"));
const enums_1 = require("../constants/enums");
const addUserToOrganization = async (req, res) => {
    const { userId, role } = req.body;
    const orgId = req.headers["org-id"]; // Get org-id from header
    if (!orgId || typeof orgId !== "string") {
        const message = "Missing or invalid 'org-id' header";
        res.status(400).json({ message });
        return;
    }
    try {
        const org = await client_1.default.organization.findUnique({ where: { id: orgId } });
        if (!org) {
            const message = "Organization not found";
            res.status(404).json({ message });
            return;
        }
        const user = await client_1.default.user.findUnique({ where: { id: userId } });
        if (!user) {
            const message = "User not found";
            res.status(404).json({ message });
            return;
        }
        const existing = await client_1.default.userOrganization.findUnique({
            where: { userId_organizationId: { userId, organizationId: orgId } },
        });
        if (existing) {
            const message = "User already in organization";
            res.status(400).json({ message });
            return;
        }
        const membership = await client_1.default.userOrganization.create({
            data: {
                userId,
                organizationId: orgId,
                role: role || enums_1.OrgRole.MEMBER,
            },
        });
        res.status(201).json(membership);
    }
    catch (error) {
        console.error("Error adding user to organization:", error);
        const message = "Internal server error";
        res.status(500).json({ message });
    }
};
exports.addUserToOrganization = addUserToOrganization;
const getOrganizationMembers = async (req, res) => {
    const orgId = req.headers["org-id"]; // Get org-id from header
    if (!orgId || typeof orgId !== "string") {
        const message = "Missing or invalid 'org-id' header";
        res.status(400).json({ message });
        return;
    }
    try {
        const members = await client_1.default.userOrganization.findMany({
            where: { organizationId: orgId },
            include: { user: true },
        });
        res.json(members);
    }
    catch (error) {
        console.error("Error fetching organization members:", error);
        const message = "Internal server error";
        res.status(500).json({ message });
    }
};
exports.getOrganizationMembers = getOrganizationMembers;
const removeUserFromOrganization = async (req, res) => {
    const orgId = req.headers["org-id"]; // Get org-id from header
    const { userId } = req.params;
    if (!orgId || typeof orgId !== "string") {
        const message = "Missing or invalid 'org-id' header";
        res.status(400).json({ message });
        return;
    }
    try {
        await client_1.default.userOrganization.delete({
            where: { userId_organizationId: { userId, organizationId: orgId } },
        });
        res.status(204).send();
    }
    catch (error) {
        console.error("Error removing user from organization:", error);
        const message = "Internal server error";
        res.status(500).json({ message });
    }
};
exports.removeUserFromOrganization = removeUserFromOrganization;
const getUnassignedUsersForOrganization = async (req, res) => {
    const orgId = req.headers["org-id"];
    try {
        const unassignedUsers = await client_1.default.user.findMany({
            where: {
                memberships: {
                    none: {
                        organizationId: orgId,
                    },
                },
            },
            select: {
                id: true,
                email: true,
                name: true,
            },
        });
        res.status(200).json(unassignedUsers);
    }
    catch (error) {
        console.error("Error fetching unassigned users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.getUnassignedUsersForOrganization = getUnassignedUsersForOrganization;
const updateUserRoleInOrganization = async (req, res) => {
    const orgId = req.headers["org-id"];
    const { userId } = req.params;
    const { role } = req.body;
    if (!role || !Object.values(enums_1.OrgRole).includes(role)) {
        const message = "Invalid or missing role";
        res.status(400).json({ message });
        return;
    }
    try {
        const existingMembership = await client_1.default.userOrganization.findUnique({
            where: {
                userId_organizationId: { userId, organizationId: orgId },
            },
        });
        if (!existingMembership) {
            const message = "User is not a member of the organization";
            res.status(404).json({ message });
            return;
        }
        const updated = await client_1.default.userOrganization.update({
            where: {
                userId_organizationId: { userId, organizationId: orgId },
            },
            data: {
                role,
            },
        });
        res.status(200).json(updated);
    }
    catch (error) {
        console.error("Error updating user role:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.updateUserRoleInOrganization = updateUserRoleInOrganization;
const getUserRoleInOrganization = async (req, res) => {
    const orgId = req.headers['org-id'];
    const userId = req.user?.id;
    if (!orgId) {
        res.status(400).json({ message: 'Missing org-id header' });
        return;
    }
    try {
        const membership = await client_1.default.userOrganization.findUnique({
            where: {
                userId_organizationId: {
                    userId,
                    organizationId: orgId,
                },
            },
            select: {
                role: true,
            },
        });
        if (!membership) {
            res.status(404).json({ message: 'User is not a member of this organization' });
            return;
        }
        res.status(200).json({ role: membership.role });
    }
    catch (error) {
        console.error('Error fetching user role:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getUserRoleInOrganization = getUserRoleInOrganization;
