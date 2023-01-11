import React from 'react';
import Square from './Square.jsx';


const Row = (props) => {
  // props.gamestate.length
  //for each row
  return (
    <div id="row" className='row'>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
      <Square/>
    </div>
  )
}


export default Row;