/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchWalletApi } from '../../api/wallet';
import { fetchUserApi } from '../../api/user';
import { setUserAuth, setUserObjectState, setWalletBalnceState } from '../../features/globalConfigs/global-slice';
import { checkForTokenApi } from '../../api/login';

const signingRoutes = ["/login", "/register", "/"];
  
const Authentication = () => {
  const { userObjectState, walletBalnceState } = useAppSelector(store => store.features);
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const isLoggedIn = async () => {
    if (Object.entries(userObjectState).length > 0 && Object.entries(walletBalnceState).length > 0 )
      return;
    
    let flag = true;
    const { pathname } = window.location;
    const pathnameArray = pathname.split('/').filter(Boolean);
    if (pathnameArray.length > 0)
      signingRoutes.forEach((route) => {
        if (route === pathnameArray[0]) flag = false;
    });
    
    if(!flag) return;
    
    const tokenRequest = await checkForTokenApi();
    
    if(!('status' in tokenRequest && Number(tokenRequest.status) === 200)){
      nav('/login');
    }
    dispatch(setUserAuth(true));
    const userResp = await fetchUserApi();
    const walletResp = await fetchWalletApi();
    
    if (Object.values(userResp.data).length === 0 || Object.values(walletResp.wallet).length === 0) {
      nav('/login');
    }
    dispatch(setWalletBalnceState(walletResp.wallet));
    dispatch(setUserObjectState(userResp.data));
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  return <div></div>;
};

export default Authentication;
