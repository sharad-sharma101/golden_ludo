import React, { useEffect, useState } from 'react'
import { IconLogo, Prize, VSLogo } from '../../helper/icons'
import moneyBundle from "../../assets/money-bundle.png";
import goldBundle from "../../assets/gold-bundle.png";
import "./index.scss";
import Avatar from 'react-avatar';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { fetchBattlesApi, updateBattleApi } from '../../api/battle';

const Battle = () => {
    const [liveMatchs, setLiveMatchs] = useState<any[]>([]);
    const [openMatchs, setOpenMatchs] = useState<any[]>([]);
    const [amountSet, setAmountSet] = useState<Number>(0)
    const dispatch = useAppDispatch();
    const nav = useNavigate();
    const { walletBalnceState, userObjectState } = useAppSelector(store => store.features);

    async function createNewGame() {
        
    if(walletBalnceState?.balance && walletBalnceState.balance >= amountSet){
        if(amountSet == 0 ) return;
        nav(`/battle/set?amount=${amountSet}`);
    }   
    }

    async function fetchBattleFunction() {
        const promises = [
            fetchBattlesApi('status=pending'),
            fetchBattlesApi('status=live')
          ];
          // Use Promise.all to wait for all promises to resolve
          const [openBattles, pendingBattles] = await Promise.all(promises);
          if(openBattles?.results && openBattles.results.length) setOpenMatchs(openBattles.results);
          if(pendingBattles?.results && pendingBattles.results.length) setLiveMatchs(pendingBattles.results);
          
    }
    async function joinBattleAsOpponent(battle:any) {
        console.log({battle});
        
        const resp = await updateBattleApi(battle._id, {status: 'live'})
        console.log({resp});
        
    }
    useEffect(() => {
      fetchBattleFunction();
    }, [])
  
  return (
    <div className='inline-flex w-full flex-col items-start gap-6 shrink-0' >
        <div className='flex w-full justify-between items-start px-4 py-3' >
            <div className=' flex flex-col items-center gap-2 flex-[1_0_0]' >
                <div className=' text-[#080807] text-sm font-extrabold leading-5' >Create New Battle</div>
                <div className='flex w-full items-center shrink-0 rounded border p-2 border-solid border-[rgba(8,8,7,0.20)] bg-gray-50' >
                  <input 
                    type="number" 
                    id="number-input" 
                    onChange={(event) => setAmountSet(Number(event.target.value))}
                    aria-describedby="helper-text-explanation" 
                    className="bg-gray-50 border-[none]  text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " 
                    placeholder="Enter Amount" 
                    required 
                   />
                  <button 
                        type="button"
                        onClick={createNewGame}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        set
                    </button> 
                </div>
            </div>
        </div>
        <div className='flex flex-col items-start gap-3 w-full px-3' >
            <div className=' flex justify-between items-center self-stretch' >
                <div className='flex gap-1 items-center' >
                    <Prize/>
                    <p className='text-[#080807] text-sm font-extrabold leading-5' >Open Battle</p>
                </div>
                <div className='flex gap-1' >
                    <IconLogo/>
                    <p className='text-[#1B7DE1] text-[10px] font-medium leading-4' >Rules</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-3 w-full' >
                {
                    openMatchs.map((battle, index) => (
                        <div key={`${battle.battleCode}-${index}`} className='w-full rounded bg-white shadow-[0px_0px_8px_0px_rgba(0,0,0,0.06)] border-[0.5px] border-solid border-[rgba(8,8,7,0.20)]' >
                            <div className='flex items-start gap-2 p-3 border-b-[0.5px] border-solid border-[rgba(8,8,7,0.20)]'>
                                <p className='text-[#080807] text-xs font-extrabold leading-5' >
                                    CHALLEAGE FROM <span className='text-[#1B7DE1]' >{battle?.battleCreatorId?.name}</span>
                                </p>
                            </div>
                            <div className='flex items-center justify-between gap-2 p-3' >
                                <div className='inline-flex items-start gap-6' >
                                    <div className='flex flex-col items-start gap-1' >
                                        <p className='grey-font-color text-xs leading-5' >ENTERY FEE</p>
                                        <div className='flex items-center gap-1' >
                                            <img src={moneyBundle} />
                                            <p className='text-[#080807] font-extrabold text-xs leading-5' >{battle?.entryFee}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-start gap-1' >
                                        <p className='grey-font-color text-xs leading-5' >PRIZE</p>
                                        <div className='flex items-center gap-1' >
                                            <img src={goldBundle} />
                                            <p className='text-[#080807] text-xs font-extrabold leading-5' >{battle?.prizeAmount}</p>
                                        </div>
                                    </div>
                                </div>
                                <button 
                                    type="button"
                                    onClick={() => joinBattleAsOpponent(battle)}
                                    className="text-white bg-blue-700 hover:bg-blue-800 min-w-[48px] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm pt-2 pb-[0.65rem] px-4 m-0 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    play
                                </button> 
                            </div>
                        </div> 
                    ))
                }
            </div>
            <div className=' flex justify-start items-center self-stretch mt-6' >
                <div className='flex gap-1 items-center' >
                    <Prize/>
                    <p className='text-[#080807] text-sm font-extrabold leading-5' >Ongoing Battle</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-3 w-full' >
                {
                    liveMatchs.map((battle, index) => (
                        <div key={`${battle.battleCode}-${index}`} className='w-full rounded bg-white shadow-[0px_0px_8px_0px_rgba(0,0,0,0.06)] border-[0.5px] border-solid border-[rgba(8,8,7,0.20)]' >
                            <div className='flex items-center justify-between gap-2 p-3 border-b-[0.5px] border-solid border-[rgba(8,8,7,0.20)]'>
                                <p className='text-[#080807] text-xs font-extrabold leading-5 flex gap-1' >
                                    PLAYING FOR
                                    <img src={moneyBundle} alt="" /> 
                                    <span className='text-[#08080799]' >
                                        {2 * (battle?.entryFee)}
                                    </span>
                                </p>
                                <p className='text-[#080807] text-xs font-extrabold leading-5 flex gap-1' >
                                    PRIZE
                                    <img src={goldBundle} alt="" /> 
                                    <span className='text-[#08080799]' >
                                        {battle?.prizeAmount}
                                    </span>
                                </p>
                            </div>
                            <div className='flex items-center justify-between gap-2 p-3' >
                                <div className='inline-flex justify-between px-2 items-center w-full' >
                                    <div className='flex flex-col items-center gap-1 min-w-[50px]' >
                                        <p className='grey-font-color text-xs leading-5 avtar-cover' >
                                            <Avatar size="32" round={true} name={battle?.battleCreatorId?.name} />
                                        </p>
                                        <div className='flex items-center gap-1' >
                                            <p className='text-[#1B7DE1] text-[14px] font-normal leading-4' >{battle?.battleCreatorId?.name}</p>
                                        </div>
                                    </div>
                                    <div className='w-10 h-10' >
                                        <VSLogo />
                                    </div>
                                    <div className='flex flex-col items-center gap-1 min-w-[80px]' >
                                        <p className='grey-font-color text-xs leading-5 avtar-cover' >
                                            <Avatar size="30" round={true} name={battle?.battleOpenentId?.name} />
                                        </p>
                                        <div className='flex items-center gap-1' >
                                            <p className='text-[#1B7DE1] text-[14px] font-normal leading-4' >{battle?.battleOpenentId?.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Battle