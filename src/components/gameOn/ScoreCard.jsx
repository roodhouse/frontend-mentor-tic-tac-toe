import React from 'react'

function ScoreCard() {
  return (
    <>
        <div id="scoreCardContainer" className='flex justify-between'>
            <div id="xScoreContainer" className='w-[96px] h-16 rounded-[10px] bg-lightBlue px-5 py-3'>
                <div id="xWho" className='text-darkNavy text-center text-xs font-medium leading-normal tracking-[0.75px]'>
                    <p>X <span id='theX'>(YOU)</span></p>
                </div>
                <div id="xScore" className='text-darkNavy text-center text-xl font-bold leading-normal tracking-[1.25px]'>
                    <p>14</p>
                </div>
            </div>
            <div id="tiesContainer" className='w-[96px] h-16 rounded-[10px] bg-silver px-5 py-3'>
                <div id='tiesCopy' className='text-darkNavy text-center text-xs font-medium leading-normal tracking-[0.75px]'>
                    <p>TIES</p>
                </div>
                <div id="tiesCount" className='text-darkNavy text-center text-xl font-bold leading-normal tracking-[1.25px]'>
                    <p>32</p>
                </div>
            </div>
            <div id="oScoreContainer" className='w-[96px] h-16 rounded-[10px] bg-lightYellow px-5 py-3'>
                <div id='oWho' className='text-darkNavy text-center text-xs font-medium leading-normal tracking-[0.75px]'>
                    <p>O <span id='theO'>(CPU)</span></p>
                </div>
                <div id="oScore" className='text-darkNavy text-center text-xl font-bold leading-normal tracking-[1.25px]'>
                    <p>11</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ScoreCard