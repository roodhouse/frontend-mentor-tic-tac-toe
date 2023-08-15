import React from 'react'
import Cancel from './restartButtons/Cancel'
import RestartGame from './restartButtons/RestartGame'

function RestartButtons() {
  return (
    <>
        <div id="restartButtonsContainer" className='flex justify-center'>
            <div id="cancelWrapper" className='mr-4'>
                <Cancel />
            </div>
            <div id="restartGameWrapper">
                <RestartGame />
            </div>
        </div>
    </>
  )
}

export default RestartButtons