const path = require('path');
const express = require('express');
// require / hookup db

//const userController = require(path.resolve(__dirname, './controllers/userController'));

const PORT = process.env.PORT || 3000;

const app = express();
const accountRouter = require(path.resolve(__dirname, './routes/accountRouter.js'))

app.use(express.json());

// ROUTES

// no authorization
// before a user has been added to the db
  // user inputs name sends to server -> server creates new user in db

// client sends req to our enpoint and they have a cookie with their username
  // after a user has been added to the db
  // they can create a new game // server creates a new game for them
  // they can select any game that they are a part of and this will send the game id to the server server responds with all nessecary game information
    // boardState:
    // red: user1id
    // black: user2id
    // player1Move: default true;
// once the user is signed in



app.use('/account', accountRouter);


app.use('/game', gameRouter);

app.use((req, res) => {
  res.status(404).send("file not found");
});


app.use((err, req, res, next) => {
  res.sendStatus(500);
})


module.exports = app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});