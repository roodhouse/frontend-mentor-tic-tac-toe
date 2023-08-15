import React from 'react'
import GameOnHeader from './gameOn/GameOnHeader'
import GameGrid from './gameOn/GameGrid'
import ScoreCard from './gameOn/ScoreCard'

function GameOn({turn, changeTurn}) {

    console.log('game on screen turn is ', turn)
  return (
    <>
        <div id="gameOnContainer">
            <div id="gameOnHeaderWrapper" className='mb-16 md:mb-5' >
                <GameOnHeader turn={turn} />
            </div>
            <div id="gameGridWrapper">
                <GameGrid changeTurn={changeTurn} turn={turn} />
            </div>
            <div id="scoreCardWrapper">
                <ScoreCard />
            </div>
        </div>
    </>
  )
}

export default GameOn