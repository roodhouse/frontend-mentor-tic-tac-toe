import React from 'react'
import Logo from '../Logo'
import Turn from './gameOnHeader/Turn'
import Refresh from './gameOnHeader/Refresh'

function GameOnHeader() {
  return (
    <>
        <div id="gameOnHeaderContainer" className='flex w-[328px] justify-between items-center md:w-[460px]'>
            <div id="gameOnLogoWrapper" className='md:mr-[85px]'>
                <Logo />
            </div>
            <div id="gameOnTurnWrapper" className='md:mr-[108px]'>
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