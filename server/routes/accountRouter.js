const express = require('express');
const path = require('path');

const gameController = require(path.resolve(__dirname, '../controllers/gameController.js'));
const userController = require(path.resolve(__dirname, '../controllers/userController.js'));

const router = express.Router();

router.post('/signup',
  userController.createUser,
  //userController.findUser,
  (req, res) => {
  res.status(200) //.json(res.locals.data);
});

router.get('/:username',
  (req, res, next) => {console.log(req.params); next();},
  userController.findUser,
  (req, res) => {
  res.status(200).json(res.locals.username);
});


module.exports = router;