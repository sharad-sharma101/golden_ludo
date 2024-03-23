import React, { useState } from 'react'
import "./index.scss";
import goldenLudo from "../../assets/golden-ludo.svg";
import { useNavigate } from 'react-router-dom';
import loginRequest from '../../api/login';

const Login = () => {
  const [phoneNumber, setphoneNumber] = useState<string>("");
  const [otpState, setOtpState] = useState<string>("");
  const navigate = useNavigate();
  function handleContinue() {
    loginRequest(otpState);
    navigate("/home");
  }
  return (
    <div className='gl-login bg-hero w-full h-full flex flex-col items-center gap-6 pt-20' >
      <div className='logo-space  w-[117.089px] h-[57.424px] shrink-0' >
        <img src={goldenLudo} alt="" style={{width: "100%", height: "100%"}} />
      </div>
      <div className='lower-side flex flex-col items-center gap-3' >
        <p className='text-base' >Sign in or Create an Account</p>
        <div className='otp-container border flex flex-col items-center gap-5 p-5 rounded-lg border-solid w-[18rem]' >
          <input 
            type="number" 
            id="number-input" 
            onChange={(e) => setphoneNumber(e.currentTarget.value)}
            aria-describedby="helper-text-explanation" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="90256710" 
            required />
          <input 
            type="number" 
            id="number-input" 
            onChange={(e) => setOtpState(e.currentTarget.value)}
            aria-describedby="helper-text-explanation" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="OTP" 
            required />
          <button 
            type="button"
            disabled={!(phoneNumber.trim().length && otpState.trim().length)}
            onClick={()=> handleContinue()} 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Continue
          </button>
        </div>
      </div>

    </div>
  )
}

export default Login