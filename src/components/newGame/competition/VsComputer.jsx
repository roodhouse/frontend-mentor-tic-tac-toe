import React, {useEffect} from 'react'

function VsComputer({competitionChoice, beginNewRound}) {

  const handleClick = (e) => {
    competitionChoice('CPU')
    console.log('CPU chooosze')
    beginNewRound()
    document.getElementById('newGameWrapper').classList.add('hidden')
      document.getElementById('gameOnWrapper').classList.remove('hidden')
      document.getElementById('mainContainer').classList.remove('py-[119px]', 'justify-center')
      document.getElementById('mainContainer').classList.add('py-6', 'justify-start')
  }

  return (
    <>
        <div id="vsCPUcontainer" onClick={handleClick} className='rounded-[15px] bg-lightYellow hover:bg-lightYellowHover shadow-[inset_0px_-8px_0px_0px_#CC8B13] w-[327px] pt-[14px] pb-[22px] md:w-[460px] cursor-pointer'>
            <button className='text-darkNavy text-center text-base font-bold leading-normal tracking-[1px] md:text-xl md:leading-normal md:tracking-[1.25px]'>NEW GAME (VS CPU)</button>
        </div>
    </>
  )
}

export default VsComputer