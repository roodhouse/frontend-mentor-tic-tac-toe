import React from 'react'
import RestartHeader from './restart/RestartHeader'
import RestartButtons from './restart/RestartButtons'


function Restart() {
  return (
    <>
        <div id="restartContainer" className='bg-semiDarkNavy pt-10 pb-12 px-12'>
            <div id="restartHeaderWrapper" className='mb-6 md:mb-6'>
                <RestartHeader />
            </div>
            <div id="restartButtons">
                <RestartButtons />
            </div>
        </div>
    </>
  )
}

export default Restart