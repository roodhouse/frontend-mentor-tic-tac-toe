import React from 'react'

function GameGrid() {
  return (
    <>
        <div id="gameGridContainer" className='flex flex-wrap justify-between'>
            <div id="squareOneContainer" className='w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center'>
                <div id="squareOne" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16 bg-[url("./assets/icon-x.svg")]'/>
            </div>
            <div id="squareTwoContainer" className='w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center'>
                <div id="squareTwo" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareThreeContainer" className='w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center'>
                <div id="squareThree" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareFourContainer" className='w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center'>
                <div id="squareFour" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareFiveContainer" className='w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center'>
                <div id="squareFive" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareSixContainer" className='w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center'>
                <div id="squareSix" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareSevenContainer" className='w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center'>
                <div id="squareSeven" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareEightContainer" className='w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center'>
                <div id="squareEight" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareNineContainer" className='w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center'>
                <div id="squareNine" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
        </div>
    </>
  )
}

export default GameGrid