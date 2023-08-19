import React, { useEffect, useState } from 'react'
import SquareContainer from './gameGrid/SquareContainer'

function GameGrid({turn, changeTurn, xArray, oArray, playerXarray, playerOarray, restarted, newRound, theCompetition}) {
    const [theGrid, setTheGrid] = useState('')

    // console.log(theCompetition, theGrid)
    useEffect(() => {
      if (theCompetition === 'CPU') {
        setTheGrid(Array.from(document.querySelectorAll('.square')))
    }
    },[theCompetition])

    console.log(theGrid)

    

  return (
    <>
        <div id="gameGridContainer" className='flex flex-wrap justify-between'>
            {Array.from({ length: 9 }).map((_, index) => (
                <SquareContainer key={index} turn={turn} changeTurn={changeTurn} index={index} playerXarray={playerXarray} playerOarray={playerOarray} restarted={restarted} newRound={newRound} theCompetition={theCompetition} />
            ))}
        </div>
    </>
  )
}

export default GameGrid