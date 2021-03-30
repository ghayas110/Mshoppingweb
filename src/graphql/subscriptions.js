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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
      title
      description
      price
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
      title
      description
      price
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
      title
      description
      price
      quantity
      createdAt
      updatedAt
    }
  }
`;
