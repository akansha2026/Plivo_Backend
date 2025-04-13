/*
  Warnings:

  - You are about to drop the column `globalRole` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "globalRole",
ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';
