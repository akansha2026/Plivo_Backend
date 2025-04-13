"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncidentUpdatesForIncident = exports.getIncidentUpdateById = exports.deleteIncidentUpdate = exports.createIncidentUpdate = void 0;
const client_1 = __importDefault(require("../db/client"));
const enums_1 = require("../constants/enums");
const sockets_1 = require("../utils/sockets");
/**
 * Create an incident update linked to a specific incident
 * POST /incident/:incidentId
 */
const createIncidentUpdate = async (req, res) => {
    const { incidentId } = req.params; // Getting incidentId from params
    const { message, status } = req.body;
    const userId = req.user?.id;
    try {
        const incident = await client_1.default.incident.findUnique({
            where: { id: incidentId },
        });
        if (!incident) {
            res.status(404).json({ message: 'Incident not found' });
            return;
        }
        // Create the incident update
        const update = await client_1.default.incidentUpdate.create({
            data: {
                incidentId,
                message,
                status,
                createdBy: userId, // Set the user ID as the creator of the update
            },
        });
        // Update the incident status based on the new update's status
        await client_1.default.incident.update({
            where: { id: incidentId },
            data: { status },
        });
        // Emit the new incident update to notify subscribers
        (0, sockets_1.emitIncidentUpdate)({
            type: 'add',
            incidentId,
            update,
        });
        res.status(201).json(update);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create incident update', error });
    }
};
exports.createIncidentUpdate = createIncidentUpdate;
/**
 * Delete a specific incident update (only creator can delete)
 * DELETE /incident/:incidentId/:id
 */
const deleteIncidentUpdate = async (req, res) => {
    const { incidentId, id } = req.params; // Getting both incidentId and id from params
    const userId = req.user?.id;
    try {
        const update = await client_1.default.incidentUpdate.findUnique({
            where: { id },
        });
        if (!update) {
            res.status(404).json({ message: 'Update not found' });
            return;
        }
        // Ensure the user is the creator of the update
        if (update.createdBy !== userId) {
            res.status(403).json({ message: 'Unauthorized to delete this update' });
            return;
        }
        // Delete the incident update
        await client_1.default.incidentUpdate.delete({
            where: { id },
        });
        // Check if there are any remaining updates for the incident
        const remainingUpdates = await client_1.default.incidentUpdate.findMany({
            where: { incidentId },
        });
        // If no updates are left, set incident status to 'SCHEDULED'
        if (remainingUpdates.length === 0) {
            await client_1.default.incident.update({
                where: { id: incidentId },
                data: {
                    status: enums_1.IncidentStatus.SCHEDULED, // Default status when no updates exist
                },
            });
        }
        else {
            // Otherwise, update the incident status based on the most recent update
            const latestUpdate = remainingUpdates[remainingUpdates.length - 1];
            await client_1.default.incident.update({
                where: { id: incidentId },
                data: {
                    status: latestUpdate.status, // Set status to the last update's status
                },
            });
        }
        // Emit the removal of the incident update
        (0, sockets_1.emitIncidentUpdate)({
            type: 'remove',
            incidentId,
            update,
        });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to delete update', error });
    }
};
exports.deleteIncidentUpdate = deleteIncidentUpdate;
/**
 * Get an incident update by its ID
 * GET /incident/:incidentId/:id
 */
const getIncidentUpdateById = async (req, res) => {
    const { incidentId, id } = req.params; // Getting incidentId and id from params
    try {
        const update = await client_1.default.incidentUpdate.findUnique({
            where: { id },
            include: {
                incident: true,
                user: true, // Include user info for the creator of the update
            },
        });
        if (!update) {
            res.status(404).json({ message: 'Update not found' });
            return;
        }
        res.json(update);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch update', error });
    }
};
exports.getIncidentUpdateById = getIncidentUpdateById;
/**
 * Get all updates for a specific incident
 * GET /incident/:incidentId
 */
const getIncidentUpdatesForIncident = async (req, res) => {
    const { incidentId } = req.params; // Getting incidentId from params
    try {
        const updates = await client_1.default.incidentUpdate.findMany({
            where: { incidentId },
            include: {
                incident: true,
                user: true, // Include user info for the creator of the update
            },
            orderBy: {
                createdAt: 'asc', // Order updates by creation date (ascending)
            },
        });
        res.json(updates || []);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch incident updates', error });
    }
};
exports.getIncidentUpdatesForIncident = getIncidentUpdatesForIncident;
