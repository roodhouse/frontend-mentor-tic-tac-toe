import React from 'react'
import Lost from './theModules/Lost'
import Won from './theModules/Won'
import Restart from './theModules/Restart'

function Modules() {
  return (
      <>
        <div id="modulesContainer" className='w-full flex justify-center items-center'>
            <div id="modulesBackground" className='bg-black h-screen opacity-50 absolute top-0 left-0 w-full'/>
            <div id="lostModuleWrapper" className='hidden w-full h-screen absolute top-0 left-0 flex flex-col justify-center'>
                <Lost />
            </div>
            <div id="wonModuleWrapper" className='hidden w-full h-screen absolute top-0 left-0 flex flex-col justify-center'>
                <Won />
            </div>
            <div id="restartModuleWrapper" className='w-full h-screen absolute top-0 left-0 flex flex-col justify-center'>
                <Restart />
            </div>
        </div>
    </>
  )
}

export default Modules