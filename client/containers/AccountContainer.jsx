import React from 'react';
import ActiveGameContainer from './ActiveGameContainer.jsx'
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'

const mapDispatchToProps = dispatch => ({
  loadBoard: (gameId) => dispatch(actions.loadBoard(gameId)),
  //updateSelected: (squareId) => dispatch(actions.updateSelected(squareId)),
})

function handleSubmit(e, loadBoard) {
  e.preventDefault();
  let gameId = document.getElementById("game-id-input-feild").value;
  console.log("game id from html", gameId);
  loadBoard(gameId);
}

const AccountContainer = ({loadBoard}) => (
  <div id="account-container" >
    <h1>Welcome!</h1>
    <button type="button" onClick={() => {loadBoard('')}}>New Game</button>
    <form onSubmit={(e, func) => handleSubmit(e, loadBoard)}>
      <input id='game-id-input-feild' type="text"/>
      <input type="submit" onClick={(e) => {console.log("clicked ", e.target)}}/>
    </form>
    <ActiveGameContainer/>
  </div>
)

//onSubmit={handleSubmit}
export default connect(null, mapDispatchToProps)(AccountContainer);
//export default AccountContainer;