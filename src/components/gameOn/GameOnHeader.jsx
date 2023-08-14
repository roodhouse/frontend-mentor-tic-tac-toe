import React from 'react'
import Logo from '../Logo'
import Turn from './gameOnHeader/Turn'
import Refresh from './gameOnHeader/Refresh'

function GameOnHeader() {
  return (
    <>
        <div id="gameOnHeaderContainer" className='flex w-[328px] justify-between items-center'>
            <div id="gameOnLogoWrapper">
                <Logo />
            </div>
            <div id="gameOnTurnWrapper">
                <Turn />
            </div>
            <div id="refreshWrapper">
                <Refresh />
            </div>
        </div>
    </>
  )
}

export default GameOnHeader