import { Request, Response, NextFunction } from "express";
import prisma from "../db/client";


export const requireOrgHeader = async (req: Request, res: Response, next: NextFunction) => {

    const orgId = req.headers["org-id"]; 

    if (!orgId || typeof orgId !== "string") {
        res.status(400).json({ message: "Missing or invalid 'org-id' header" });
        return
    }

    const organization = await prisma.organization.findUnique({
        where: { id: orgId }
    });

    if (!organization) {
        res.status(404).json({ message: "Organization not found" });
        return
    }

    next();

};