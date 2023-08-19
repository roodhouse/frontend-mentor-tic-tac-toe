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
      if (theCompetition === 'CPU' && turn !== choice) {
        if (theGrid.length > 0) {
          const randomIndex = Math.floor(Math.random() * theGrid.length);
          const randomSelection = theGrid[randomIndex];
    
          setTimeout(() => {
            randomSelection.style.backgroundImage = 'url("./assets/icon-x.svg")';
            changeTurn('O');
            
            // Create a new array without the selected square
            const newGridArray = theGrid.filter(item => item !== randomSelection);
            setTheGrid(newGridArray);
          }, 1000);
        }
      }
    }, [theCompetition, turn, choice, theGrid]);

    function updateGrid(newGrid) {
      setTheGrid(newGrid)
    }
    
  return (
    <>
        <div id="gameGridContainer" className='flex flex-wrap justify-between'>
            {Array.from({ length: 9 }).map((_, index) => (
                <SquareContainer key={index} turn={turn} changeTurn={changeTurn} index={index} playerXarray={playerXarray} playerOarray={playerOarray} restarted={restarted} newRound={newRound} theCompetition={theCompetition} theGrid={theGrid} updateGrid={updateGrid} />
            ))}
        </div>
    </>
  )
}

export default GameGrid