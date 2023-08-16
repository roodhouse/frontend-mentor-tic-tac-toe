import React, {useEffect} from 'react'

function Turn({turn}) {
  
  useEffect(() => {
    let turnMark = document.getElementById('turnMark')
    console.log('the turn changed')
    if (turn === 'X') {
      turnMark.style.backgroundImage = 'url("./assets/choiceX.svg")'
    } else {
      turnMark.style.backgroundImage = 'url("./assets/choiceO-dark.svg")'
    }
  },[turn])

  

  return (
    <>
        <div id="turnContainer" className='flex py-[10px] px-[15px] items-center bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-4px_0px_0px_#10212A] md:px-[30px] md:py-[13px] md:w-[140px] md:justify-center md:h-[52px]'>
            <div id="turnMark" className='w-4 h-4 bg-cover mr-[9px]'/>
            <div id="turnCopy" className='text-silver text-center text-sm font-bold leading-normal tracking-[0.875px]'>
                <p>TURN</p>
            </div>
        </div>
    </>
  )
}

export default Turn