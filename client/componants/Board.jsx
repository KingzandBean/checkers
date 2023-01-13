import React from 'react';
import Row from './Row.jsx';


function calcMoves(boardMatrix, boardState, selectedSquareId) {
  if (!selectedSquareId) return [];
  let row = Number(selectedSquareId[1]);
  let col = Number(selectedSquareId[3]);
  // find selected
  const validMoves = [];
  // check selected to find color
  const selected = boardMatrix[row][col];
  if (boardState[selected] === 'red') {
    // if red then check r-1 c-1 and r+1 c+1 if occupied if not add to arr
    const q = [];
    if (col !== 0) q.unshift(boardMatrix[row-1][col-1]);
    if (col !== 7) q.unshift(boardMatrix[row-1][col+1]);
    while (q.length !== 0) {
      let squareIdString = q.pop();
      if (!boardState[squareIdString]) validMoves.push(squareIdString);
    }
  }

  //  else if (boardState[selected] === 'white') {
  //   const q = [];
  //   if (col !== 0) q.unshift(boardMatrix[row-1][col-1]);
  //   if (col !== 7) q.unshift(boardMatrix[row-1][col+1]);
  return validMoves
}

const Board = ({gameInfo}) => {

  const allRows = [[],[],[],[],[],[],[],[]];
  const rowRender = [];
  const squares = Object.keys(gameInfo.boardState);
  const validMoves = [];

  squares.forEach((key) => {
    let row = key[1];
    allRows[row].push(key);
  })

  if (gameInfo.hasSelection) {
    let moves = calcMoves(allRows, gameInfo.boardState, gameInfo.selectedSquareId);
    moves.forEach((el) => validMoves.push(el))
  }

  allRows.forEach((row, i) => {
    rowRender.push(
      <Row
        key={i}
        gameInfo={gameInfo}
        row={row}
        rowIndex={i}
        moves={validMoves}
      />
    )
  })

  return (
    <div id="board">
      {rowRender}
    </div>
  )
}


export default Board;