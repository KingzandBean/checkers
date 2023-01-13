import React from 'react';
import Board from '../componants/Board.jsx'
//import BoardContainer from './BoardContainer.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  console.log("mapping state to props", state);
  return {
    gameInfo: {
      ...state.board
    }
  }
}

const mapDispatchToProps = dispatch => ({
  loadBoard: () => dispatch(actions.loadBoard()),
  //updateSelected: (squareId) => dispatch(actions.updateSelected(squareId)),
})

const ActiveGameContainer = (props) => {
  console.log(props.gameInfo)
  return (
  <section id="active-game-container">
    <Board gameInfo={props.gameInfo}/>
  </section>
)}

// export default ActiveGameContainer;
// export default connect(mapStateToProps, null)(ActiveGameContainer);
export default connect(mapStateToProps, mapDispatchToProps)(ActiveGameContainer)