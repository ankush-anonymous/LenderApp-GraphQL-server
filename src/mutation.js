import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    getAllRoles: async (_, __, { prisma }) => {
      return prisma.roles.findMany();
    },
    getSingleRole: async (_, { roleId }, { prisma }) => {
      return prisma.roles.findUnique({
        where: { roleId },
      });
    },
    getAllStaff: async (_, __, { prisma }) => {
      return prisma.staff.findMany();
    },
    getSingleStaff: async (_, { id }, { prisma }) => {
      return prisma.staff.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    createRole: async (
      _,
      { roleTitle, roleDescription, createdBy },
      { prisma }
    ) => {
      return prisma.roles.create({
        data: {
          roleTitle,
          roleDescription,
          createdBy,
        },
      });
    },
    updateRole: async (
      _,
      { roleId, roleTitle, roleDescription, createdBy },
      { prisma }
    ) => {
      return prisma.roles.update({
        where: { roleId },
        data: {
          roleTitle,
          roleDescription,
          createdBy,
        },
      });
    },
    deleteRole: async (_, { roleId }, { prisma }) => {
      return prisma.roles.delete({
        where: { roleId },
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
        roleIds,
        isExpenseApprove,
        isLoanApprove,
      },
      { prisma }
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
          roleIds,
          isExpenseApprove,
          isLoanApprove,
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
        roleIds,
        isExpenseApprove,
        isLoanApprove,
      },
      { prisma }
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
          roleIds,
          isExpenseApprove,
          isLoanApprove,
        },
      });
    },
    deleteStaff: async (_, { id }, { prisma }) => {
      return prisma.staff.delete({
        where: { id },
      });
    },
  },
};
