import React, { useEffect } from 'react'
import SquareContainer from './gameGrid/SquareContainer'

function GameGrid({turn, changeTurn, roundOver, xArray, oArray, playerXarray, playerOarray}) {

  return (
    <>
        <div id="gameGridContainer" className='flex flex-wrap justify-between'>
            {Array.from({ length: 9 }).map((_, index) => (
                <SquareContainer key={index} turn={turn} changeTurn={changeTurn} index={index} playerXarray={playerXarray} playerOarray={playerOarray} />

            ))}
        </div>
    </>
  )
}

export default GameGrid