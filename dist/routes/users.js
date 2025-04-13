"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/userRoutes.ts
const express_1 = require("express");
const users_1 = require("../controllers/users");
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
router.post('/register', users_1.registerUser);
router.post('/login', users_1.loginUser);
router.get("/me", auth_1.authenticate, users_1.getUserDetails);
exports.default = router;
