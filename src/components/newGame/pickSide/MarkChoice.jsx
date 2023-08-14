import React from 'react'
import ChoiceX from '../../../assets/choiceX.svg'
import ChoiceO from '../../../assets/choiceO.svg'

function MarkChoice() {
  return (
    <>
        <div id="markChoiceContainer" className='flex justify-center items-center bg-darkNavy p-2 rounded-[10px] md:w-[412px]'>
            <div id="choiceXContainer" className='bg-darkNavy rounded-[10px] px-[50px] py-[11px] md:w-[198px] md:flex md:justify-center'>
                <img src={ChoiceX} alt="Pick X" />
            </div>
            <div id="choiceOContainer" className='bg-silver rounded-[10px] px-[50px] py-[11px] md:w-[198px] md:flex md:justify-center'>
                <img src={ChoiceO} alt="Pick O" />
            </div>
        </div>
    </>
  )
}

export default MarkChoice