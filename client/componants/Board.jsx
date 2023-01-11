import React from 'react';
import Row from './Row.jsx';

const Board = (props) => {
  // props.gamestate.length
  //rows
  return (
    <div id="board">
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  )
}


export default Board;