import React from 'react'

function ScoreCard({turn, theCompetition, choice, xScore, oScore, ties}) {

  return (
    <>
        <div id="scoreCardContainer" className='flex justify-between'>
            <div id="xScoreContainer" className='w-[96px] h-16 rounded-[10px] bg-lightBlue px-5 py-3 md:w-[140px] md:h-[72px]'>
                <div id="xWho" className='text-darkNavy text-center text-xs font-medium leading-normal tracking-[0.75px] md:text-sm md:tracking-[0.875px]'>
                    <p>X <span id='theX'>{
                        theCompetition === 'CPU' ? (
                            choice === 'X' ? (
                                '(YOU)'
                            ) : (
                                '(CPU)'
                            )
                        ) : (
                            theCompetition === 'Human' ? (
                                choice === 'X' ? (
                                    '(P1)'
                                ) : (
                                    '(P2)'
                                )
                            ) : (
                                ''
                            )
                        )
                    }</span></p>
                </div>
                <div id="xScore" className='text-darkNavy text-center text-xl font-bold leading-normal tracking-[1.25px] md:text-2xl md:tracking-[1.5px]'>
                    <p>{xScore}</p>
                </div>
            </div>
            <div id="tiesContainer" className='w-[96px] h-16 rounded-[10px] bg-silver px-5 py-3 md:w-[140px] md:h-[72px]'>
                <div id='tiesCopy' className='text-darkNavy text-center text-xs font-medium leading-normal tracking-[0.75px] md:text-sm md:tracking-[0.875px]'>
                    <p>TIES</p>
                </div>
                <div id="tiesCount" className='text-darkNavy text-center text-xl font-bold leading-normal tracking-[1.25px] md:text-2xl md:tracking-[1.5px]'>
                    <p>{ties}</p>
                </div>
            </div>
            <div id="oScoreContainer" className='w-[96px] h-16 rounded-[10px] bg-lightYellow px-5 py-3 md:w-[140px] md:h-[72px]'>
                <div id='oWho' className='text-darkNavy text-center text-xs font-medium leading-normal tracking-[0.75px] md:text-sm md:tracking-[0.875px]'>
                    <p>O <span id='theO'>{
                        theCompetition === 'CPU' ? (
                            choice === 'O' ? (
                                '(YOU)'
                            ) : (
                                '(CPU'
                            )
                        ) : (
                            theCompetition === 'Human' ? (
                                choice === 'O' ? (
                                    '(P1)'
                                ) : (
                                    '(P2)'
                                )
                            ) : (
                                ''
                            )
                        )
                    }</span></p>
                </div>
                <div id="oScore" className='text-darkNavy text-center text-xl font-bold leading-normal tracking-[1.25px] md:text-2xl md:tracking-[1.5px]'>
                    <p>{oScore}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ScoreCard