import { generateID } from "./shared";

export const ADD_USER = "ADD_USER";
export const ADD_ASKED_QUESTION = "ADD_ASKED_QUESTION";
export const ADD_ANSWERED_QUESTION = "ADD_ANSWERED_QUESTION";
export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}

function addUser(user) {
  return {
    type: ADD_USER,
    user
  };
}

export function addAskedQuestion(id, user_id) {
  return {
    type: ADD_ASKED_QUESTION,
    id,
    user_id
  };
}

export function addAnsweredQuestion(id, user_id) {
  return {
    type: ADD_ANSWERED_QUESTION,
    id,
    user_id
  };
}

export function handleAddUser(name, avatarUrl) {
  return (dispatch, getState) => {
    const user = {
      id: generateID(),
      name,
      avatarUrl,
      answered_polls: [],
      asked_polls: []
    };
    dispatch(addUser(user));
  };
}
