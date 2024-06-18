/*
  Warnings:

  - The primary key for the `Roles` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Staff" DROP CONSTRAINT "Staff_roleId_fkey";

-- DropForeignKey
ALTER TABLE "UserRights" DROP CONSTRAINT "UserRights_roleId_fkey";

-- AlterTable
ALTER TABLE "Roles" DROP CONSTRAINT "Roles_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Roles_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Roles_id_seq";

-- AlterTable
ALTER TABLE "Staff" ALTER COLUMN "roleId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "UserRights" ALTER COLUMN "roleId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "UserRights" ADD CONSTRAINT "UserRights_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
