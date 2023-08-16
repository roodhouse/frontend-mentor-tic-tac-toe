import React from 'react'
import GameOnHeader from './gameOn/GameOnHeader'
import GameGrid from './gameOn/GameGrid'
import ScoreCard from './gameOn/ScoreCard'

function GameOn({turn, changeTurn}) {
  return (
    <>
        <div id="gameOnContainer">
            <div id="gameOnHeaderWrapper" className='mb-16 md:mb-5' >
                <GameOnHeader turn={turn} />
            </div>
            <div id="gameGridWrapper">
                <GameGrid turn={turn} changeTurn={changeTurn} />
            </div>
            <div id="scoreCardWrapper">
                <ScoreCard turn={turn} />
            </div>
        </div>
    </>
  )
}

export default GameOn