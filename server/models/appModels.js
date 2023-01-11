const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://beamed:Hottuna29@cluster0.xb49kio.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'soloproject2pgame'
})
.then(() => {console.log('Connected to Mongo DB')})
.catch(err => console.log(err));

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  boardState: { type: String, default: "---------"},
  player1id: { type: Schema.Types.ObjectId, ref: 'user' },
  player2id: { type: Schema.Types.ObjectId, ref: 'user' },
  player1Turn: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
})

const Game = mongoose.model('game', gameSchema);


const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  games: [ {type: Schema.Types.ObjectId, ref: 'game'} ]
})

const User = mongoose.model('user', userSchema);

module.exports = {
  User,
  Game
}