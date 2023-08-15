import React from 'react'
import Cancel from './restartButtons/Cancel'
import RestartGame from './restartButtons/RestartGame'

function RestartButtons() {

  // on cancel button click
  let cancelWrapper = document.getElementById('cancelWrapper')
  if (!cancelWrapper) {
    // if cancelWrapper is not present then do nothing, the module is hidden
  } else {
    cancelWrapper.addEventListener('click', (e) => {
        // add hidden class to modules
        document.getElementById('modulesContainer').classList.add('hidden')
        document.getElementById('restartModuleWrapper').classList.add('hidden')
    })

  }

  // on restart game button click
  let restartGame = document.getElementById('restartGameWrapper')
  if (!restartGame) {
    console.log('main screen')
  } else {
    restartGame.addEventListener('click', (e) => {
      console.log(e.target)
      // add hidden class to modules
      document.getElementById('modulesContainer').classList.add('hidden')
      document.getElementById('restartModuleWrapper').classList.add('hidden')
      // hide game grid and reveal new game screen
      document.getElementById('newGameWrapper').classList.remove('hidden')
      document.getElementById('gameOnWrapper').classList.add('hidden')
      document.getElementById('mainContainer').classList.add('py-[119px]', 'justify-center')
      document.getElementById('mainContainer').classList.remove('py-6', 'justify-start')

      // add logic here to reset the states of the scores

    })
  }

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