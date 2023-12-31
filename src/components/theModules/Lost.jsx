import React from 'react'
import LostHeader from './lost/LostHeader'
import LostWinnersCircle from './lost/LostWinnersCircle'
import LostButtons from './lost/LostButtons'

function Lost({ reset, beginNewRound, xScore, oScore }) {
  return (
    <>
        <div id="lostContainer" className='bg-semiDarkNavy pt-10 pb-12 px-12'>
            <div id="lostHeaderWrapper" className='mb-4 md:mb-6'>
                <LostHeader />
            </div>
            <div id="lostWinnersCircleWrapper" className='mb-6 md:mb-8'>
                <LostWinnersCircle xScore={xScore} oScore={oScore} />
            </div>
            <div id="lostButtons">
                <LostButtons reset={reset} beginNewRound={beginNewRound} />
            </div>
        </div>
    </>
  )
}

export default Lost