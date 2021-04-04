export const listPlansByFees = /* GraphQL */ `
  query listPlansByFees(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
    sortDirection: ASC
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

export const listUserPlans = /* GraphQL */ `
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
        startingDate
        paymentStatus
        planStatus
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
