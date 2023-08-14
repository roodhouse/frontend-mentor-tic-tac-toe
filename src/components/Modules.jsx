import React from 'react'
import Lost from './theModules/Lost'

function Modules() {
  return (
      <>
        <div id="modulesContainer" className='w-full flex justify-center items-center'>
            <div id="modulesBackground" className='bg-black h-screen opacity-50 absolute top-0 left-0 w-full'/>
            <div id="lostModuleWrapper" className='w-full h-screen absolute top-0 left-0 flex flex-col justify-center'>
                <Lost />
            </div>
        </div>
    </>
  )
}

export default Modules