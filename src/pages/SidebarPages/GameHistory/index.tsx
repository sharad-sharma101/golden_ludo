import React, { useEffect, useState } from 'react'
import HistoryCard from '../../../component/HistoryCard'
import { VSLogo } from '../../../helper/icons'
import Avatar from 'react-avatar'
import { fetchBattlesApi, updateBattleApi } from '../../../api/battle'
import { useAppSelector } from '../../../app/hooks'

const GameHistory = () => {
    const [OngoingBattle, setOngoingBattle] = useState<any[]>([])
    const {userObjectState} = useAppSelector(store => store.features);
    
    async function fetchBattleHistory() {
        if(Object.keys(userObjectState).length === 0) return;
        const createdByUser = await fetchBattlesApi(`battleCreatorId=${userObjectState._id}&forHistory=${true}&moneyDistributed=${true}`);
        const userAsOpponent = await fetchBattlesApi(`battleOpenentId=${userObjectState._id}&forHistory=${true}&moneyDistributed=${true}`);
        if(createdByUser?.results || userAsOpponent?.results){
            const newHist: any[] = createdByUser.results.map((hist: any) => {
                return {
                    gameCreator: hist?.battleCreatorId?.name,
                    gameReciver: hist?.battleOpenentId?.name,
                    Fees: hist?.entryFee,
                    prize: hist?.prizeAmount,
                    result: hist?.moneyDistributed ? 'Declear' : 'Undeclear'
                }
            })
            const newHists: any[] = userAsOpponent.results.map((hist: any) => {
                return {
                    gameCreator: hist?.battleCreatorId?.name,
                    gameReciver: hist?.battleOpenentId?.name,
                    Fees: hist?.entryFee,
                    prize: hist?.prizeAmount,
                    result: hist?.moneyDistributed ? 'Declear' : 'Undeclear'
                }
            })
            setOngoingBattle([...newHists, ...newHist]);
        }
    }
        
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

    
    useEffect(() => {
        fetchBattleHistory();
    }, [userObjectState])
    

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
