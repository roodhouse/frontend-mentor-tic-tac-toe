import React from 'react'
import Quit from '../../Quit'
import Next from '../../Next'

function TieButtons() {
  return (
    <>
        <div id="tieButtonsContainer" className='flex justify-center'>
            <div id="tieQuitWrapper" className='mr-4'>
                <Quit />
            </div>
            <div id="tieNextRoundWrapper">
                <Next />
            </div>
        </div>
    </>
  )
}

export default TieButtons