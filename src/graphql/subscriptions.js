/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan {
    onCreatePlan {
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
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan {
    onUpdatePlan {
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
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan {
    onDeletePlan {
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
export const onCreateUserPlans = /* GraphQL */ `
  subscription OnCreateUserPlans {
    onCreateUserPlans {
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
export const onUpdateUserPlans = /* GraphQL */ `
  subscription OnUpdateUserPlans {
    onUpdateUserPlans {
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
export const onDeleteUserPlans = /* GraphQL */ `
  subscription OnDeleteUserPlans {
    onDeleteUserPlans {
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
