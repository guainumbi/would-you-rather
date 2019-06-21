import { generateID } from "./shared";
import {
  ADD_USER,
  ADD_ASKED_QUESTION,
  ADD_ANSWERED_QUESTION,
  RECEIVE_USERS
} from "./types";

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
