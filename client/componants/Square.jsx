import React from 'react';
import Token from './Token.jsx'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

// PROPS NEEDED
  //Square id
  //Square is occupied and by what type of piece
  //functionality to select square if square has a piece on it
  // functionality to move piece to current square if there is a selected piece and the move is valid

const mapDispatchToProps = dispatch => ({
  updateSelected: (squareId) => dispatch(actions.updateSelected(squareId)),
  makeMove: (squareId) => dispatch(actions.updateBoard(squareId))
})

const Square = ({colIndex, rowIndex, gameInfo, id, updateSelected, moves, makeMove}) => {
  // props.gamestate.length
  const classList = [];
  classList.push('square');
  (rowIndex % 2 === colIndex % 2) ? classList.push('black'): classList.push('tan');
  if (gameInfo.hasSelection === true && gameInfo.selectedSquareId && gameInfo.selectedSquareId === id) classList.push("selected");
  if (moves.includes(id)) classList.push("move")
  //console.log("classList", classList)
  return (
    // TODO: include row ID
    <div
      id={id}
      className={classList.join(' ')}
      onClick= {() => {
        if (gameInfo.boardState[id] === 'white' || gameInfo.boardState[id] === 'red') {
          updateSelected(id);
        } else if (classList.includes('move')) {
          makeMove(id);
        }
      }}>
      {gameInfo.boardState[id] === 'white' && <Token gameInfo={gameInfo} color={"white"}/>}
      {gameInfo.boardState[id] === 'red' && <Token gameInfo={gameInfo} color={"red"}/>}
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Square);
//export default Square;