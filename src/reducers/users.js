import {
  ADD_USER,
  ADD_ASKED_QUESTION,
  ADD_ANSWERED_QUESTION,
  RECEIVE_USERS
} from "../actions/users";

export default function addUser(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_USER:
      return {
        ...state,
        ...state.users,
        [action.user.id]: action.user
      };
    case ADD_ASKED_QUESTION:
      return {
        ...state,
        [action.user_id]: {
          ...state[action.user_id],
          asked_polls: state[action.user_id].asked_polls.concat([action.id])
        }
      };
    case ADD_ANSWERED_QUESTION:
      return {
        ...state,
        [action.user_id]: {
          ...state[action.user_id],
          answered_polls: state[action.user_id].answered_polls.concat([
            action.id
          ])
        }
      };
    default:
      return state;
  }
}
