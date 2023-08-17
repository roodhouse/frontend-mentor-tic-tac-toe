import React from 'react'
import WonHeader from './won/WonHeader'
import WonWinnersCircle from './won/WonWinnersCircle'
import WonButtons from './won/WonButtons'

function Won({ xAarry, xScore, oScore, ties, reset, setTurn }) {
  return (
    <>
        <div id="wonContainer" className='bg-semiDarkNavy pt-10 pb-12 px-12'>
            <div id="wonHeaderWrapper" className='mb-4 md:mb-6'>
                <WonHeader />
            </div>
            <div id="wonWinnersCircleWrapper" className='mb-6 md:mb-8'>
                <WonWinnersCircle />
            </div>
            <div id="wonButtons">
                <WonButtons xAarry={xAarry} xScore={xScore} oScore={oScore} ties={ties} reset={reset} setTurn={setTurn} />
            </div>
        </div>
    </>
  )
}

export default Won