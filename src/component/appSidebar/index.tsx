import React, { useState } from 'react'
import GoldenLudoIcon from "../../assets/golden-ludo.svg";
import { useNavigate } from 'react-router-dom';
import { BarLight, GreyAddIcon, ProfileIcon, RightArrow, WalletIcon } from '../../helper/icons';

interface Props {
  auth: boolean;
}

const AppSidebar = ({auth}: Props) => {
 const nav = useNavigate()
 console.log({auth});
 
 const [openState, setopenState] = useState(true);
 const SidebarContent = [
  {
    title: "My Profile",
    route: "/battle",
    key: "myProfile",
  },
  {
    title: "My Wallet",
    route: "/wallet",
    key: "myWallet",
  },
  {
    title: "Games History",
    route: "/history/games",
    key: "gameHistory",
  },
  {
    title: "Transaction History",
    route: "/history/transaction",
    key: "transactionHistory",
  },
  {
    title: "Refer & Earn",
    route: "/home",
    key: "refer",
  },
  {
    title: "Referral History",
    route: "/history/reffral",
    key: "refferalHistory",
  },
  {
    title: "Penality History",
    route: "/history/penelty",
    key: "penalityHistory",
  },
  {
    title: "Support",
    route: "/support",
    key: "support",
  },
 ];
 function handleSidebarClick(content: any) {
  setopenState(true);
  nav(`${content.route}`); 
 }

  return (
<div className="flex w-full justify-between items-center bg-white px-4 py-2 border-b-[0.5px] border-b-[#DEDDDD] border-solid fixed top-0">
  {
    auth && (
      <div>
        <div 
          className='w-6 h-6 justify-center items-center px-[5px] py-1 cursor-pointer' 
          onClick={() => setopenState(!openState)}
          >
          <BarLight />
        </div>
        <div
        className={`flex flex-col bg-white absolute w-fit h-[calc(100vh_-_50px)] left-0 top-[50px] ${!openState ? 'translate-x-0' : '-translate-x-full'} transition-[1s] duration-[ease-out]`}
        >
          {
            SidebarContent.map((content) => (
              <div 
                key={content.key} 
                className={`flex justify-between p-4 cursor-pointer items-center gap-4 border-b-[##bfbfbb] border-b border-solid`} 
                onClick={() => handleSidebarClick(content) }
                >
                  <div className='flex gap-1 items-center justify-start' >
                    <ProfileIcon />
                    <div className='text-[#080807] text-[0.85em] font-medium'>{content.title}</div>
                  </div>
                  <RightArrow />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
  <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={GoldenLudoIcon} className="h-8" alt="Flowbite Logo" />
  </a>
  {
    auth ? (
      <div onClick={() => nav('/wallet')} className='flex items-center gap-3 rounded pl-0.5 border-[0.5px] border-solid border-[rgba(8,8,7,0.20)] cursor-pointer' >
        <div className='flex h-fit items-center gap-1 px-1 pl-0 py-0' >
           <div className='flex items-center gap-1' >
              <div className='h-full p-1 pr-0' >
                <WalletIcon />
              </div>
              <div className='text-[12px] font-medium leading-4' >2,070</div>
           </div>
        </div>
        <div className='bg-[rgba(8,8,7,0.04)] flex items-center gap-1 h-[24px] px-1 py-0 rounded-[0px_4px_4px_0px]' ><GreyAddIcon /> </div>
      </div>
    ): (
      <div className='flex justify-center items-center gap-1 rounded border shadow-[0px_8px_16px_0px_rgba(96,97,112,0.16),0px_2px_4px_0px_rgba(40,41,61,0.04)] px-4 py-2 border-solid border-[#1B7DE1]' >
        <p onClick={() => nav("/login")} className='cursor-pointer text-[#1B7DE1] text-xs font-medium leading-4' >Login & SignUp</p>
      </div>
    )
  }
</div>

  )
}

export default AppSidebar