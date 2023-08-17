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

  // Increment scores
  // increment x score
  useEffect(() => {
    function roundOver() {
      if (xArray.length > 0) {
        setXScore(xScore + 1)
      } 
    }
  
    roundOver()

  },[xArray.length])

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
      if (xArray.length === 1 && oArray.length === 1) {
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
