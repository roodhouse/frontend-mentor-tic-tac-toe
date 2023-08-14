import React from 'react'
import VsComputer from './competition/VsComputer'
import VsHuman from './competition/VsHuman'

function Competition() {
  return (
    <>
        <div id="competitionContainer">
            <div id="vsCPUWrapper" className='mb-4'>
                <VsComputer />
            </div>
            <div id="vsHumanWrapper">
                <VsHuman />
            </div>
        </div>
    </>
  )
}

export default Competition