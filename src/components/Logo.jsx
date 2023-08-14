import React from 'react'
import TheLogo from '../assets/logo.svg'

function Logo() {
  return (
    <>
        <div id="logoContainer">
            <img src={TheLogo} alt="tic-tac-toe" />
        </div>
    </>
  )
}

export default Logo