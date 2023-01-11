import React from 'react';


// PROPS NEEDED
  //Square id
  //Square is occupied and by what type of piece
  //functionality to select square if square has a piece on it
  // functionality to move piece to current square if there is a selected piece and the move is valid
import axios from 'axios'

  const Square = (props) => {
  // props.gamestate.length
  let classList = 'square ';
  (key[1] % 2 === key[3] % 2) ? classList += 'black': classList =+ 'white';
  return (
    // TODO: include row ID
    <div id="" className='square' onClick={
      () => {
        fetch('/api/account/john', {
          // 'Access-Control-Allow-Origin': '*',
          // 'mode': 'no-cors'
        })
          .then(res => res.json())
          .then(json => console.log(json))
          .catch(err => console.log(err))
      }
    }>
    </div>
  )
}


export default Square;