import React, { useState, useEffect } from 'react'
import './App.css';
import NewGame from './components/NewGame';
import GameOn from './components/GameOn';
import Modules from './components/Modules';

// bug 1: on click of refresh and confirm if the turn is O then the new game starts as O turn

  // module logic
    // next round logic
      // win
      // loss
      // tie
    // restart logic..

// game multiplayer designs & logic
  // lost module
  // won module
  // restart module
  // tied module

function App() {

  const [choice, setChoice] = useState('O')
  const [theCompetition, setTheCompetition] = useState('')
  const [turn, setTurn] = useState('X')
  const [xArray, setXArray] = useState([])
  const [oArray, setOArray] = useState([])
  const [xScore, setXScore] = useState(0)
  const [oScore, setOScore] = useState(0)
  const [ties, setTies] = useState(0)
  const [restarted, setRestarted] = useState(false)
  const [newRound, setNewRound] = useState(false)

  function reset(x, o, t) {
    setXScore(x)
    setOScore(o)
    setTies(t)
    setTurn('X')
    setRestarted(true)

    // reset the restarted state back to false
    setTimeout(() => {
      setRestarted(false)
    }, 0)
  }

  function beginNewRound() {
    setTurn('X')
    setNewRound(true)

    // reset the new round state back to false
    setTimeout(() => {
      setNewRound(false)
    }, 0)
  }

  function playerChoice(selection){
    setChoice(selection)
  }

  function competitionChoice(selection) {
    setTheCompetition(selection)
  }

  function changeTurn(newPlayer) {
    setTurn(newPlayer)
  }

  let ways2win = 
    {
      row1: 'square0,square1,square2',
      row2: 'square3,square4,square5',
      row3: 'square6,square7,square8',
      col1: 'square0,square3,square6',
      col2: 'square1,square4,square7',
      col3: 'square2,square5,square8',
      dia1: 'square0,square4,square8',
      dia2: 'square2,square4,square6'
    }

  // logic for x win
  let xArrayString = xArray.toString()
  // Convert xArrayString to an array of individual items
  let xArrayItems = xArrayString.split(',');
  // Check if any of the winning combinations are present in xArrayItems
  // Object.values(ways2win): 
    // This retrieves an array containing the values (combinations of squares) from the ways2win object. 
    // Each value is a string representing a winning combination of square IDs.
  // .some(combination => ... ): 
    // The .some() method is used on the array of combinations. 
    //  It checks if at least one combination (string of square IDs) satisfies the condition defined inside the arrow function.
  // combination.split(','): 
    // This splits the current combination string into an array of individual square IDs. 
    // The split(',') function is used to separate the IDs using a comma as the delimiter.
  // .every(item => xArrayItems.includes(item)): 
    // The .every() method is used on the array of split square IDs. 
    // It checks if all elements of the array satisfy the condition defined inside the arrow function.
  // xArrayItems.includes(item): 
    // This checks if the current square ID (item) exists in the xArrayItems array, 
    // which contains the individual square IDs from the xArray.
  let xWinner = Object.values(ways2win).some(combination =>
  combination.split(',').every(item => xArrayItems.includes(item))
  );

if (xWinner) {
  console.log('winner');
  console.log(xArray)
  // set score
  setXScore(xScore + 1)
  // dump array
  setXArray([])
  setOArray([])
  // bring up winner module
  let moduleContainer = document.getElementById('modulesContainer')
  let wonModule = document.getElementById('wonModuleWrapper')
  // display the won module
  moduleContainer.classList.remove('hidden')
  wonModule.classList.remove('hidden')
}

  // logic for o win
  let oArrayString = oArray.toString()
  let oArrayItems = oArrayString.split(',');
  let oWinner = Object.values(ways2win).some(combination =>
    combination.split(',').every(item => oArrayItems.includes(item))
    );

    if (oWinner) {
      console.log('o winner');
      console.log(oArray)
      // set score
      setOScore(oScore + 1)
      // dump array
      setXArray([])
      setOArray([])
      // bring up winner module
      let moduleContainer = document.getElementById('modulesContainer')
      let lostModule = document.getElementById('lostModuleWrapper')
      // display the won module
      moduleContainer.classList.remove('hidden')
      lostModule.classList.remove('hidden')
    }

  // increment tie count
  useEffect(() => {
    function roundOver() {
      if (xArray.length === 5 && oArray.length === 4) {
        setTies(ties + 1)
        setXArray([])
        setOArray([])
        // bring up tie module
        let moduleContainer = document.getElementById('modulesContainer')
        let tieModule = document.getElementById('tieModuleWrapper')
        // display the won module
        moduleContainer.classList.remove('hidden')
        tieModule.classList.remove('hidden')
      }
    }
    roundOver()
  },[xArray.length, oArray.length])

  function playerXarray(click) {
    setXArray([...xArray, click])
  }

  function playerOarray(click) {
    setOArray([...oArray, click])
  }

  return (
    <div className="App" id='app'>
      <div id='mainWrapper' className='flex justify-center bg-darkNavy'>
        <div id='mainContainer' className='max-w-[375px] h-screen bg-darkNavy flex flex-col justify-center items-center px-6 py-[119px] md:max-w-[460px] md:py-[200px]'>
          <div id='newGameWrapper'>
            <NewGame playerChoice={playerChoice} competitionChoice={competitionChoice} />
          </div>
          <div id='gameOnWrapper' className='hidden'>
            <GameOn turn={turn} changeTurn={changeTurn} theCompetition={theCompetition} choice={choice} xScore={xScore} oScore={oScore} ties={ties} xArray={xArray} oArray={oArray} playerXarray={playerXarray} playerOarray={playerOarray} restarted={restarted} />
          </div>
          <div id='modulesWrapper' className=''>
            <Modules xArray={xArray} xScore={xScore} oScore={oScore} ties={ties} reset={reset} setTurn={setTurn} beginNewRound={beginNewRound} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
