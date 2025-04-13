/*
  Warnings:

  - You are about to drop the `IncidentService` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `serviceId` to the `Incident` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "IncidentService" DROP CONSTRAINT "IncidentService_incidentId_fkey";

-- DropForeignKey
ALTER TABLE "IncidentService" DROP CONSTRAINT "IncidentService_serviceId_fkey";

-- AlterTable
ALTER TABLE "Incident" ADD COLUMN     "serviceId" TEXT NOT NULL;

-- DropTable
DROP TABLE "IncidentService";

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
