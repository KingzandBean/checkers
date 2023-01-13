import React from 'react'



const Token = (props) => (
  <div className={'token ' + props.color} onClick={() => console.log("clicked token")}/>
)

export default Token;