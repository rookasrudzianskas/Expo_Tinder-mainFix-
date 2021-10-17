/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
      id
      User1ID
      User1 {
        id
        name
        image
        bio
        gender
        lookingFor
        sub
        createdAt
        updatedAt
      }
      User2ID
      User2 {
        id
        name
        image
        bio
        gender
        lookingFor
        sub
        createdAt
        updatedAt
      }
      isMatch
      createdAt
      updatedAt
    }
  }
`;
export const listMatchs = /* GraphQL */ `
  query ListMatchs(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        User1ID
        User1 {
          id
          name
          image
          bio
          gender
          lookingFor
          sub
          createdAt
          updatedAt
        }
        User2ID
        User2 {
          id
          name
          image
          bio
          gender
          lookingFor
          sub
          createdAt
          updatedAt
        }
        isMatch
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      image
      bio
      gender
      lookingFor
      sub
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
        name
        image
        bio
        gender
        lookingFor
        sub
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
