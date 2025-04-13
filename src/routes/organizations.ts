import { Router } from "express";
import {
  getOrganizations,
  getOrganizationById,
  createOrganization,
  updateOrganization,
  deleteOrganization
} from "../controllers/organizations";
import { authenticate, requireOrgAdmin, requireOrgMember, requireSuperUser } from "../middlewares/auth";
import { requireOrgHeader } from "../middlewares/headers";

const router = Router();

router.get("/", authenticate, getOrganizations);

router.get("/current", authenticate, requireOrgHeader, requireOrgMember, getOrganizationById);

router.post("/", authenticate, requireSuperUser, createOrganization);

router.put("/", authenticate, requireOrgHeader, requireOrgAdmin, updateOrganization);

router.delete("/", authenticate, requireOrgHeader, requireOrgAdmin, deleteOrganization);

export default router;