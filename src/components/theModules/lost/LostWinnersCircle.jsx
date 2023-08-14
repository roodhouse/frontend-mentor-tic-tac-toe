import React from 'react'

function LostWinnersCircle() {
  return (
    <>
        <div id="lostWinnersCircleContainer" className='flex items-center justify-center'>
            <div id="winnersSymbol" className='bg-[url("./assets/icon-o.svg")] w-[30px] h-[30px] bg-cover mr-[7px] md:w-16 md:h-16 md:mr-4 '/>
            <div id="lostWinnersCopy" className='text-lightYellow text-2xl leading-normal font-bold tracking-[1.5px] text-[40px] md:leading-normal md:tracking-[2.5px]'>
                <p>TAKES THE ROUND</p>
            </div>
        </div>
    </>
  )
}

export default LostWinnersCircle