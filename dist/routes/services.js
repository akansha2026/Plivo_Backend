"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/services.ts
const express_1 = require("express");
const services_1 = require("../controllers/services");
const auth_1 = require("../middlewares/auth");
const headers_1 = require("../middlewares/headers");
const router = (0, express_1.Router)();
router.get('/', auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgMember, services_1.getServices);
router.get('/:id', auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgMember, services_1.getServiceById);
router.post('/', auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgAdmin, services_1.createService);
router.put('/:id', auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgAdmin, services_1.updateService);
router.delete('/:id', auth_1.authenticate, headers_1.requireOrgHeader, auth_1.requireOrgAdmin, services_1.deleteService);
exports.default = router;
