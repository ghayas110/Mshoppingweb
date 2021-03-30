/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      username
      id
      userType
      userRole
      Fname
      Lname
      gender
      parentId
      dob
      address
      city
      SignupDate
      CNIC
      State
      canRegister
      phone_number
      email
      userCode
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
        username
        id
        userType
        userRole
        Fname
        Lname
        gender
        parentId
        dob
        address
        city
        SignupDate
        CNIC
        State
        canRegister
        phone_number
        email
        userCode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
