import React, { useState } from 'react'

const Result = () => {
    const [waiting, setWaiting] = useState(true);
    function handleWaiting() {
        setTimeout(() => {
            setWaiting(false);
        }, 5000);
    };
    handleWaiting();

  return (
    <div className='flex px-5 flex-col items-start gap-5' >
        <div className='flex flex-col items-start gap-5 w-full' >
            <div className='flex w-full flex-col items-start gap-3' >
                <div className='text-[#080807] text-sm font-medium leading-5' >
                    Room Code
                </div>
                <div className='w-full flex flex-col  gap-2 bg-[rgba(27,125,225,0.05)] p-3 rounded-lg' >
                    <div className='flex justify-center w-full items-center gap-1 rounded border bg-white p-3 border-dashed border-[#1B7DE1]' >
                        <div className='text-[#1B7DE1] text-center text-base font-normal leading-6' >
                            16FEE45A
                        </div>
                    </div>
                    <div className='flex items-start gap-2 self-stretch' >
                    <button 
                        type="button"
                        className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Copy this Code
                    </button>
                    </div>
                </div>
            </div>
            <div className='bg-[rgba(8,8,7,0.20)] w-full h-px' ></div>
        </div>
        <div className='flex w-full flex-col items-start gap-3' >
            <div className='text-[#080807] text-sm font-medium leading-5' >
                {waiting ? 'Waiting For Opponent' : 'Game Result' }
            </div>
            <div className='flex bg-[rgba(27,125,225,0.05)] rounded-lg flex-col items-start gap-4 self-stretch p-3' >
                {
                    waiting ?
                    (
                        <>
                            <div className="relative w-full flex justify-center items-center">
                                <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                                <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"  className="rounded-full h-28 w-28" />
                            </div>
                            <div className='text-[rgba(8,8,7,0.60)] text-xs font-normal leading-[18px]' >
                            Please wait patiently on this screen while we search for another player to join this match. Match will start when somebody join this battle.
                            </div>
                        </>
                    ) : (
                        <>
                        <div className='text-[rgba(8,8,7,0.60)] text-xs font-normal leading-[18px]'>
                                  After Completing your game select the results from below and update your status with a screenshot
                        </div>
                        <div className='flex items-start gap-2 self-stretch justify-between'>
                            <div className='flex w-32 justify-center items-center gap-2 rounded border bg-white px-4 py-3 border-solid border-[#E30000]'>
                                <div className='text-[#E30000] text-sm font-medium leading-5'>
                                    I LOST
                                </div>
                            </div>
                            <div className='flex w-32 justify-center items-center gap-2 rounded bg-[rgba(0,138,0,0.83)] px-4 py-3'>
                                <div className='text-white text-sm font-medium leading-5'>
                                    I WON
                                </div>
                            </div>
                        </div></>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Result
