import React from 'react';
import walletKyc from "../../assets/wallet-kyc-banner.svg";

const Wallet = () => {
    const TOKEN_OPTION = [
        {money: "₹100"},
        {money: "₹250"},
        {money: "₹500"},
        {money: "₹1000"},
    ]
  return (
    <div className='flex flex-col gap-6 p-4' >
        <div className='w-full cursor-pointer' >
            <img src={walletKyc} alt="" style={{width: "100%"}} />
        </div>
        <div className='flex flex-col items-start gap-3'>
            <p className='text-[#080807] text-sm font-medium leading-5' >Add money to Wallet</p>
            <div className='flex flex-col flex-start gap-1 w-full' >
                <div className='flex w-full flex-col justify-center items-start gap-1 rounded border bg-white px-4 py-3 border-solid border-[rgba(8,8,7,0.20)]' >
                    <p className='text-[rgba(8,8,7,0.60)] text-[11px] font-normal leading-4'>Enter Amount</p>
                    <input style={{border: "none"}} placeholder='100' className='gd-wallet-money-input' type="number" />
                </div>
                <p className='text-[rgba(8,8,7,0.40)] text-[10px] font-normal leading-[15px]' >Minimum 10, Maximum 50000</p>
            </div>
            <div className='flex items-start gap-3' >
                {
                    TOKEN_OPTION.map((token, index) => (
                        <div key={`${token.money}-${index}`} className='cursor-pointer rounded flex items-center gap-2 px-2 py-1 border-[0.5px] border-solid border-[rgba(8,8,7,0.20)]' >
                            <p className='text-[#080807] text-xs font-normal leading-[18px]' >+</p>
                            <p className='text-[#080807] text-xs font-normal leading-[18px]' >{token.money}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        <button 
          type="button"
          className="gd-add-money-btn w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Add Money To Wallet
        </button>
    </div>
  )
}

export default Wallet