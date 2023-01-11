const express = require('express');
const path = require('path');

const gameController = require(path.resolve(__dirname, '../controllers/gameController.js'));
const userController = require(path.resolve(__dirname, '../controllers/userController.js'));

const router = express.Router();

router.get('/:gameid',
  // find game id in db
  // if game exists serve game id to front end with current game state
  // if game id does not exist
  (req, res) => {
  res.status(200).json(res.locals.username);
});


router.post('/:gameid',
  // find game id in db
  // if game exists serve game id to front end with current game state
  // if game id does not exist
  (req, res) => {
  res.status(200).json(res.locals.username);
});


module.exports = router;