/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
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
      Fee
      Term
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
      Fee
      Term
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
      Fee
      Term
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
        canRegister
        status
        createdAt
        updatedAt
      }
      planId
      plan {
        id
        Fee
        Term
        ROI
        startDate
        endDate
        status
        subscription
        levels
        createdAt
        updatedAt
      }
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
        canRegister
        status
        createdAt
        updatedAt
      }
      planId
      plan {
        id
        Fee
        Term
        ROI
        startDate
        endDate
        status
        subscription
        levels
        createdAt
        updatedAt
      }
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
        canRegister
        status
        createdAt
        updatedAt
      }
      planId
      plan {
        id
        Fee
        Term
        ROI
        startDate
        endDate
        status
        subscription
        levels
        createdAt
        updatedAt
      }
      startingDate
      paymentStatus
      planStatus
      createdAt
      updatedAt
    }
  }
`;
