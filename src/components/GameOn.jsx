import React from 'react'
import GameOnHeader from './gameOn/GameOnHeader'
import GameGrid from './gameOn/GameGrid'
import ScoreCard from './gameOn/ScoreCard'

function GameOn() {
  return (
    <>
        <div id="gameOnContainer">
            <div id="gameOnHeaderWrapper" className='mb-16'>
                <GameOnHeader />
            </div>
            <div id="gameGridWrapper">
                <GameGrid />
            </div>
            <div id="scoreCardWrapper">
                <ScoreCard />
            </div>
        </div>
    </>
  )
}

export default GameOn