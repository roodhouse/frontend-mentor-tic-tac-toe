import React, { useState, useEffect } from 'react'


function Square({turn, changeTurn, index, playerXarray, playerOarray, restarted }) {
    const [backgroundImage, setBackgroundImage] = useState('')

    useEffect(() => {
        if (restarted) {
            setBackgroundImage('')
        }
    },[restarted])
    
    const handleClick = (e) => {
        if ( backgroundImage === '' ) {
            console.log(e.target.id)
            if ( turn === 'X' ) {
                setBackgroundImage('url("./assets/icon-x.svg")')
                playerXarray(e.target.id)
                changeTurn('O')
            } else if ( turn === 'O' ) {
                setBackgroundImage('url("./assets/icon-o.svg")')
                playerOarray(e.target.id)
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