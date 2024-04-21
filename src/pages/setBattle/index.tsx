import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { checkBattleSessionApi, createBattleApi } from '../../api/battle';
import { useAppSelector } from '../../app/hooks';
import { toast } from 'react-toastify';

const SetBattle = () => {
  const nav = useNavigate();
  const url = location.search;
  const [value, amount ] = url.split('=');
  const [loading, setloading] = useState(false)
  const [battleCode, setbattleCode] = useState('');
  const [battleEnteryFee, setbattleEnteryFee] = useState<number>(Number(amount));
  const { walletBalnceState } = useAppSelector(store => store.features);

  async function handleCreateBattle() {
    try {
      setloading(true);
      if(walletBalnceState?.balance && walletBalnceState.balance >= amount){
        const tot = await checkBattleSessionApi();
        if(tot.length === 0){
          toast.warning("Currently our game is still running", {
            position: "top-center",
            autoClose: 2000,
         });
        } 
        const resp = await createBattleApi({entryFee: amount, battleCode: battleCode });
        setloading(false);
        if(resp.length === 0) return;
        nav(`/result/?id=${resp?.battle?.battle?._id}&battleCode=${resp?.battle?.battle?.battleCode}`);
      }
    } catch (error) {
      setloading(false);
      console.error({error});
      
    }
  }
  useEffect(() => {
    setbattleEnteryFee(Number(amount));
  }, [amount])
  
  
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
                            <input 
                                type="number"
                                max={50000} 
                                id="number-input" 
                                onChange={(event) => setbattleEnteryFee(Number(event.target.value))}
                                value={battleEnteryFee}
                                aria-describedby="helper-text-explanation" 
                                className="bg-gray-50 border-[none]  text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " 
                                placeholder="Ex. 100" 
                                required />
                        </div>
                        <div className='text-neutral-100 text-[10px] font-normal leading-[15px]' >
                            Minimum Rs.50 and Maximum Rs.50,000
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-1 self-stretch' >
                        <div className='flex rounded border border-solid border-[rgba(8,8,7,0.20)] flex-col justify-center items-start gap-1 self-stretch px-4 py-3 bg-gray-50' >
                            <div className='text-[rgba(8,8,7,0.40)] text-[11px] font-normal leading-4' >Enter Ludo King Code</div>
                            <input 
                                type="text" 
                                id="number-input" 
                                onChange={(event) => setbattleCode(event.target.value)}
                                aria-describedby="helper-text-explanation" 
                                className="bg-gray-50 border-[none]  text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " 
                                placeholder="Ex. 14FE435" 
                                required 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button 
            type="button"
            disabled={!(!!battleEnteryFee || !!battleCode)}
            onClick={() => handleCreateBattle()}
            className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              {loading ? '...loading' : 'Submit and Create'}
          </button>
      </div>
    </div>
  )
}

export default SetBattle;
