"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDetails = exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = __importDefault(require("../db/client"));
const jwt_1 = require("../utils/jwt");
const validator_1 = require("../utils/validator");
const prisma_1 = require("../generated/prisma");
const registerUser = async (req, res) => {
    const { email, password, name } = req.body;
    const result = validator_1.userSchema.safeParse({ email, password, name });
    if (result.error) {
        res.status(400).json({
            message: 'validation failed!',
            error: result.error.errors
        });
        return;
    }
    const userExists = await client_1.default.user.findUnique({
        where: { email },
    });
    if (userExists) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const user = await client_1.default.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
            role: prisma_1.UserRole.USER
        },
    });
    res.status(201).json({ message: 'User created succesfully!' });
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const result = validator_1.userSchema.omit({ name: true }).safeParse({ email, password });
    if (!result.success) {
        res.status(400).json({
            message: 'Validation failed!',
            error: result.error.errors,
        });
        return;
    }
    const user = await client_1.default.user.findUnique({
        where: { email },
        include: {
            memberships: {
                select: {
                    organizationId: true,
                },
            },
        },
    });
    if (!user) {
        res.status(404).json({ message: 'Invalid email address.' });
        return;
    }
    const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        res.status(401).json({ message: 'Invalid password.' });
        return;
    }
    const token = (0, jwt_1.signToken)({ id: user.id, role: user.role }, '1h');
    const defaultOrg = user.defaultOrgId || user.memberships[0]?.organizationId || null;
    console.log(defaultOrg);
    res.status(200).json({
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
        },
        orgId: defaultOrg,
        token,
    });
};
exports.loginUser = loginUser;
const getUserDetails = async (req, res) => {
    const userId = req.user?.id;
    if (!userId) {
        res.status(400).json({ message: 'User not authenticated.' });
        return;
    }
    try {
        const user = await client_1.default.user.findUnique({
            where: { id: userId },
            include: {
                createdOrganizations: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
                memberships: {
                    include: {
                        organization: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
            },
        });
        if (!user) {
            res.status(404).json({ message: 'User not found.' });
            return;
        }
        const userResponse = {
            id: user.id,
            email: user.email,
            name: user.name,
            createdOrganizations: user.createdOrganizations,
            memberships: user.memberships.map(m => m.organization),
        };
        res.status(200).json(userResponse);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving user details.' });
    }
};
exports.getUserDetails = getUserDetails;
