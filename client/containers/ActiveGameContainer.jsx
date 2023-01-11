import React from 'react';
import Board from '../componants/Board.jsx'
//import BoardContainer from './BoardContainer.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => {
  console.log(state.board);
  return {state}
}

const ActiveGameContainer = (props) => (
  <section id="active-game-container">
    <Board gameInfo={props}/>
  </section>
)

// export default ActiveGameContainer;
export default connect(mapStateToProps, null)(ActiveGameContainer)