/*
  Warnings:

  - You are about to drop the column `roleId` on the `UserRights` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserRights" DROP CONSTRAINT "UserRights_roleId_fkey";

-- AlterTable
ALTER TABLE "UserRights" DROP COLUMN "roleId",
ADD COLUMN     "rolesId" TEXT;

-- AddForeignKey
ALTER TABLE "UserRights" ADD CONSTRAINT "UserRights_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "Roles"("id") ON DELETE SET NULL ON UPDATE CASCADE;
