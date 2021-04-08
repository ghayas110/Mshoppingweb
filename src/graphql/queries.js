/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      userName
      firstName
      middleName
      lastName
      parentId
      phone_number
      email
      userCode
      fs
      userType
      userRole
      gender
      dob
      address
      city
      CNIC
      paymentMethod
      bankName
      branchCode
      accountNo
      canRegister
      status
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userName
        firstName
        middleName
        lastName
        parentId
        phone_number
        email
        userCode
        fs
        userType
        userRole
        gender
        dob
        address
        city
        CNIC
        paymentMethod
        bankName
        branchCode
        accountNo
        canRegister
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      id
      name
      fee
      term
      ROI
      startDate
      endDate
      status
      subscription
      levels
      createdAt
      updatedAt
    }
  }
`;
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        fee
        term
        ROI
        startDate
        endDate
        status
        subscription
        levels
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserPlans = /* GraphQL */ `
  query GetUserPlans($id: ID!) {
    getUserPlans(id: $id) {
      id
      userId
      user {
        id
        userName
        firstName
        middleName
        lastName
        parentId
        phone_number
        email
        userCode
        fs
        userType
        userRole
        gender
        dob
        address
        city
        CNIC
        paymentMethod
        bankName
        branchCode
        accountNo
        canRegister
        status
        createdAt
        updatedAt
      }
      planId
      plan {
        id
        name
        fee
        term
        ROI
        startDate
        endDate
        status
        subscription
        levels
        createdAt
        updatedAt
      }
      transactionCode
      startingDate
      paymentStatus
      planStatus
      createdAt
      updatedAt
    }
  }
`;
export const listUserPlanss = /* GraphQL */ `
  query ListUserPlanss(
    $filter: ModelUserPlansFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPlanss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        planId
        user {
        id
        userName
        firstName
        middleName
        lastName
        parentId
        phone_number
        email
        userCode
        fs
        userType
        userRole
        gender
        dob
        address
        city
        CNIC
        paymentMethod
        bankName
        branchCode
        accountNo
        canRegister
        status
        createdAt
        updatedAt
      }
      plan {
        id
        name
        fee
        term
        ROI
        startDate
        endDate
        status
        subscription
        levels
        createdAt
        updatedAt
      }
        transactionCode
        startingDate
        paymentStatus
        planStatus
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listPlansByFees = /* GraphQL */ `
  query ListPlansByFees(
    $fee: String
    $sortDirection: ModelSortDirection
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlansByFees(
      fee: $fee
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        fee
        term
        ROI
        startDate
        endDate
        status
        subscription
        levels
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
