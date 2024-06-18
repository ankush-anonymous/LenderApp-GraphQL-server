import { gql } from "apollo-server";

export const typeDefs = gql`
  type Roles {
    roleId: String
    roleTitle: String
    roleDescription: String
    createdOn: String
    createdBy: String
  }

  type Staff {
    id: String
    name: String
    staffCode: Int
    branch: String
    mobileNo: String
    address: String
    email: String
    aadharNo: String
    qualification: String
    yearOfPassing: Int
    yearOfExperience: Int
    previousOrganisation: String
    joinDate: String
    bankName: String
    accountNo: String
    bankBranch: String
    ifsc: String
    status: String
    staffPhoto: String
    username: String
    password: String
    roleIds: [String]
    isExpenseApprove: Boolean
    isLoanApprove: Boolean
  }

  type Query {
    getAllRoles: [Roles]
    getSingleRole(roleId: String): Roles
    getAllStaff: [Staff]
    getSingleStaff(id: String): Staff
  }

  type Mutation {
    createRole(
      roleTitle: String
      roleDescription: String
      createdBy: String
    ): Roles
    updateRole(
      roleId: String
      roleTitle: String
      roleDescription: String
      createdBy: String
    ): Roles
    deleteRole(roleId: String): Roles
    createStaff(
      name: String
      branch: String
      mobileNo: String
      address: String
      email: String
      aadharNo: String
      qualification: String
      yearOfPassing: Int
      yearOfExperience: Int
      previousOrganisation: String
      joinDate: String
      bankName: String
      accountNo: String
      bankBranch: String
      ifsc: String
      status: String
      staffPhoto: String
      username: String
      password: String
      roleIds: [String]
      isExpenseApprove: Boolean
      isLoanApprove: Boolean
    ): Staff
    updateStaff(
      id: String
      name: String
      branch: String
      mobileNo: String
      address: String
      email: String
      aadharNo: String
      qualification: String
      yearOfPassing: Int
      yearOfExperience: Int
      previousOrganisation: String
      joinDate: String
      bankName: String
      accountNo: String
      bankBranch: String
      ifsc: String
      status: String
      staffPhoto: String
      username: String
      password: String
      roleIds: [String]
      isExpenseApprove: Boolean
      isLoanApprove: Boolean
    ): Staff
    deleteStaff(id: String): Staff
  }
`;
