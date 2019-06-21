import { SET_AUTHED_USER } from "../actions/types";

export default function authedUser(
  state = {
    user_id: null
  },
  action
) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        user_id: action.id
      };
    default:
      return state;
  }
}
