import React from 'react'
import Logo from './Logo'
import PickSide from './newGame/PickSide'
import Competition from './newGame/Competition'

function NewGame({playerChoice, competitionChoice, beginNewRound}) {
  return (
    <>
        <div id="newGameContainer" className='flex flex-col justify-center items-center'>
            <div id="newGameLogoWrapper" className='mb-8 md:mb-10'>
                <Logo />
            </div>
            <div id='pickSideWrapper' className='mb-8 md:mb-10'>
                <PickSide playerChoice={playerChoice} />
            </div>
            <div id='competitionWrapper'>
                <Competition competitionChoice={competitionChoice} beginNewRound={beginNewRound} />
            </div>
        </div>
    </>
  )
}

export default NewGame