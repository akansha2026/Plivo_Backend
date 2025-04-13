"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrganization = exports.updateOrganization = exports.createOrganization = exports.getOrganizationById = exports.getOrganizations = void 0;
const client_1 = __importDefault(require("../db/client"));
const enums_1 = require("../constants/enums");
const getOrganizations = async (req, res) => {
    const userId = req.user?.id;
    try {
        const organizations = await client_1.default.userOrganization.findMany({
            where: { userId },
            include: { organization: true },
        });
        res.json(organizations.map(entry => entry.organization));
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch organizations', error });
    }
};
exports.getOrganizations = getOrganizations;
const getOrganizationById = async (req, res) => {
    const orgId = req.headers['org-id'];
    try {
        const organization = await client_1.default.organization.findUnique({
            where: { id: orgId },
        });
        if (!organization) {
            res.status(404).json({ message: 'Organization not found' });
        }
        else {
            res.json(organization);
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch organization', error });
    }
};
exports.getOrganizationById = getOrganizationById;
const createOrganization = async (req, res) => {
    const userId = req.user?.id;
    const { name } = req.body;
    try {
        const organization = await client_1.default.organization.create({
            data: {
                name,
                createdBy: userId,
                users: {
                    create: {
                        userId: userId,
                        role: enums_1.OrgRole.ADMIN,
                    },
                },
            },
        });
        res.status(201).json(organization);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create organization', error });
    }
};
exports.createOrganization = createOrganization;
const updateOrganization = async (req, res) => {
    const orgId = req.headers['org-id'];
    const { name } = req.body;
    try {
        const organization = await client_1.default.organization.update({
            where: { id: orgId },
            data: { name },
        });
        res.json(organization);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to update organization', error });
    }
};
exports.updateOrganization = updateOrganization;
const deleteOrganization = async (req, res) => {
    const orgId = req.headers['org-id'];
    try {
        // Step 1: Delete all UserOrganization entries associated with the organization
        await client_1.default.userOrganization.deleteMany({
            where: { organizationId: orgId },
        });
        await client_1.default.incident.deleteMany({
            where: { organizationId: orgId },
        });
        // Step 2: Now, delete the organization itself
        await client_1.default.organization.delete({
            where: { id: orgId },
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to delete organization',
            error: error instanceof Error ? error.message : error,
        });
    }
};
exports.deleteOrganization = deleteOrganization;
