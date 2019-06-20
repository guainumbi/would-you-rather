import { getInitialData } from "../utils/api";
import { addAnsweredByUser, handleAddUsersChoice } from "./questions";
import { addAnsweredQuestion } from "./users";
import { receiveUsers } from "../actions/users";
import { receiveQuestions } from "../actions/questions";

export function generateID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export function handleAnswerSubmit(answer, question_id) {
  return (dispatch, getState) => {
    const user_id = getState().authedUser.user_id;
    dispatch(addAnsweredByUser(question_id, user_id));
    dispatch(addAnsweredQuestion(question_id, user_id));
    dispatch(handleAddUsersChoice(question_id, user_id, answer));
  };
}

export function handleInitialData(authedUser) {
  return (dispatch, getState) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
