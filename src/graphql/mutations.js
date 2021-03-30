/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
