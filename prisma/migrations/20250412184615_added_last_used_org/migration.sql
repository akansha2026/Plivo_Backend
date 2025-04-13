-- AlterTable
ALTER TABLE "User" ADD COLUMN     "defaultOrgId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_defaultOrgId_fkey" FOREIGN KEY ("defaultOrgId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;
