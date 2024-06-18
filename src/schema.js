import { gql } from "apollo-server";

export const typeDefs = gql`
  type Roles {
    id: String!
    roleName: String!
    createdOn: String!
    createdBy: String!
    Staff: [Staff!]!
  }

  type Staff {
    id: String!
    name: String!
    staffCode: Int!
    branch: String!
    mobileNo: String!
    address: String!
    email: String!
    aadharNo: String!
    qualification: String!
    yearOfPassing: Int!
    yearOfExperience: Int!
    previousOrganisation: String!
    joinDate: String!
    bankName: String!
    accountNo: String!
    bankBranch: String!
    ifsc: String!
    status: String!
    staffPhoto: String!
    username: String!
    password: String!
    roleId: String!
    role: Roles!
    isExpenseApprove: Boolean!
    isLoanApprove: Boolean!
  }

  type Query {
    getAllRoles: [Roles!]!
    getSingleRole(id: String!): Roles
    getAllStaffs: [Staff!]!
    getSingleStaff(id: String!): Staff
  }

  type Mutation {
    createRole(roleName: String!, createdBy: String!): Roles!
    updateRole(id: String!, roleName: String!, createdBy: String!): Roles!
    deleteRole(id: String!): Roles!

    createStaff(
      name: String!
      branch: String!
      mobileNo: String!
      address: String!
      email: String!
      aadharNo: String!
      qualification: String!
      yearOfPassing: Int!
      yearOfExperience: Int!
      previousOrganisation: String!
      joinDate: String!
      bankName: String!
      accountNo: String!
      bankBranch: String!
      ifsc: String!
      status: String!
      staffPhoto: String!
      username: String!
      password: String!
      roleId: String!
      isExpenseApprove: Boolean!
      isLoanApprove: Boolean!
    ): Staff!

    updateStaff(
      id: String!
      name: String!
      branch: String!
      mobileNo: String!
      address: String!
      email: String!
      aadharNo: String!
      qualification: String!
      yearOfPassing: Int!
      yearOfExperience: Int!
      previousOrganisation: String!
      joinDate: String!
      bankName: String!
      accountNo: String!
      bankBranch: String!
      ifsc: String!
      status: String!
      staffPhoto: String!
      username: String!
      password: String!
      roleId: String!
      isExpenseApprove: Boolean!
      isLoanApprove: Boolean!
    ): Staff!

    deleteStaff(id: String!): Staff!
  }
`;
