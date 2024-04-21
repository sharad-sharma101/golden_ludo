import React, { useEffect, useState } from 'react'
import { IconLogo, Prize, VSLogo } from '../../helper/icons'
import moneyBundle from "../../assets/money-bundle.png";
import goldBundle from "../../assets/gold-bundle.png";
import "./index.scss";
import Avatar from 'react-avatar';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { checkBattleSessionApi, fetchBattlesApi, updateBattleApi } from '../../api/battle';
import { toast } from 'react-toastify';

const Battle = () => {
    const [liveMatchs, setLiveMatchs] = useState<any[]>([]);
    const [openMatchs, setOpenMatchs] = useState<any[]>([]);
    const [joinLoadingState, setJoinLoadingState] = useState('');
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

    function navigateToResultPage(battle: any) {
        if(battle.battleCreatorId._id == userObjectState._id || battle.battleOpenentId._id == userObjectState._id){
            nav(`/result/?id=${battle?._id}&battleCode=${battle?.battleCode}`);
        };
    }

    async function fetchBattleFunction() {
        const promises = [
            fetchBattlesApi('status=pending'),
            fetchBattlesApi('status=live')
          ];
          // Use Promise.all to wait for all promises to resolve
          const [openBattles, pendingBattles] = await Promise.all(promises);
          if(openBattles?.results && openBattles.results.length) setOpenMatchs(openBattles.results);
          if(pendingBattles?.results && pendingBattles.results.length) {
            let updatedMatch = [ ...(pendingBattles.results) ]
            // const index = updatedMatch.findIndex((obj: any) => obj.battleCreatorId._id == userObjectState._id);
            // if (index !== -1) {
            //     updatedMatch.unshift(updatedMatch.splice(index, 1)[0]);
            //     setLiveMatchs(updatedMatch);
            //     return 
            // }
            // const index2 = updatedMatch.findIndex((obj: any) => obj.battleOpenentId._id == userObjectState._id);
            // if (index2 !== -1) {
            //     updatedMatch.unshift(updatedMatch.splice(index, 1)[0]);
            //     setLiveMatchs(updatedMatch);
            //     return 
            // }
            setLiveMatchs(updatedMatch);
        }          
    }
    async function joinBattleAsOpponent(battle:any) {
        setJoinLoadingState(battle._id);
        const tot = await checkBattleSessionApi();
        
        if(tot.length === 0){
          toast.warning("Currently your game is still running", {
            position: "top-center",
            autoClose: 2000,
         });
         setJoinLoadingState('');
         return;
        }        
        const resp = await updateBattleApi(battle._id, {status: 'live'})
        if(resp.length === 0) {
            toast.error("Not able to join", {
               position: "top-center",
               autoClose: 2000,
            });
            setJoinLoadingState('');
        } else {
            nav(`/result/?id=${battle?._id}&battleCode=${battle?.battleCode}`);
            setJoinLoadingState('');
        }
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
                                    {joinLoadingState === battle?._id ?  
                                    (<div role="status">
                                    <svg aria-hidden="true" className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>) : "Play"
                                    }
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
                        <div key={`${battle.battleCode}-${index}`} onClick={() => navigateToResultPage(battle)} className='w-full rounded bg-white shadow-[0px_0px_8px_0px_rgba(0,0,0,0.06)] border-[0.5px] border-solid border-[rgba(8,8,7,0.20)]' >
                            <div className='flex items-center justify-between gap-2 p-3 border-b-[0.5px] border-solid border-[rgba(8,8,7,0.20)]'>
                                <p className='text-[#080807] text-xs font-extrabold leading-5 flex gap-1' >
                                    PLAYING FOR
                                    <img src={moneyBundle} alt="" /> 
                                    <span className='text-[#08080799]' >
                                        {(battle?.entryFee)}
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