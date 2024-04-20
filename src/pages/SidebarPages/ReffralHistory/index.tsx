import Avatar from 'react-avatar';
import HistoryCard from '../../../component/HistoryCard';
import { MoneyIcon } from '../../../helper/icons';

const ReffralHistory = () => {

    const OngoingBattle = [
        {
            userName: "coc@go.",
            amount: "Rs. 3400",
            date: '12/03/2024 12:01',
        },
        {
            userName: "FnukSat12.",
            amount: "Rs. 2000",
            date: '08/03/2024 12:01',
        },
    ];

    const CardBody = ({game}: any) => {
        return (
            <div className='inline-flex justify-between items-center w-full' >
                <p className='text-[#080807] text-sm font-extrabold leading-5 flex gap-1' >
                    Amount:
                    <span className='text-green-500' >
                        + {game.amount}
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
            <div className='flex items-center justify-between gap-1'>
                <Avatar size="28" round={true} name={game.userName} />
                <p className='text-[#080807] text-xs font-extrabold leading-5' >
                    {game.userName}
                </p>
            </div>
        )
    }

  return (
    <div className='inline-flex w-full flex-col items-start gap-6 shrink-0' >
    <div className='flex w-full justify-between items-start px-4 py-3' >
        <div className=' text-[#080807] text-md font-extrabold leading-5' >Reffral History</div>
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

export default ReffralHistory;