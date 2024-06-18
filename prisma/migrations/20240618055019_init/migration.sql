-- CreateTable
CREATE TABLE "Roles" (
    "roleId" TEXT NOT NULL,
    "roleTitle" TEXT NOT NULL,
    "roleDescription" TEXT NOT NULL,
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("roleId")
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
    "roleIds" TEXT[],
    "isExpenseApprove" BOOLEAN NOT NULL,
    "isLoanApprove" BOOLEAN NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Staff_staffCode_key" ON "Staff"("staffCode");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_username_key" ON "Staff"("username");
