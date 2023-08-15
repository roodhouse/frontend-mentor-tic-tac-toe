import React, {useEffect} from 'react'
import ChoiceX from '../../../assets/choiceX.svg'
import ChoiceO from '../../../assets/choiceO.svg'

function MarkChoice({playerChoice}) {

  // toggle choice
  useEffect(() => {
    let choiceX = document.getElementById('choiceXContainer')
    let choiceO = document.getElementById('choiceOContainer')
    
    // X choice eventListener
    if (!choiceX) {
      console.log('hi')
    } else {
      choiceX.addEventListener('click', (e) => {
        // change background of the X container
        choiceX.classList.remove('bg-darkNavy', 'hover:bg-semiDarkNavy')
        choiceX.classList.add('bg-silver')
        // change to the light X mark
        choiceX.firstChild.classList.remove('bg-[url("./assets/choiceX.svg")]')
        choiceX.firstChild.classList.add('bg-[url("./assets/choiceX-light.svg")]')
        // change background of O container
        choiceO.classList.remove('bg-silver')
        choiceO.classList.add('bg-darkNavy', 'hover:bg-semiDarkNavy')
        // change to the dark O mark
        choiceO.firstChild.classList.remove('bg-[url("./assets/choiceO.svg")]')
        choiceO.firstChild.classList.add('bg-[url("./assets/choiceO-dark.svg")]')
        // pass function to change state and call it here...
        playerChoice('X')
      })
    }
    // O choice eventListener
    if (!choiceO) {
      console.log('hi')
    } else {
      choiceO.addEventListener('click', (e) => {
        // change background of the O container
        choiceO.classList.remove('bg-darkNavy', 'hover:bg-semiDarkNavy')
        choiceO.classList.add('bg-silver')
        // change to the dark O mark
        choiceO.firstChild.classList.remove('bg-[url("./assets/choiceO-dark.svg")]')
        choiceO.firstChild.classList.add('bg-[url("./assets/choiceO.svg")]')
        // change background of X container
        choiceX.classList.remove('bg-silver')
        choiceX.classList.add('bg-darkNavy', 'hover:bg-semiDarkNavy')
        // change to the light X mark
        choiceX.firstChild.classList.remove('bg-[url("./assets/choiceX-light.svg")]')
        choiceX.firstChild.classList.add('bg-[url("./assets/choiceX.svg")]')
        // pass function to change state and call it here...
        playerChoice('O')
      })
    }
  },[])
  return (
    <>
        <div id="markChoiceContainer" className='flex justify-center items-center bg-darkNavy p-2 rounded-[10px] md:w-[412px]'>
            <div id="choiceXContainer" className='bg-darkNavy hover:bg-semiDarkNavy rounded-[10px] px-[50px] py-[11px] md:w-[198px] md:flex md:justify-center cursor-pointer'>
                <div id="choiceX" className='w-8 h-8 bg-[url("./assets/choiceX.svg")]' />
            </div>
            <div id="choiceOContainer" className='bg-silver rounded-[10px] px-[50px] py-[11px] md:w-[198px] md:flex md:justify-center cursor-pointer'>
                <div id="choiceO" className='w-8 h-8 bg-[url("./assets/choiceO.svg")]' />
            </div>
        </div>
    </>
  )
}

export default MarkChoice