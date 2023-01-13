const path = require('path');
const { Game } = require(path.resolve(__dirname, '../models/appModels.js'));

const gameController = {};


gameController.createGame = (req, res, next) => {
  Game.create({}, (err, newGame) => {
    if (err) return next(err);
    else {
      //console.log(newGame)
      res.locals.game = {};
      res.locals.game.boardState = newGame.boardState;
      res.locals.game.id = newGame._id
      return next()
    }
  })

}

gameController.updateGameState = (req, res, next) => {
  const { gameid } = req.params
  const boardState = req.body.boardState
  console.log(req.params, req.body)
  console.log("checking everything", gameid, boardState);
  Game.findOneAndUpdate({_id: gameid}, {boardState: boardState}, {new: true}, (err, doc) => {
    if (err) return next(err);
    else {
      console.log("Updated game ", doc)
      next();
    }
  })
}

gameController.readGame = (req, res, next) => {
  Game.findOne({_id: req.params.gameid}, (err, queryResponse) => {
    if (err || Object.keys(queryResponse).length === 0) return next(err);
    else {
      res.locals.game = {};
      res.locals.game.boardState = queryResponse.boardState
      res.locals.game.id = queryResponse._id
      next();
    }
    console.log(queryResponse);
  })
}

module.exports = gameController;