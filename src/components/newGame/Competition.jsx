import React from 'react'
import VsComputer from './competition/VsComputer'
import VsHuman from './competition/VsHuman'

function Competition({competitionChoice}) {
  return (
    <>
        <div id="competitionContainer">
            <div id="vsCPUWrapper" className='mb-4'>
                <VsComputer competitionChoice={competitionChoice} />
            </div>
            <div id="vsHumanWrapper">
                <VsHuman competitionChoice={competitionChoice} />
            </div>
        </div>
    </>
  )
}

export default Competition