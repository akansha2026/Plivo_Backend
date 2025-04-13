-- CreateEnum
CREATE TYPE "GlobalRole" AS ENUM ('SUPERUSER', 'USER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "globalRole" "GlobalRole" NOT NULL DEFAULT 'USER';
