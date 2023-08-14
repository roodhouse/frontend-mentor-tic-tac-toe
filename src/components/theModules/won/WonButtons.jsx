import React from 'react'
import Quit from '../../Quit'
import Next from '../../Next'

function WonButtons() {
  return (
    <>
        <div id="wonButtonsContainer" className='flex justify-center'>
            <div id="wonQuitWrapper" className='mr-4'>
                <Quit />
            </div>
            <div id="wonNextRoundWrapper">
                <Next />
            </div>
        </div>
    </>
  )
}

export default WonButtons