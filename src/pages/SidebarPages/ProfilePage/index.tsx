import React from 'react'
import Avatar from 'react-avatar'
import moneyBundle from "../../../assets/money-bundle.png";
import { Prize, WalletIcon } from '../../../helper/icons';
import { logoutRequest } from '../../../api/login';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setUserAuth } from '../../../features/globalConfigs/global-slice';

const ProfilePage = () => {
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const { userObjectState } = useAppSelector(store => store.features);
    async function handleLogout() {
        const resp = await logoutRequest();
        if(resp){
            dispatch(setUserAuth(false));
            nav('/login');
        }
    }

  return (
    <div className='flex flex-col' >
        <div className="flex flex-col justify-center border-b-2 bg-slate-100">
            <div className="flex flex-col py-2 gap-2 justify-center items-center">
                <div className="flex flex-col items-center gap-0.5">
                    <Avatar size="32" round={true} name={"tasol"} />
                    <div className="text-xs">{userObjectState?.phoneNumber}</div>
                </div>
                <div className="flex gap-1">
                    <div className="text-md">{userObjectState?.name}</div>
                </div>
            </div>
            <div className="border flex gap-4 items-center bg-white justify-center m-2 rounded px-2 py-2">
                <WalletIcon/>
                <div className="text-md font-bold">Wallet</div>
            </div>
        </div>
        <div className="flex flex-col justify-between bg-slate-100 mt-1 p-2 gap-1">
            <div className="flex items-center border gap-4 rounded-md p-2 bg-white">
                <div className="logo">
                    <img src={moneyBundle} />
                </div>
                <div className="flex justify-center">
                    <div className="text-md">Cash Won: {'  '} <span>0</span></div>
                </div>
            </div>
            <div className="flex items-center border gap-4 rounded-md p-2 bg-white">
                <div className="logo">
                    <Prize />
                </div>
                <div className="flex justify-center">
                    <div className="text-md">Battle Played: {'  '} <span>0</span></div>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-between px-1 py-2">
            <button 
                type="button" 
                onClick={handleLogout}
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Log Out
            </button>
        </div>
    </div>
  )
}

export default ProfilePage
