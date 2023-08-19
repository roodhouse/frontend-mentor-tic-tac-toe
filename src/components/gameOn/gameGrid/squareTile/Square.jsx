import React, { useState, useEffect } from 'react'

function Square({turn, changeTurn, index, playerXarray, playerOarray, restarted, newRound, theCompetition, theGrid, updateGrid }) {
    const [backgroundImage, setBackgroundImage] = useState('')

    useEffect(() => {
        if (restarted || newRound) {
            if(backgroundImage === '') {
                return
            }
            
            setBackgroundImage('')
            
            
        }
    },[restarted, newRound])
    
    const handleClick = (e) => {
        if (theCompetition === 'CPU') {
           
            if (e.target.style.backgroundImage === 'url("./assets/icon-x.svg")' || e.target.style.backgroundImage === 'url("./assets/icon-o.svg")' )  {
                return
            } else {
                
                if ( turn === 'X' ) {
                    setBackgroundImage(`url(./assets/icon-x.svg)`)
                    playerXarray(e.target.id)
                    changeTurn('O')
                } else if ( turn === 'O' ) {
                    setBackgroundImage(`url(./assets/icon-o.svg)`)
                    playerOarray(e.target.id)
                    changeTurn('X')
                }

                const newGridArray = theGrid.filter(item => item !== e.target)
                updateGrid(newGridArray)
                
            }
        } else {
            if ( backgroundImage === '' ) {
                
                if ( turn === 'X' ) {
                    setBackgroundImage(`url(./assets/icon-x.svg)`)
                    playerXarray(e.target.id)
                    changeTurn('O')
                } else if ( turn === 'O' ) {
                    setBackgroundImage(`url(./assets/icon-o.svg)`)
                    playerOarray(e.target.id)
                    changeTurn('X')
                }

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