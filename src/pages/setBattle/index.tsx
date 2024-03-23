import React from 'react'
import { useNavigate } from 'react-router-dom';

const SetBattle = () => {
  const nav = useNavigate();
  return (
    <div className=' flex items-center h-[calc(100vh_-_200px)] bg-hero justify-center ' >
      <div className='inline-flex flex-col gap-4' >
        <div className='flex w-[296px] flex-col items-center gap-3' >
            <div className='text-black text-base font-medium leading-6' >Create Battle</div>
            <div className='flex justify-center items-center self-stretch bg-[#134C86] p-4 rounded-lg' >
                <div className='flex w-full flex-col items-start gap-4' >
                    <div className='flex flex-col items-start gap-1 self-stretch' >
                        <div className='flex rounded border border-solid border-[rgba(8,8,7,0.20)] bg-gray-50 flex-col justify-center items-start gap-1 self-stretch px-4 py-3' >
                            <div className='text-[rgba(8,8,7,0.40)] text-[11px] font-normal leading-4' >Enter Amount</div>
                            <input type="number" max={50000} id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border-[none]  text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder="Ex. 100" required />
                        </div>
                        <div className='text-neutral-100 text-[10px] font-normal leading-[15px]' >
                            Minimum Rs.50 and Maximum Rs.50,000
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-1 self-stretch' >
                        <div className='flex rounded border border-solid border-[rgba(8,8,7,0.20)] flex-col justify-center items-start gap-1 self-stretch px-4 py-3 bg-gray-50' >
                            <div className='text-[rgba(8,8,7,0.40)] text-[11px] font-normal leading-4' >Enter Ludo King Code</div>
                            <input type="text" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border-[none]  text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder="Ex. 14FE435" required />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button 
            type="button"
            onClick={() => nav('/result')}
            className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Submit and Create
          </button>
      </div>
    </div>
  )
}

export default SetBattle;
