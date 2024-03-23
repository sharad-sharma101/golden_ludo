import React from 'react'
import { useNavigate } from 'react-router-dom';

const GameCards = ({title, priceRange, logo}: any) => {
    const [lowerLimit, upperLimit] = priceRange;
    const nav = useNavigate();

  return (
    <div onClick={() => nav("/battle")} className='flex cursor-pointer flex-col items-center gap-5 bg-[#1B7DE1] shadow-[2px_2px_8px_0px_rgba(27,125,225,0.20)] p-3 rounded-lg' >
        <div className='flex flex-col items-center gap-0.5' >
            <div className='text-[#F5F5F5] text-base not-italic font-extrabold leading-6 tracking-[0.15px]'>{title}</div>
            <div className='flex flex-col justify-center items-start gap-2.5 bg-[rgba(245,245,245,0.30)] p-0.5 rounded-md' >
                <div className='flex justify-center items-center gap-2.5 rounded bg-neutral-100 text-[color:var(--Blue-Main,#1B7DE1)] text-center text-[10px] font-medium leading-[14px] px-1.5 py-0.5' >
                    {lowerLimit} - {upperLimit} money
                </div>
            </div>
        </div>
        <div className=' w-[134px] h-[68px]'>
            <img src={logo} alt="" style={{width: "100%", height: "100%"}} />
        </div>
    </div>
  )
}

export default GameCards