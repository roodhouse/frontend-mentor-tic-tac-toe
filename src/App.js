import React, {useState} from 'react'
import './App.css';
import NewGame from './components/NewGame';
import GameOn from './components/GameOn';
import Modules from './components/Modules';

// game solo designs
  // restart module
  // tied module
// game multiplayer designs
  // lost module
  // won module
  // restart module
  // tied module

function App() {

  const [choice, setChoice] = useState('O')
  const [theCompetition, setTheCompetition] = useState('')

  function playerChoice(selection){
    setChoice(selection)
  }

  function competitionChoice(selection) {
    setTheCompetition(selection)
  }

  console.log(theCompetition)

  return (
    <div className="App" id='app'>
      <div id='mainWrapper' className='flex justify-center bg-darkNavy'>
        <div id='mainContainer' className='max-w-[375px] h-screen bg-darkNavy flex flex-col justify-center items-center px-6 py-[119px] md:max-w-[460px] md:py-[200px]'>
          <div id='newGameWrapper'>
            <NewGame playerChoice={playerChoice} competitionChoice={competitionChoice} />
          </div>
          <div id='gameOnWrapper' className='hidden'>
            <GameOn />
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
