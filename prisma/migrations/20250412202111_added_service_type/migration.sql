/*
  Warnings:

  - A unique constraint covering the columns `[name,organizationId]` on the table `Service` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('WEBSITE', 'API', 'DATABASE', 'CACHE', 'STORAGE', 'AUTHENTICATION', 'PAYMENT_GATEWAY', 'EMAIL', 'CDN', 'BACKEND', 'OTHER');

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "type" "ServiceType" NOT NULL DEFAULT 'OTHER';

-- CreateIndex
CREATE UNIQUE INDEX "Service_name_organizationId_key" ON "Service"("name", "organizationId");
