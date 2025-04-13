"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireOrgAdmin = exports.requireOrgMember = exports.requireSuperUser = exports.authenticate = void 0;
const jwt_1 = require("../utils/jwt");
const enums_1 = require("../constants/enums");
const client_1 = __importDefault(require("../db/client"));
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'No token provided' });
        return;
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = (0, jwt_1.verifyToken)(token);
        req.user = { id: decoded.id, role: decoded.role };
        next();
    }
    catch (err) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};
exports.authenticate = authenticate;
const requireSuperUser = (req, res, next) => {
    const role = req.user?.role;
    if (!role || role !== enums_1.UserRole.SUPERUSER) {
        res.status(403).json({ message: 'Forbidden: SuperUser only' });
        return;
    }
    next();
};
exports.requireSuperUser = requireSuperUser;
const requireOrgMember = async (req, res, next) => {
    const userId = req.user?.id;
    const orgId = req.headers['org-id'];
    const membership = await client_1.default.userOrganization.findUnique({
        where: {
            userId_organizationId: {
                userId: userId,
                organizationId: orgId,
            },
        },
    });
    if (!membership) {
        res.status(403).json({ message: 'User is not a member of the specified organization.' });
        return;
    }
    next();
};
exports.requireOrgMember = requireOrgMember;
const requireOrgAdmin = async (req, res, next) => {
    const userId = req.user?.id;
    const orgId = req.headers['org-id'];
    const membership = await client_1.default.userOrganization.findUnique({
        where: {
            userId_organizationId: {
                userId: userId,
                organizationId: orgId,
            },
        },
    });
    if (!membership || membership.role !== enums_1.OrgRole.ADMIN) {
        res.status(403).json({ message: 'User is not an admin of the specified organization.' });
        return;
    }
    next();
};
exports.requireOrgAdmin = requireOrgAdmin;
