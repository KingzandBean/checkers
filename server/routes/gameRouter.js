const express = require('express');
const path = require('path');

const gameController = require(path.resolve(__dirname, '../controllers/gameController.js'));
const userController = require(path.resolve(__dirname, '../controllers/userController.js'));

const router = express.Router();

// ENDPONTS

router.get('/',
  // create game
  // if game exists serve game id to front end with current game state
  // if game id does not exist
  gameController.createGame,
  (req, res) => {
    // console.log(JSON.parse(res.locals.game.boardState))
    res.status(200).json(res.locals.game);
});

router.get('/:gameid',
  // find game id in db
  // if game exists serve game id to front end with current game state
  // if game id does not exist
  gameController.readGame,
  (req, res) => {
  res.status(200).json(res.locals.game);
});


router.patch('/:gameid',
  // find game id in db
  // if game exists serve game id to front end with current game state
  // if game id does not exist
  gameController.updateGameState,
  (req, res) => {
    res.sendStatus(200);
});

router.use(
  (req, res) => {
    console.log(req.path)
    res.sendStatus(200);
});


module.exports = router;