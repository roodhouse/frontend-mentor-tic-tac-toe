import React from 'react'

function Quit({ xAarry, xScore, oScore, ties, reset, setTurn }) {

    const handleClick = (e) => {
    // reset the score to 0
    reset(0,0,0)
    // hide the gamegrid
    document.getElementById('gameOnWrapper').classList.add('hidden')
    // hide the module parent
    document.getElementById('modulesContainer').classList.add('hidden')
    // hide modules
    let wonMod = document.getElementById('wonModuleWrapper')
    let lostMod = document.getElementById('lostModuleWrapper')
    let restartMod = document.getElementById('restartModuleWrapper')
    let tieMod = document.getElementById('tieModuleWrapper')
    let modArray = [wonMod, lostMod, restartMod, tieMod]
    modArray.forEach((mod) => {
      if (mod.style.display !== 'none') {
        mod.classList.add('hidden')
      }
    })
    // display the newgame screen
    document.getElementById('newGameWrapper').classList.remove('hidden')
  }

  return (
    <>
        <div id="quitContainer" onClick={handleClick} className='w-[76px] rounded-[15px] bg-silver shadow-[inset_0px_-4px_0px_0px_#6B8997] p-4 cursor-pointer hover:bg-silverHover'>
            <button className='text-darkNavy text-center text-base leading-normal font-bold tracking-[1px]'>QUIT</button>
        </div>
    </>
  )
}

export default Quit