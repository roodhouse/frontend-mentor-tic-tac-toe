import React, {useState, useEffect} from 'react'

function WonWinnersCircle({xScore, oScore}) {

  const [backgroundImage, setBackgroundImage] = useState('')
  const [textColor, setTextColor] = useState('')

  useEffect(() => {
    if (xScore > 0) {
      console.log('x won')
      setBackgroundImage('url("./assets/icon-x.svg")')
      setTextColor('#31C3BD')
      
    }
  },[xScore])

  useEffect(() => {
    if (oScore > 0) {
      console.log('o won')
      setBackgroundImage('url("./assets/icon-o.svg")')
      setTextColor('#F2B137')
    }
  },[oScore])
  return (
    <>
        <div id="WonWinnersCircleContainer" className='flex items-center justify-center'>
            <div id="wonWinnersSymbol" className='w-[30px] h-[30px] bg-cover mr-[7px] md:w-16 md:h-16 md:mr-4' style={{ backgroundImage : backgroundImage}}/>
            <div id="wonWinnersCopy" className='text-2xl leading-normal font-bold tracking-[1.5px] md:text-[40px] md:leading-normal md:tracking-[2.5px]' style={{ color: textColor }}>
                <p>TAKES THE ROUND</p>
            </div>
        </div>
    </>
  )
}

export default WonWinnersCircle