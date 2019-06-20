import { generateID } from "./shared";
import { addAskedQuestion } from "./users";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWERED_BY_USER = "ADD_ANSWERED_BY_USER";
export const ADD_USERS_CHOICE = "ADD_USERS_CHOICE";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

function addUsersChoice(id, user_id, choice) {
  return {
    type: ADD_USERS_CHOICE,
    id,
    user_id,
    choice
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function addAnsweredByUser(id, user_id) {
  return {
    type: ADD_ANSWERED_BY_USER,
    id,
    user_id
  };
}

export function handleAddQuestion(text_1, text_2) {
  return (dispatch, getState) => {
    const question = {
      id: generateID(),
      text_1,
      text_2,
      text_1_chosen_by: [],
      text_2_chosen_by: [],
      asked_by: getState().authedUser.user_id,
      answered_by: [],
      timestamp: Date.now()
    };
    dispatch(addQuestion(question));
    dispatch(addAskedQuestion(question.id, question.asked_by));
  };
}

export function handleAddUsersChoice(id, user_id, answer) {
  return (dispatch, getState) => {
    const choice =
      getState().questions[id].text_1 === answer
        ? "text_1_chosen_by"
        : "text_2_chosen_by";
    dispatch(addUsersChoice(id, user_id, choice));
  };
}
