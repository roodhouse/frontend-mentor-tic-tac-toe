import React, {useState, useEffect} from 'react'
import './App.css';
import NewGame from './components/NewGame';
import GameOn from './components/GameOn';
import Modules from './components/Modules';

// bug 1: on click of refresh and confirm if the turn is O then the new game starts as O turn

// game logic
  // game screen logic
    // game grid logic
      // make function to increment
        // update function logic to only increment after a win or tie is determine
          // create a way to win array
            // then if either the x or o array include the ways to win then its a win
  // module logic

// game multiplayer designs
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

  let isWinner = Object.values(ways2win).some(combination =>
  combination.split(',').every(item => xArrayItems.includes(item))
);

if (isWinner) {
  console.log('winner');
}

  
  // increment o score
  useEffect(() => {
    function roundOver() {
      if (oArray.length > 0) {
        setOScore(oScore + 1)
      }
    }
    roundOver()
  },[oArray.length])

  // increment tie count
  useEffect(() => {
    function roundOver() {
      if (xArray.length === 5 && oArray.length === 4) {
        setTies(ties + 1)
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

  console.log(`Player x: ${xArray}`)

  console.log(typeof xArray)
  console.log(xArrayString)

  console.log(`Player o: ${oArray}`)

  return (
    <div className="App" id='app'>
      <div id='mainWrapper' className='flex justify-center bg-darkNavy'>
        <div id='mainContainer' className='max-w-[375px] h-screen bg-darkNavy flex flex-col justify-center items-center px-6 py-[119px] md:max-w-[460px] md:py-[200px]'>
          <div id='newGameWrapper'>
            <NewGame playerChoice={playerChoice} competitionChoice={competitionChoice} />
          </div>
          <div id='gameOnWrapper' className='hidden'>
            <GameOn turn={turn} changeTurn={changeTurn} theCompetition={theCompetition} choice={choice} xScore={xScore} oScore={oScore} ties={ties} xArray={xArray} oArray={oArray} playerXarray={playerXarray} playerOarray={playerOarray} />
          </div>
          <div id='modulesWrapper' className=''>
            <Modules />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
