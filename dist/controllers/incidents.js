"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteIncident = exports.updateIncident = exports.createIncident = exports.getIncidentById = exports.getAllIncidents = exports.getIncidents = void 0;
const client_1 = __importDefault(require("../db/client"));
const validator_1 = require("../utils/validator");
const getIncidents = async (req, res) => {
    try {
        const { serviceId } = req.params; // Extracting serviceId from the route parameters
        const organizationId = req.headers['org-id'];
        const incidents = await client_1.default.incident.findMany({
            where: {
                serviceId, // Filtering incidents based on serviceId
                organizationId,
            },
        });
        res.json(incidents);
    }
    catch (error) {
        console.error('Error fetching incidents:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getIncidents = getIncidents;
const getAllIncidents = async (req, res) => {
    try {
        const organizationId = req.headers['org-id'];
        const incidents = await client_1.default.incident.findMany({
            where: {
                organizationId,
            },
        });
        res.json(incidents);
    }
    catch (error) {
        console.error('Error fetching incidents:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getAllIncidents = getAllIncidents;
const getIncidentById = async (req, res) => {
    try {
        const { serviceId, id } = req.params; // Extracting serviceId and incidentId
        const organizationId = req.headers['org-id'];
        const incident = await client_1.default.incident.findFirst({
            where: {
                id,
                serviceId, // Ensuring the incident belongs to the specified service
                organizationId,
            },
            include: {
                updates: true,
                service: true
            },
        });
        if (!incident) {
            res.status(404).json({ message: 'Incident not found' });
            return;
        }
        res.json(incident);
    }
    catch (error) {
        console.error('Error fetching incident:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getIncidentById = getIncidentById;
const createIncident = async (req, res) => {
    try {
        const { serviceId } = req.params; // Extracting serviceId from the route parameters
        const organizationId = req.headers['org-id'];
        const userId = req.user?.id;
        const { title, description, status, } = req.body;
        const result = validator_1.incidentSchema.safeParse({
            title,
            description,
            status,
        });
        if (result.error) {
            res.status(400).json({
                message: 'Validation failed!',
                error: result.error.errors,
            });
            return;
        }
        const service = await client_1.default.service.findUnique({
            where: { id: serviceId },
        });
        if (!service) {
            res.status(404).json({ message: 'Service not found' });
            return;
        }
        const incident = await client_1.default.incident.create({
            data: {
                title,
                description,
                status,
                startedAt: new Date(),
                organizationId,
                createdBy: userId,
                serviceId, // Associating the incident with the service
            },
        });
        res.status(201).json(incident);
    }
    catch (error) {
        console.error('Error creating incident:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.createIncident = createIncident;
const updateIncident = async (req, res) => {
    try {
        const { serviceId, id } = req.params; // Extracting serviceId and incidentId
        const organizationId = req.headers['org-id'];
        const { title, description, status, resolvedAt } = req.body;
        const existing = await client_1.default.incident.findFirst({
            where: {
                id,
                serviceId, // Ensuring the incident belongs to the specified service
                organizationId,
            },
        });
        if (!existing) {
            res.status(404).json({ message: 'Incident not found' });
            return;
        }
        const incident = await client_1.default.incident.update({
            where: { id },
            data: {
                title,
                description,
                status,
                resolvedAt: resolvedAt ? new Date(resolvedAt) : undefined,
            },
        });
        res.json(incident);
    }
    catch (error) {
        console.error('Error updating incident:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.updateIncident = updateIncident;
const deleteIncident = async (req, res) => {
    try {
        const { serviceId, id } = req.params; // Extracting serviceId and incidentId
        const organizationId = req.headers['org-id'];
        const userId = req.user?.id;
        const existing = await client_1.default.incident.findFirst({
            where: {
                id,
                serviceId, // Ensuring the incident belongs to the specified service
                organizationId,
            },
        });
        if (!existing) {
            res.status(404).json({ message: 'Incident not found' });
            return;
        }
        if (existing.createdBy !== userId) {
            res.status(403).json({ message: 'Unauthorized: only the creator can delete this incident' });
            return;
        }
        await client_1.default.incident.delete({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error('Error deleting incident:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.deleteIncident = deleteIncident;
