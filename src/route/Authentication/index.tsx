/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Authentication = () => {
  const signingRoutes = ["/login", "/register", "/"];
  const nav = useNavigate();
  const userCredential = localStorage.getItem('refreshToken');
  const userObject = localStorage.getItem('gd-token');
  const isLoggedIn = async () => {
    if (userCredential) {
      if (userObject) {
        const userJson = JSON.parse(userObject);
        // if every required token is present 
      }
      // probably this not required in gd as it is otp based
      // if (window.location.pathname === '/') nav('/home');
      return;
    }
    let flag = true;
    const { pathname } = window.location;
    const pathnameArray = pathname.split('/').filter(Boolean);
    if (pathnameArray.length > 0)
      Object.values(signingRoutes).forEach((route) => {
        if (route === pathnameArray[0]) flag = false;
      });
    if (flag) nav('/login');
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  return <div></div>;
};

export default Authentication;
