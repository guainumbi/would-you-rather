let users = {
  "1": {
    id: "1",
    name: "Jess",
    avatarUrl: "https://sitejerk.com/images/transparent-star-gif-2.png/",
    answered_polls: [
      "asdflkj12310asdfo0911aslkn",
      "asdf987asdkasdf98000ad",
      "sdf09a0sd09fa0sdf9afa0sd9f8"
    ],
    asked_polls: ["asdf987asdkasdf98000ad", "sd098sdfh12k3jha09a000ad61823"]
  },
  "2": {
    id: "2",
    name: "Toni",
    avatarUrl:
      "https://newvitruvian.com/images/transparent-toad-icon-mario.png",
    answered_polls: [
      "8xf0y6ziyjabvozdd253nd",
      "asdflkj12310asdfo0911aslkn",
      "asdf987asdkasdf98000ad",
      "sd098sdfh12k3jha09a000ad61823",
      "sdf09a0sd09fa0sdf9afa0sd9f8"
    ],
    asked_polls: ["8xf0y6ziyjabvozdd253nd", "sdf09a0sd09fa0sdf9afa0sd9f8"]
  },
  "3": {
    id: "3",
    name: "Stevie Jane",
    avatarUrl:
      "https://s.pngkit.com/png/small/94-946469_pink-mushroom-mushroom-images-mario-kart-poisons-poison.png",
    answered_polls: [
      "8xf0y6ziyjabvozdd253nd",
      "asdflkj12310asdfo0911aslkn",
      "sd098sdfh12k3jha09a000ad61823"
    ],
    asked_polls: ["asdflkj12310asdfo0911aslkn"]
  }
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    text_1: "Read a book",
    text_1_chosen_by: ["3"],
    text_2: "Watch a TV Show",
    text_2_chosen_by: ["2"],
    answered_by: ["2", "3"],
    asked_by: "2",
    timestamp: 1467166872634
  },
  asdflkj12310asdfo0911aslkn: {
    id: "asdflkj12310asdfo0911aslkn",
    text_1: "Win a million dollars",
    text_1_chosen_by: ["1", "2", "3"],
    text_2: "do a bungee jump",
    text_2_chosen_by: [],
    answered_by: ["1", "2", "3"],
    asked_by: "3",
    timestamp: 1468479767190
  },
  asdf987asdkasdf98000ad: {
    id: "asdf987asdkasdf98000ad",
    text_1: "sing",
    text_1_chosen_by: ["1"],
    text_2: "dance",
    text_2_chosen_by: ["2"],
    answered_by: ["1", "2"],
    asked_by: "1",
    timestamp: 1488579767190
  },
  sd098sdfh12k3jha09a000ad61823: {
    id: "sd098sdfh12k3jha09a000ad61823",
    text_1: "eat ice cream",
    text_1_chosen_by: ["3"],
    text_2: "chips",
    text_2_chosen_by: ["2"],
    answered_by: ["2", "3"],
    asked_by: "1",
    timestamp: 1482579767190
  },
  sdf09a0sd09fa0sdf9afa0sd9f8: {
    id: "sdf09a0sd09fa0sdf9afa0sd9f8",
    text_1: "Go for a run",
    text_1_chosen_by: ["2"],
    text_2: "swim in the lake",
    text_2_chosen_by: ["1"],
    answered_by: ["1", "2"],
    asked_by: "2",
    timestamp: 1489579767190
  }
};

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}
