/*
  Warnings:

  - The `globalRole` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `UserOrganization` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "OrgRole" AS ENUM ('ADMIN', 'MEMBER');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('SUPERUSER', 'USER');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "globalRole",
ADD COLUMN     "globalRole" "UserRole" NOT NULL DEFAULT 'USER';

-- AlterTable
ALTER TABLE "UserOrganization" DROP COLUMN "role",
ADD COLUMN     "role" "OrgRole" NOT NULL DEFAULT 'MEMBER';

-- DropEnum
DROP TYPE "GlobalRole";

-- DropEnum
DROP TYPE "Role";
