import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    getAllRoles: async () => {
      return prisma.roles.findMany({
        include: { Staff: true },
      });
    },
    getSingleRole: async (_, { id }) => {
      return prisma.roles.findUnique({
        where: { id },
        include: { Staff: true },
      });
    },
    getAllStaffs: async () => {
      return prisma.staff.findMany({
        include: { role: true },
      });
    },
    getSingleStaff: async (_, { id }) => {
      return prisma.staff.findUnique({
        where: { id },
        include: { role: true },
      });
    },
  },
  Mutation: {
    createRole: async (_, { roleName, createdBy }) => {
      return prisma.roles.create({
        data: {
          roleName,
          createdBy,
        },
        include: { Staff: true },
      });
    },
    updateRole: async (_, { id, roleName, createdBy }) => {
      return prisma.roles.update({
        where: { id },
        data: {
          roleName,
          createdBy,
        },
        include: { Staff: true },
      });
    },
    deleteRole: async (_, { id }) => {
      return prisma.roles.delete({
        where: { id },
        include: { Staff: true },
      });
    },
    createStaff: async (
      _,
      {
        name,
        branch,
        mobileNo,
        address,
        email,
        aadharNo,
        qualification,
        yearOfPassing,
        yearOfExperience,
        previousOrganisation,
        joinDate,
        bankName,
        accountNo,
        bankBranch,
        ifsc,
        status,
        staffPhoto,
        username,
        password,
        roleId,
        isExpenseApprove,
        isLoanApprove,
      }
    ) => {
      return prisma.staff.create({
        data: {
          name,
          branch,
          mobileNo,
          address,
          email,
          aadharNo,
          qualification,
          yearOfPassing,
          yearOfExperience,
          previousOrganisation,
          joinDate,
          bankName,
          accountNo,
          bankBranch,
          ifsc,
          status,
          staffPhoto,
          username,
          password,
          roleId,
          isExpenseApprove,
          isLoanApprove,
        },
        include: {
          role: true,
        },
      });
    },
    updateStaff: async (
      _,
      {
        id,
        name,
        branch,
        mobileNo,
        address,
        email,
        aadharNo,
        qualification,
        yearOfPassing,
        yearOfExperience,
        previousOrganisation,
        joinDate,
        bankName,
        accountNo,
        bankBranch,
        ifsc,
        status,
        staffPhoto,
        username,
        password,
        roleId,
        isExpenseApprove,
        isLoanApprove,
      }
    ) => {
      return prisma.staff.update({
        where: { id },
        data: {
          name,
          branch,
          mobileNo,
          address,
          email,
          aadharNo,
          qualification,
          yearOfPassing,
          yearOfExperience,
          previousOrganisation,
          joinDate,
          bankName,
          accountNo,
          bankBranch,
          ifsc,
          status,
          staffPhoto,
          username,
          password,
          roleId,
          isExpenseApprove,
          isLoanApprove,
        },
        include: {
          role: true,
        },
      });
    },
    deleteStaff: async (_, { id }) => {
      return prisma.staff.delete({
        where: { id },
        include: { role: true },
      });
    },
  },
};
