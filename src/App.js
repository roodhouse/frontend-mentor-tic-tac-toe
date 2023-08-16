import React, {useState, useEffect} from 'react'
import './App.css';
import NewGame from './components/NewGame';
import GameOn from './components/GameOn';
import Modules from './components/Modules';

// bug: game loops through after a selection is made several times

// game logic
  // reset board on refresh confirm
  // new game screen logic
  // game screen logic
    // game grid logic
    // score button logic, who is x, and o, competition is cpu or human
      // make function to increment
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

  return (
    <div className="App" id='app'>
      <div id='mainWrapper' className='flex justify-center bg-darkNavy'>
        <div id='mainContainer' className='max-w-[375px] h-screen bg-darkNavy flex flex-col justify-center items-center px-6 py-[119px] md:max-w-[460px] md:py-[200px]'>
          <div id='newGameWrapper'>
            <NewGame playerChoice={playerChoice} competitionChoice={competitionChoice} />
          </div>
          <div id='gameOnWrapper' className='hidden'>
            <GameOn turn={turn} changeTurn={changeTurn} theCompetition={theCompetition} choice={choice} xScore={xScore} oScore={oScore} ties={ties} />
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
