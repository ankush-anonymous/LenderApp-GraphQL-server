-- CreateTable
CREATE TABLE "UserRights" (
    "userRightsId" TEXT NOT NULL,
    "userRightsTitle" TEXT NOT NULL,
    "userRightsDescription" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "UserRights_pkey" PRIMARY KEY ("userRightsId")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "roleName" TEXT NOT NULL,
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "staffCode" SERIAL NOT NULL,
    "branch" TEXT NOT NULL,
    "mobileNo" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "aadharNo" TEXT NOT NULL,
    "qualification" TEXT NOT NULL,
    "yearOfPassing" INTEGER NOT NULL,
    "yearOfExperience" INTEGER NOT NULL,
    "previousOrganisation" TEXT NOT NULL,
    "joinDate" TIMESTAMP(3) NOT NULL,
    "bankName" TEXT NOT NULL,
    "accountNo" TEXT NOT NULL,
    "bankBranch" TEXT NOT NULL,
    "ifsc" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "staffPhoto" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "isExpenseApprove" BOOLEAN NOT NULL,
    "isLoanApprove" BOOLEAN NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Staff_staffCode_key" ON "Staff"("staffCode");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_username_key" ON "Staff"("username");

-- AddForeignKey
ALTER TABLE "UserRights" ADD CONSTRAINT "UserRights_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
