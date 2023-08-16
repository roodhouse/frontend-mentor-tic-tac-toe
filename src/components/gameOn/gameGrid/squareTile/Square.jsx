import React, { useState } from 'react'


function Square({turn, changeTurn, index}) {
    const [backgroundImage, setBackgroundImage] = useState('')

    const handleClick = () => {
        if ( backgroundImage === '' ) {
            if ( turn === 'X' ) {
                setBackgroundImage('url("./assets/icon-x.svg")')
                changeTurn('O')
            } else if ( turn === 'O' ) {
                setBackgroundImage('url("./assets/icon-o.svg")')
                changeTurn('X')
            }
        }
    }
  return (
    <>
        <div id={'square'+index} className={`square w-10 h-10 bg-no-repeat bg-contain md:w-16 md:h-16 hover:bg-[url("./assets/icon-${ turn === 'X' ? 'x' : 'o' }-outline.svg")]`} onClick={handleClick} style={{ backgroundImage : backgroundImage}}/>
    </>
  )
}

export default Square