import React from 'react'
import Logo from '../Logo'
import Turn from './gameOnHeader/Turn'
import Refresh from './gameOnHeader/Refresh'

function GameOnHeader({turn}) {

    // ***** need to refactor this  ***** and fix bugs mentioned in app.js
    
    // On click of the refresh button
    let refreshWrapper = document.getElementById('refreshWrapper')
    // if refreshWrapper is not there then we are on the main screen
    if (!refreshWrapper) {
        // console.log('main screen')
    } else {
        refreshWrapper.addEventListener('click', (e) => {
            // remove the hidden class from the modules
            document.getElementById('modulesContainer').classList.remove('hidden')
            document.getElementById('restartModuleWrapper').classList.remove('hidden')
            // remove the backgrounds of the griditems
            let gridItems = Array.from(document.querySelectorAll('.square'))
            gridItems.forEach((item) => {
                item.style.backgroundImage = ''
        })
    })
    }
    
  return (
    <>
        <div id="gameOnHeaderContainer" className='flex w-[328px] justify-between items-center md:w-[460px]'>
            <div id="gameOnLogoWrapper" className='md:mr-[85px]'>
                <Logo />
            </div>
            <div id="gameOnTurnWrapper" className='md:mr-[108px]' >
                <Turn turn={turn} />
            </div>
            <div id="refreshWrapper">
                <Refresh />
            </div>
        </div>
    </>
  )
}

export default GameOnHeader