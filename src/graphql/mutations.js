/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      userName
      firstName
      middleName
      lastName
      parentId
      phone_number
      email
      userCode
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      userName
      firstName
      middleName
      lastName
      parentId
      phone_number
      email
      userCode
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      userName
      firstName
      middleName
      lastName
      parentId
      phone_number
      email
      userCode
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
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
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
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
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
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
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
export const createUserPlans = /* GraphQL */ `
  mutation CreateUserPlans(
    $input: CreateUserPlansInput!
    $condition: ModelUserPlansConditionInput
  ) {
    createUserPlans(input: $input, condition: $condition) {
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
export const updateUserPlans = /* GraphQL */ `
  mutation UpdateUserPlans(
    $input: UpdateUserPlansInput!
    $condition: ModelUserPlansConditionInput
  ) {
    updateUserPlans(input: $input, condition: $condition) {
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
export const deleteUserPlans = /* GraphQL */ `
  mutation DeleteUserPlans(
    $input: DeleteUserPlansInput!
    $condition: ModelUserPlansConditionInput
  ) {
    deleteUserPlans(input: $input, condition: $condition) {
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
