import { useEffect, useState } from 'react';
import { fetchTransitionApi } from '../../../api/transition';
import HistoryCard from '../../../component/HistoryCard';
import { MoneyIcon } from '../../../helper/icons';
import { useAppSelector } from '../../../app/hooks';

const TransactionHistory = () => {
    const [OngoingBattle, setOngoingBattle] = useState<any[]>([]);

    // const OngoingBattle = [
    //     {
    //         transanction: "DEBITED.",
    //         amount: "Rs. 3400",
    //         date: '12/03/2024 12:01',
    //     },
    //     {
    //         transanction: "CREDITATE.",
    //         amount: "Rs. 2000",
    //         date: '08/03/2024 12:01',
    //     },
    // ];
    const {userObjectState} = useAppSelector(store => store.features);

    async function getAllTransition() {
        if(Object.keys(userObjectState).length === 0) return;
        const resp = await fetchTransitionApi(`user=${userObjectState._id}`);
        if(resp?.data?.results && resp.data.results.length){
            const newHist: any[] = resp.data.results.map((hist: any) => {
                return {
                    transanction: hist?.type,
                    amount: hist?.amount,
                    date: hist?.createdAt,
                }
            })
            setOngoingBattle([...newHist]);
        }
    }
    useEffect(() => {
        getAllTransition();
    }, [userObjectState])
    

    const CardBody = ({game}: any) => {
        return (
            <div className='inline-flex justify-between items-center w-full' >
                <p className='text-[#080807] text-sm font-extrabold leading-5 flex gap-1' >
                    Amount:
                    <span className='text-green-500' >
                        {game.amount}
                    </span>
                </p>
                <p className='text-grey-900 text-xs font-extrabold leading-5 flex gap-1' >
                    {game.date}
                </p>
            </div>
        )
    }

    const CardHeader = ({game}: any) => {
        return (
            <div className='flex items-center justify-between gap-2'>
                <MoneyIcon />
                <p className='text-[#080807] text-xs font-extrabold leading-5' >
                    Money {game.transanction}
                </p>
            </div>
        )
    }

  return (
    <div className='inline-flex w-full flex-col items-start gap-6 shrink-0' >
    <div className='flex w-full justify-between items-start px-4 py-3' >
        <div className=' text-[#080807] text-md font-extrabold leading-5' >Transactional History</div>
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

export default TransactionHistory
