/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModeltodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      name
      user
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModeltodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      name
      user
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModeltodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      name
      user
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
