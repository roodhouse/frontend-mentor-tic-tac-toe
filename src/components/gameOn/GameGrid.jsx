import React, { useEffect, useState } from 'react'
import SquareContainer from './gameGrid/SquareContainer'

function GameGrid({turn, changeTurn, xArray, oArray, playerXarray, playerOarray, restarted, newRound, theCompetition, choice}) {

    const [theGrid, setTheGrid] = useState('')
    const [backgroundImage, setBackgroundImage] = useState('')

    useEffect(() => {
      if (theCompetition === 'CPU') {
        setTheGrid(Array.from(document.querySelectorAll('.square')))      
    } 
    },[theCompetition])

    useEffect(() => {
      if (theCompetition && turn !== choice) {
        if (theGrid.length > 0) {
          console.log(`${theCompetition} turn`)
          console.log(theGrid)
          let randomSelection = theGrid[Math.floor(Math.random()*theGrid.length)]
          setTimeout(() => {
            console.log(randomSelection)

          }, 1000)
        }   
      }
    })

    // useEffect(() => {
    //   if (turn !== choice) {
    //     console.log(`${theCompetition} turn`)
    //     console.log(theGrid)
    //     setTimeout(() => {
    //       let randomSelection = theGrid[Math.floor(Math.random()*theGrid.length)];
    //       console.log(randomSelection)

    //     }, 1000)

    //   }
    // },[theCompetition])

    

    

  return (
    <>
        <div id="gameGridContainer" className='flex flex-wrap justify-between'>
            {Array.from({ length: 9 }).map((_, index) => (
                <SquareContainer key={index} turn={turn} changeTurn={changeTurn} index={index} playerXarray={playerXarray} playerOarray={playerOarray} restarted={restarted} newRound={newRound} theCompetition={theCompetition} theGrid={theGrid} />
            ))}
        </div>
    </>
  )
}

export default GameGrid