/*
  Warnings:

  - You are about to drop the `UserRights` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserRights" DROP CONSTRAINT "UserRights_rolesId_fkey";

-- DropTable
DROP TABLE "UserRights";
