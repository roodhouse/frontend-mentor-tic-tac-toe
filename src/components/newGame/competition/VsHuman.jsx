import React, {useEffect} from 'react'

function VsHuman({competitionChoice}) {

  useEffect(() => {
    let vsHuman = document.getElementById('vsHumanContainer')
    console.log(vsHuman)
    vsHuman.addEventListener('click', () => {
      competitionChoice('Human')
      document.getElementById('newGameWrapper').classList.add('hidden')
      document.getElementById('gameOnWrapper').classList.remove('hidden')
      document.getElementById('mainContainer').classList.remove('py-[119px]', 'justify-center')
      document.getElementById('mainContainer').classList.add('py-6', 'justify-start')
    })
  })

  return (
    <>
    <div id="vsHumanContainer" className='rounded-[15px] bg-lightBlue hover:bg-lightBlueHover shadow-[inset_0px_-8px_0px_0px_#118C87] w-[327px] pt-[14px] pb-[22px] md:w-[460px] cursor-pointer'>
        <button className='text-darkNavy text-center text-base font-bold leading-normal tracking-[1px] md:text-xl md:leading-normal md:tracking-[1.25px]'>NEW GAME (VS PLAYER)</button>
    </div>
</>
  )
}

export default VsHuman