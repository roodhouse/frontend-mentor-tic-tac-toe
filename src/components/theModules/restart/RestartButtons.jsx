import React from 'react'
import Cancel from './restartButtons/Cancel'
import RestartGame from './restartButtons/RestartGame'

function RestartButtons({beginNewRound}) {

  // on cancel button click
  const handleCancel = (e) => {
    document.getElementById('modulesContainer').classList.add('hidden')
    document.getElementById('restartModuleWrapper').classList.add('hidden')
  }


  // on restart game button click
  const handleRestart = (e) => {
    document.getElementById('modulesContainer').classList.add('hidden')
    document.getElementById('restartModuleWrapper').classList.add('hidden')
    beginNewRound()
  }

  return (
    <>
        <div id="restartButtonsContainer" className='flex justify-center'>
            <div id="cancelWrapper" onClick={handleCancel} className='mr-4'>
                <Cancel />
            </div>
            <div id="restartGameWrapper" onClick={handleRestart}>
                <RestartGame />
            </div>
        </div>
    </>
  )
}

export default RestartButtons