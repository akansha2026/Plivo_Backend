"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteService = exports.updateService = exports.createService = exports.getServiceById = exports.getServices = void 0;
const client_1 = __importDefault(require("../db/client"));
const getServices = async (req, res) => {
    const orgId = req.headers['org-id'];
    try {
        // Fetch services associated with the current organization
        const services = await client_1.default.service.findMany({
            where: {
                organizationId: orgId, // Filter services by the orgId
            },
        });
        res.json(services);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch services', error });
    }
};
exports.getServices = getServices;
const getServiceById = async (req, res) => {
    const { id } = req.params;
    const orgId = req.headers['org-id'];
    try {
        // Fetch service by ID and ensure it belongs to the current organization
        const service = await client_1.default.service.findUnique({
            where: { id },
            include: {
                organization: true, // Optionally include the organization in the response
            },
        });
        if (!service || service.organizationId !== orgId) {
            res.status(404).json({ message: 'Service not found or unauthorized access' });
            return;
        }
        res.json(service);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch service', error });
    }
};
exports.getServiceById = getServiceById;
const createService = async (req, res) => {
    const { name, type = 'OTHER', status = 'OPERATIONAL' } = req.body;
    const orgId = req.headers['org-id'];
    try {
        const service = await client_1.default.service.create({
            data: {
                name,
                type,
                status,
                organizationId: orgId, // Associate the service with the current organization
            },
        });
        res.status(201).json(service);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create service', error });
    }
};
exports.createService = createService;
const updateService = async (req, res) => {
    const { id } = req.params;
    const { name, status } = req.body;
    const orgId = req.headers['org-id'];
    try {
        // Ensure that the service belongs to the current organization before updating
        const service = await client_1.default.service.update({
            where: { id },
            data: { name, status },
        });
        if (service.organizationId !== orgId) {
            res.status(403).json({ message: 'Unauthorized access to update service' });
            return;
        }
        res.json(service);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to update service', error });
    }
};
exports.updateService = updateService;
const deleteService = async (req, res) => {
    const { id } = req.params;
    const orgId = req.headers['org-id'];
    try {
        // Ensure that the service belongs to the current organization before deleting
        const service = await client_1.default.service.findUnique({
            where: { id },
        });
        if (!service || service.organizationId !== orgId) {
            res.status(403).json({ message: 'Unauthorized access to delete service' });
            return;
        }
        await client_1.default.service.delete({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to delete service', error });
    }
};
exports.deleteService = deleteService;
