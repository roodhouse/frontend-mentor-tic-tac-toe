import React from 'react'

function WonWinnersCircle() {
  return (
    <>
        <div id="WonWinnersCircleContainer" className='flex items-center justify-center'>
            <div id="wonWinnersSymbol" className='bg-[url("./assets/icon-x.svg")] w-[30px] h-[30px] bg-cover mr-[7px] md:w-16 md:h-16 md:mr-4 '/>
            <div id="wonWinnersCopy" className='text-lightBlue text-2xl leading-normal font-bold tracking-[1.5px] md:text-[40px] md:leading-normal md:tracking-[2.5px]'>
                <p>TAKES THE ROUND</p>
            </div>
        </div>
    </>
  )
}

export default WonWinnersCircle