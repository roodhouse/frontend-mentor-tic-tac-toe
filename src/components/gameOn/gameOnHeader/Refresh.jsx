import React from 'react'
import Restart from '../../../assets/icon-restart.svg'

function Refresh() {
  return (
    <>
        <div id="refreshContainer" className='bg-silver w-10 h-10 flex justify-center items-center rounded-[10px] shadow-[inset_0px_-4px_0px_0px_#6B8997] md:w-[52px] md:h-[52px] hover:bg-silverHover cursor-pointer'>
            <img src={Restart} alt="Restart game" className='w-5 h-5' />
        </div>
    </>
  )
}

export default Refresh