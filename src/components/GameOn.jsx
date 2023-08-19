import React from 'react'
import GameOnHeader from './gameOn/GameOnHeader'
import GameGrid from './gameOn/GameGrid'
import ScoreCard from './gameOn/ScoreCard'

function GameOn({turn, changeTurn, theCompetition, choice, xScore, oScore, ties, xArray, oArray, playerXarray, playerOarray, restarted, newRound, winner }) {
  return (
    <>
        <div id="gameOnContainer">
            <div id="gameOnHeaderWrapper" className='mb-16 md:mb-5' >
                <GameOnHeader turn={turn} />
            </div>
            <div id="gameGridWrapper">
                <GameGrid turn={turn} changeTurn={changeTurn} xArray={xArray} oArray={oArray} playerXarray={playerXarray} playerOarray={playerOarray} restarted={restarted} newRound={newRound} theCompetition={theCompetition} choice={choice} winner={winner} />
            </div>
            <div id="scoreCardWrapper">
                <ScoreCard turn={turn} theCompetition={theCompetition} choice={choice} xScore={xScore} oScore={oScore} ties={ties} />
            </div>
        </div>
    </>
  )
}

export default GameOn