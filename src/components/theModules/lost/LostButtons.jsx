import React from 'react'
import Quit from '../../Quit'
import Next from '../../Next'

function LostButtons({ reset, beginNewRound }) {
  return (
    <>
        <div id="lostButtonsContainer" className='flex justify-center'>
            <div id="lostQuitWrapper" className='mr-4'>
                <Quit reset={reset}  />
            </div>
            <div id="lostNextRoundWrapper">
                <Next beginNewRound={beginNewRound} />
            </div>
        </div>
    </>
  )
}

export default LostButtons