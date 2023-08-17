import React from 'react'
import Quit from '../../Quit'
import Next from '../../Next'

function TieButtons({ reset }) {
  return (
    <>
        <div id="tieButtonsContainer" className='flex justify-center'>
            <div id="tieQuitWrapper" className='mr-4'>
                <Quit reset={reset} />
            </div>
            <div id="tieNextRoundWrapper">
                <Next />
            </div>
        </div>
    </>
  )
}

export default TieButtons