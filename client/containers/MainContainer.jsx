import React from 'react';
import SignIn from '../componants/SignIn.jsx'
import AccountContainer from './AccountContainer.jsx'

const MainContainer = (props) => {
  const display = [];
  //if (!props.isLoggedIn) display.push(<SignIn />)
  //else {
    display.push(<AccountContainer key={1}/>)
  //}
  return (
    <div id="main-container">
      {display}
    </div>
  )
}

export default MainContainer;