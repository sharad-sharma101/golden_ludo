import React from 'react'
import HistoryCard from '../../../component/HistoryCard'
import { VSLogo } from '../../../helper/icons'
import Avatar from 'react-avatar'

const GameHistory = () => {

    const OngoingBattle = [
        {
            gameCreator: "sharad.dev",
            gameReciver: "vastu994",
            Fees: 1200,
            prize: 2300,
            result: 'WIN'
        },
        {
            gameCreator: "sharad.dev",
            gameReciver: "coco@jo",
            Fees: 500,
            prize: 950,
            result: 'LOSS'
        },
        {
            gameCreator: "sharad.dev",
            gameReciver: "rahul_t94",
            Fees: 1200,
            prize: 2300,
            result: 'WIN'
        },
        {
            gameCreator: "sharad.dev",
            gameReciver: "vastu994",
            Fees: 1000,
            prize: 1800,
            result: 'WIN'
        },
    ]

    const CardBody = ({game}: any) => {
        return (
            <div className='inline-flex justify-around items-center w-full' >
                <div className='flex flex-col items-center gap-1' >
                    <p className='grey-font-color text-xs leading-5 avtar-cover' >
                        <Avatar size="32" round={true} name={game.gameCreator} />
                    </p>
                    <div className='flex items-center gap-1' >
                        <p className='text-[#1B7DE1] text-[14px] font-normal leading-4' >{game.gameCreator}</p>
                    </div>
                </div>
                <div className='w-10 h-10' >
                    <VSLogo />
                </div>
                <div className='flex flex-col items-center gap-1' >
                    <p className='grey-font-color text-xs leading-5 avtar-cover' >
                        <Avatar size="30" round={true} name={game.gameReciver} />
                    </p>
                    <div className='flex items-center gap-1' >
                        <p className='text-[#1B7DE1] text-[14px] font-normal leading-4' >{game.gameReciver}</p>
                    </div>
                </div>
            </div>
        )
    }

    const CardHeader = ({game}: any) => {
        return (
            <div className='flex items-center justify-between w-full gap-2 p-3 border-b-[0.5px] border-solid border-[rgba(8,8,7,0.20)]'>
                <p className='text-[#080807] text-xs font-extrabold leading-5 flex gap-1' >
                    RESULT:
                    <span className='text-[#08080799]' >
                        {game.result}
                    </span>
                </p>
                <p className='text-[#080807] text-xs font-extrabold leading-5 flex gap-1' >
                    FEES:
                    <span className='text-[#08080799]' >
                        {game.Fees}
                    </span>
                </p>
                <p className='text-[#080807] text-xs font-extrabold leading-5 flex gap-1' >
                    PRIZE:
                    <span className='text-[#08080799]' >
                        {game.prize}
                    </span>
                </p>
            </div>
        )
    }

    return (
        <div className='inline-flex w-full flex-col items-start gap-6 shrink-0' >
            <div className='flex w-full justify-between items-start px-4 py-3' >
                <div className=' text-[#080807] text-md font-extrabold leading-5' >Game History</div>
            </div>
            <div className='flex flex-col items-start gap-3 w-full px-3' >
                {
                    OngoingBattle.map((game) => (
                        <HistoryCard Body={<CardBody game={game} />} Header={<CardHeader game={game} />} />
                    ))
                }
            </div>
        </div>
    )
}

export default GameHistory
