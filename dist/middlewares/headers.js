"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireOrgHeader = void 0;
const client_1 = __importDefault(require("../db/client"));
const requireOrgHeader = async (req, res, next) => {
    const orgId = req.headers["org-id"];
    if (!orgId || typeof orgId !== "string") {
        res.status(400).json({ message: "Missing or invalid 'org-id' header" });
        return;
    }
    const organization = await client_1.default.organization.findUnique({
        where: { id: orgId }
    });
    if (!organization) {
        res.status(404).json({ message: "Organization not found" });
        return;
    }
    next();
};
exports.requireOrgHeader = requireOrgHeader;
