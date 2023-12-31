import React from 'react'

function Next({ beginNewRound }) {

  const handleClick = (e) => {
      console.log('boom')
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
    beginNewRound()
  }

  return (
    <>
        <div id="nextContainer" onClick={handleClick} className='w-[146px] rounded-[15px] bg-lightYellow shadow-[inset_0px_-4px_0px_0px_#CC8B13] p-4 cursor-pointer hover:bg-lightYellowHover'>
            <button className='text-darkNavy text-center text-base leading-normal font-bold tracking-[1px]'>NEXT ROUND</button>
        </div>
    </>
  )
}

export default Next