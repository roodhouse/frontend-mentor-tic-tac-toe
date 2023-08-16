import React, { useEffect } from 'react'

function GameGrid({turn, changeTurn}) {

    let xArray = []
    let oArray = []

    useEffect(() => {
        let gridItems = Array.from(document.querySelectorAll('.square'))
        gridItems.forEach((item) => {
            if(turn === 'X') {
                item.classList.remove('hover:bg-[url("./assets/icon-o-outline.svg")]')
                item.classList.add('hover:bg-[url("./assets/icon-x-outline.svg")]')
            } else if (turn === 'O') {
                item.classList.add('hover:bg-[url("./assets/icon-o-outline.svg")]')
            }
            item.addEventListener('click', (e) => {
                if (turn === 'X') {
                    console.log('x marks the spot')
                    let currentSquare = e.target
                    currentSquare.style.backgroundImage = 'url("./assets/icon-x.svg")'
                    let squareId = currentSquare.id
                    xArray.push(squareId)
                    changeTurn('O')
                } else {
                    console.log('look out for the hole')
                    let currentSquare = e.target
                    currentSquare.style.backgroundImage = 'url("./assets/icon-o.svg")'
                    let squareId = currentSquare.id
                    oArray.push(squareId)
                    changeTurn('X')
                }
            })
        })
    })

  return (
    <>
        <div id="gameGridContainer" className='flex flex-wrap justify-between'>
            <div id="squareOneContainer" className='parentSquare w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center cursor-pointer'>
                <div id="squareOne" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareTwoContainer" className='parentSquare w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center cursor-pointer'>
                <div id="squareTwo" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareThreeContainer" className='parentSquare w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center cursor-pointer'>
                <div id="squareThree" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareFourContainer" className='parentSquare w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center cursor-pointer'>
                <div id="squareFour" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareFiveContainer" className='parentSquare w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center cursor-pointer'>
                <div id="squareFive" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareSixContainer" className='parentSquare w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center cursor-pointer'>
                <div id="squareSix" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareSevenContainer" className='parentSquare w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center cursor-pointer'>
                <div id="squareSeven" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareEightContainer" className='parentSquare w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center cursor-pointer'>
                <div id="squareEight" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
            <div id="squareNineContainer" className='parentSquare w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center cursor-pointer'>
                <div id="squareNine" className='square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16'/>
            </div>
        </div>
    </>
  )
}

export default GameGrid