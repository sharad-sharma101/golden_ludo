import React, { useEffect, useState } from 'react'
import CancleModal from './cancleModal';
import { fetchBattleById } from '../../api/battle';

const Result = () => {
    const [waiting, setWaiting] = useState(true);
    const [selectedResult, setSelectedResult] = useState<string>('none');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const battleId = urlParams.get('id') || '';
    const [battleCode, setbattleCode] = useState(urlParams.get('battleCode'))
    
    function handleSelectedResult(state: string){
        setSelectedResult(state);
    }
    async function checkBattleStatus() {
        const resp = await fetchBattleById(battleId);
        if(resp?.battle && !!(resp?.battle?.battleOpenentId))
            setWaiting(false);
    }
    useEffect(() => {
        checkBattleStatus();
    }, [queryString]);

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
                            {battleCode}
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
                            <div onClick={() => handleSelectedResult('won')} className='flex w-32 justify-center items-center gap-2 rounded bg-[rgba(0,138,0,0.83)] px-4 py-3'>
                                <div className='text-white text-sm font-medium leading-5'>
                                    I WON
                                </div>
                            </div>
                            
                            <div onClick={() => handleSelectedResult('cancle')} className='flex w-32 justify-center items-center gap-2 rounded border bg-white px-4 py-3 border-solid border-[#111]'>
                                <div className='text-[#111] text-sm font-medium leading-5'>
                                    Cancle
                                </div>
                            </div>
                            <div onClick={() => handleSelectedResult('loss')} className='flex w-32 justify-center items-center gap-2 rounded border bg-white px-4 py-3 border-solid border-[#E30000]'>
                                <div className='text-[#E30000] text-sm font-medium leading-5'>
                                    I LOST
                                </div>
                            </div>
                        </div>
                        <div className={`${selectedResult === 'none' ? 'hidden' : 'flex' } flex-col items-start gap-2 self-stretch justify-between`}>

                            <div className="flex flex-col p-2">
                                {
                                    selectedResult === 'cancle' ?
                                    <CancleModal />
                                    :
                                    (
                                        selectedResult === 'loss' 
                                        ?
                                        <div className="text-md">Are you sure, you are loss the battle.</div> 
                                        :
                                        <div className="text-md">
                                            Congrats, you are win. Please upload screenshot to confirm you won.
                                        </div>
                                    )
                                }
                            </div>

                            <div className="flex justify-between">
                                <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                                    Confirm
                                </button>
                                <button
                                    onClick={() => handleSelectedResult('none')} 
                                    type="button" 
                                    className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                                    Back
                                </button>
                            </div>
                        </div>
                        </>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Result
