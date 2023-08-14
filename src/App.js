import './App.css';
import NewGame from './components/NewGame';

// New game screen all formats first
// game solo designs
  // lost module
  // won module
  // restart module
  // tied module
// game multiplayer designs
  // lost module
  // won module
  // restart module
  // tied module

function App() {
  return (
    <div className="App" id='app'>
      <div id='mainWrapper'>
        <div id='mainContainer' className='h-screen bg-darkNavy flex flex-col justify-center items-center px-6 py-[119px]'>
          <div id='newGameWrapper'>
            <NewGame />
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default App;
