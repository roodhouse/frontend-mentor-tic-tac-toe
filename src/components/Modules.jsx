import React from 'react'
import Lost from './theModules/Lost'
import Won from './theModules/Won'
import Restart from './theModules/Restart'
import Tie from './theModules/Tie'

function Modules({ xArray, xScore, oScore, ties, reset, setTurn }) {
  return (
      <>
        <div id="modulesContainer" className='hidden w-full flex justify-center items-center'>
            <div id="modulesBackground" className='bg-black h-screen opacity-50 absolute top-0 left-0 w-full'/>
            <div id="lostModuleWrapper" className='hidden w-full h-screen absolute top-0 left-0 flex flex-col justify-center'>
                <Lost reset={reset} />
            </div>
            <div id="wonModuleWrapper" className='hidden w-full h-screen absolute top-0 left-0 flex flex-col justify-center'>
                <Won xArray={xArray} xScore={xScore} oScore={oScore} ties={ties} reset={reset} />
            </div>
            <div id="restartModuleWrapper" className='hidden w-full h-screen absolute top-0 left-0 flex flex-col justify-center'>
                <Restart />
            </div>
            <div id="tieModuleWrapper" className='hidden w-full h-screen absolute top-0 left-0 flex flex-col justify-center'>
                <Tie reset={reset} />
            </div>
        </div>
    </>
  )
}

export default Modules