import {
  ADD_QUESTION,
  ADD_ANSWERED_BY_USER,
  ADD_USERS_CHOICE,
  RECEIVE_QUESTIONS
} from "../actions/types";

export default function addQuestion(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ADD_QUESTION:
      return {
        ...state,
        ...state.questions,
        [action.question.id]: action.question
      };
    case ADD_ANSWERED_BY_USER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          answered_by: state[action.id].answered_by.concat([action.user_id])
        }
      };
    case ADD_USERS_CHOICE:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.choice]: state[action.id][action.choice].concat([
            action.user_id
          ])
        }
      };
    default:
      return state;
  }
}
