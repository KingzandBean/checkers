const path = require('path');
const { User } = require(path.resolve(__dirname, '../models/appModels.js'));

const userController = {};

// req.body => username:
// adds a new user to db
userController.createUser = (req, res, next) => {
  console.log("made it to create user", req.body.username)
  // scrub input

  User.create({username: req.body.username}, (err, data) => {
    if (err) {
      console.log('error at userController.createUser: ', err);
    }
    next();
  })

}

// req.params => username:
// finds a user in the db
userController.findUser = (req, res, next) => {
  console.log(req.params)
  User.findOne({username: req.params.username}, (err, data) => {
    if (err) {
      console.log('error at userController.findUser: ', err);
      next(err)
    }
    res.locals.username = data._id;
    next();
  })
}


// req
// res.locals.gameId =>
userController.addGameToUser = (req, res, next) => {
  //console.log(res.locals.gameId);
  req.
  User

}


module.exports = userController;
