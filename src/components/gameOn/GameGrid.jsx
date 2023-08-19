import React, { useEffect, useState } from 'react'
import SquareContainer from './gameGrid/SquareContainer'

function GameGrid({turn, changeTurn, xArray, oArray, playerXarray, playerOarray, restarted, newRound, theCompetition, choice, winner}) {

  const [backgroundImage, setBackgroundImage] = useState('')
  const [theGrid, setTheGrid] = useState('')

    useEffect(() => {
      if (theCompetition === 'CPU' || winner ) {
        setTheGrid(Array.from(document.querySelectorAll('.square')))
    } 
    },[theCompetition, winner])

    useEffect(() => {
      if (newRound) {
        setTheGrid(Array.from(document.querySelectorAll('.square')));
      }
    }, [newRound]);

    useEffect(() => {
      if (theCompetition === 'CPU' && turn !== choice && !winner && !newRound) {
        console.log(newRound)
        if (theGrid.length > 0) {
          const randomIndex = Math.floor(Math.random() * theGrid.length);
          const randomSelection = theGrid[randomIndex];
          setTimeout(() => {
            randomSelection.style.backgroundImage = 'url("./assets/icon-x.svg")';
            console.log('the random selection: ', randomSelection)
            playerXarray(randomSelection.id)
            changeTurn('O');
            
            // Create a new array without the selected square
            const newGridArray = theGrid.filter(item => item !== randomSelection);
            setTheGrid(newGridArray);
          }, 1000);
        }
      } else if (newRound) {
        console.log('new round')
      }
    }, [theCompetition, turn, choice, theGrid, winner]);
    // [theCompetition, turn, choice, theGrid, winner]

    function updateGrid(newGrid) {
      setTheGrid(newGrid)
    }

    useEffect(() => {
      if (theCompetition === 'CPU' && newRound) {
        let newGrid = Array.from(document.querySelectorAll('.square')) 
        newGrid.forEach((item) => {
          item.style.backgroundImage = ''
        })
        setTheGrid(newGrid)
      }
    },[newRound, theCompetition])
    
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