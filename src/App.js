import React, {useState, useEffect} from 'react'
import './App.css';
import NewGame from './components/NewGame';
import GameOn from './components/GameOn';
import Modules from './components/Modules';

// game logic
  // new game screen logic
  // game screen logic
    // whos turn logic (div at top)
    // score button logic, who is x, and o, competition is cpu or human
    // on hover logic, which outline to show

// game multiplayer designs
  // lost module
  // won module
  // restart module
  // tied module

function App() {

  const [choice, setChoice] = useState('O')
  const [theCompetition, setTheCompetition] = useState('')
  const [turn, setTurn] = useState('X') 

  function playerChoice(selection){
    setChoice(selection)
  }

  function competitionChoice(selection) {
    setTheCompetition(selection)
  }

  function changeTurn(newTurn) {
    setTurn(newTurn)
  }

  // useEffect(() => {
  //   setTurn('X')
  // },[])

  console.log(choice)
  console.log(theCompetition)
  console.log('turn from main ',turn)  

  return (
    <div className="App" id='app'>
      <div id='mainWrapper' className='flex justify-center bg-darkNavy'>
        <div id='mainContainer' className='max-w-[375px] h-screen bg-darkNavy flex flex-col justify-center items-center px-6 py-[119px] md:max-w-[460px] md:py-[200px]'>
          <div id='newGameWrapper'>
            <NewGame playerChoice={playerChoice} competitionChoice={competitionChoice} />
          </div>
          <div id='gameOnWrapper' className='hidden'>
            <GameOn turn={turn} changeTurn={changeTurn} />
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
