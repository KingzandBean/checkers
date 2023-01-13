import React from 'react';
import Square from './Square.jsx';


const Row = ({gameInfo, rowIndex, row, moves}) => {
  //console.log(gameInfo, rowIndex, row, updateSelected, moves)
  const squareRender = [];
  row.forEach((square, i) => {
    squareRender.push(
    <Square
      key={i}
      gameInfo={gameInfo}
      rowIndex={rowIndex}
      colIndex={i}
      id={square}
      moves={moves}
      />
    )
  })
  return (
    <div id="row" className='row'>
      {squareRender}
    </div>
  )
}


export default Row;