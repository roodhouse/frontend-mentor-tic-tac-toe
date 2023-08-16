import React from 'react'
import Square from './squareTile/Square'

function SquareContainer({turn, changeTurn, index}) {
  return (
    <>
        <div id={'parentSquare'+index} className='parentSquare w-[96px] h-[96px] bg-semiDarkNavy rounded-[10px] shadow-[inset_0px_-8px_0px_0px_#10212A] flex justify-center px-[28px] py-6 mb-5 md:w-[140px] md:h-[140px] md:items-center cursor-pointer'>
            <Square turn={turn} changeTurn={changeTurn} index={index} />
        </div>
    </>
  )
}

export default SquareContainer