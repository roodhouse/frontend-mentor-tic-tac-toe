import React from 'react'
import Quit from '../../Quit'
import Next from '../../Next'

function WonButtons({ xArray, xScore, oScore, ties, reset, setTurn }) {

  return (
    <>
        <div id="wonButtonsContainer" className='flex justify-center'>
            <div id="wonQuitWrapper" className='mr-4'>
                <Quit xArray={xArray} xScore={xScore} oScore={oScore} ties={ties} reset={reset} setTurn={setTurn} />
            </div>
            <div id="wonNextRoundWrapper">
                <Next />
            </div>
        </div>
    </>
  )
}

export default WonButtons