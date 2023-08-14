import React from 'react'
import Lost from './theModules/Lost'

function Modules() {
  return (
    <>
        <div id="modulesContainer" className='h-screen bg-black opacity-50 absolute top-0 left-0 w-full'>
            <div id="lostModuleWrapper">
                <Lost />
            </div>
        </div>
    </>
  )
}

export default Modules