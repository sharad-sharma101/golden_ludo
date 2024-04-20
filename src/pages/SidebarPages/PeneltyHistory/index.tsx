import React from 'react';
import HistoryCard from '../../../component/HistoryCard';

const PeneltyHistory = () => {

    // const OngoingBattle = [
    //     {
    //         penelty: "Your terminate completely.",
    //         reason: "You try to create fake win, using edited screenshot",
    //         date: '12/03/2024 12:01',
    //     },
    //     {
    //         penelty: "Your terminate completely.",
    //         reason: "You try to create fake win, using edited screenshot",
    //         date: '12/03/2024 12:01',
    //     },
    // ]

    const CardBody = ({game}: any) => {
        return (
            <div className='inline-flex px-2 flex-col gap-2 justify-start items-start w-full' >
                <div className='text-grey-900 text-sm font-normal leading-5 tracking-[0.25px]' >
                    <span className='font-extrabold'>Due To:</span><br />
                    {game.reason}
                </div>
                <div className='text-grey-500 w-full text-end text-xs font-normal leading-5 tracking-[0.25px]' >{game.date}</div>
            </div>
        )
    }

    const CardHeader = ({game}: any) => {
        return (
            <div className='inline-flex px-2 justify-start items-start w-full' >
                <div className='text-red-500 text-center text-sm font-normal leading-4' >
                    <span className='font-extrabold'>Penelty:{'  '}</span> 
                    {game.penelty}
                </div>
            </div>
        )
    }

    return (
        <div className='inline-flex w-full flex-col items-start gap-6 shrink-0' >
            <div className='flex w-full justify-between items-start px-4 py-3' >
                <div className=' text-[#080807] text-md font-extrabold leading-5' >Penelty History</div>
            </div>
            <div className='flex flex-col items-start gap-3 w-full px-3' >
                {/* {
                    OngoingBattle.map((game) => (
                        <HistoryCard Body={<CardBody game={game} />} Header={<CardHeader game={game} />} />
                    ))
                } */}
                <div className="flex justify-center items-center">
                    <img className="w-64 h-64"
                    src="https://res.cloudinary.com/daqsjyrgg/image/upload/v1690257804/jjqw2hfv0t6karxdeq1s.svg"
                    alt="image empty states"/>
                </div>
            </div>
        </div>
    )
}

export default PeneltyHistory;
