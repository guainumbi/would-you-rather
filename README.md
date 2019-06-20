To get started run:

- `npm install`
- `npm start` (Runs the app in the development mode.<br>
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What You're Getting

```bash
├── README.md - This file.
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html # DO NOT MODIFY
│   └── manifest.json
└── src
    ├── actions
        ├── authedUser.js
        ├── questions.js
        ├── shared.js
        └── users.js
    ├──components
       ├── App.js
       ├── Home.js #Dashboard Component shows all unanswered and answered polls
       ├── Leaderboard.js #Leaderboard Component displays user ranking due to number of activities
       ├── Login.js #Login Component lets user choose from existing user accounts or create new one
       ├── NavMenu.js #Navigation bar including logout button for current user
       ├── NewQuestion.js #NewQuestion Component including form input fields to create a new poll
       ├── Poll.js #Poll Component that holds the general frame for question cards
       ├── PollQuestion.js #PollQuestion Component displays input options for unanswered Questions
       ├── PollResult.js #PollResult Component displays poll options with progressbar incl. percentage and number of answers
       └── PollSummary.js #PollSummary Component displays the poll options and links to individual poll.
    ├──middleware
       ├── index.js
       └── logger.js #logs each dispatched action and the new state to the console
    ├── reducers
        ├── authedUser.js
        ├── index.js
        ├── questions.js
        └── users.js
    ├── utils
        ├── _DATA.js #Holds the initial data for the store
        └──  api.js #Supplies the function calls for initial data collection from the data file
    ├── App.css
    ├── App.test.js
    ├── index.css # Global styles.
    └── index.js
```
