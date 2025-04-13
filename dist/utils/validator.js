"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incidentSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../constants/enums");
exports.userSchema = zod_1.z.object({
    email: zod_1.z.string().email().min(1, 'Email is required'),
    password: zod_1.z.string().min(6, 'Password must be at least 6 characters'),
    name: zod_1.z.string().min(2, 'Name must be at least 2 characters').optional(),
});
exports.incidentSchema = zod_1.z.object({
    title: zod_1.z.string().min(3, 'Title must be at least 3 characters long'),
    description: zod_1.z.string().min(10, 'Description must be at least 10 characters long'),
    status: zod_1.z.nativeEnum(enums_1.IncidentStatus),
});
