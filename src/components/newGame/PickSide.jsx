import React from 'react'
import SideTitle from './pickSide/SideTitle'
import MarkChoice from './pickSide/MarkChoice'
import Hint from './pickSide/Hint'

function PickSide({playerChoice}) {
  return (
    <>
        <div id="pickSideContainer" className='bg-semiDarkNavy p-6 rounded-[15px] shadow-[inset_0px_-8px_0px_0px_#10212A]'>
            <div id="sideTitleWrapper" className='mb-6'>
                <SideTitle />
            </div>
            <div id="markChoiceWrapper" className='mb-[17px]'>
                <MarkChoice playerChoice={playerChoice} />
            </div>
            <div id="hintWrapper">
                <Hint />
            </div>
        </div>
    </>
  )
}

export default PickSide