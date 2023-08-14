import React, {useEffect} from 'react'

function VsComputer({competitionChoice}) {

  useEffect(() => {
    let vsCPU = document.getElementById('vsCPUcontainer')
    console.log(vsCPU)
    vsCPU.addEventListener('click', () => {
      competitionChoice('CPU')
      document.getElementById('newGameWrapper').classList.add('hidden')
      document.getElementById('gameOnWrapper').classList.remove('hidden')
    })
  })

  return (
    <>
        <div id="vsCPUcontainer" className='rounded-[15px] bg-lightYellow hover:bg-lightYellowHover shadow-[inset_0px_-8px_0px_0px_#CC8B13] w-[327px] pt-[14px] pb-[22px] md:w-[460px] cursor-pointer'>
            <button className='text-darkNavy text-center text-base font-bold leading-normal tracking-[1px] md:text-xl md:leading-normal md:tracking-[1.25px]'>NEW GAME (VS CPU)</button>
        </div>
    </>
  )
}

export default VsComputer