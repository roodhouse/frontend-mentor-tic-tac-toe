import React from 'react'
import Quit from '../../Quit'
import Next from '../../Next'

function LostButtons() {
  return (
    <>
        <div id="lostButtonsContainer" className='flex justify-center'>
            <div id="lostQuitWrapper" className='mr-4'>
                <Quit />
            </div>
            <div id="lostNextRoundWrapper">
                <Next />
            </div>
        </div>
    </>
  )
}

export default LostButtons