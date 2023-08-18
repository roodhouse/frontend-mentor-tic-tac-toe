import React from 'react'
import TieHeader from './tie/TieHeader'
import TieButtons from './tie/TieButtons'


function Tie({ reset, beginNewRound }) {
  return (
    <>
        <div id="tieContainer" className='bg-semiDarkNavy pt-10 pb-12 px-12'>
            <div id="tieHeaderWrapper" className='mb-6 md:mb-6'>
                <TieHeader />
            </div>
            <div id="tieButtons">
                <TieButtons reset={reset} beginNewRound={beginNewRound} />
            </div>
        </div>
    </>
  )
}

export default Tie