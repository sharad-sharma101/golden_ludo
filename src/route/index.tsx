import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login"
import Wallet from "../pages/Wallet";
import Battle from "../pages/battle";
import PrivateRoutes from "./PrivateRoute";
import AppSidebar from "../component/appSidebar";
import SetBattle from "../pages/setBattle";
import Result from "../pages/Result";
import GameHistory from "../pages/SidebarPages/GameHistory";
import PeneltyHistory from "../pages/SidebarPages/PeneltyHistory";
import ReffralHistory from "../pages/SidebarPages/ReffralHistory";
import TransactionHistory from "../pages/SidebarPages/TransactionHistory";
import SupportPage from "../pages/SidebarPages/support";
import ReferAndEarnPage from "../pages/SidebarPages/ReferAndEarnPage";
import ProfilePage from "../pages/SidebarPages/ProfilePage";
import { checkForTokenApi } from "../api/login";

const AUTH_ROUTES = [
    { path: '/wallet', ele: <Wallet/> },
    { path: '/battle', ele: <Battle/> },
    { path: '/home', ele: <Home/> },
    { path: '/', ele: <Home/> },
    { path: '/result', ele: <Result/> },
    { path: '/battle/set', ele: <SetBattle/> },
    { path: '/history/games', ele: <GameHistory /> },
    { path: '/history/penelty', ele: <PeneltyHistory /> },
    { path: '/history/reffral', ele: <ReffralHistory /> },
    { path: '/history/transaction', ele: <TransactionHistory /> },
    { path: '/support', ele: <SupportPage /> },
    { path: '/profile', ele: <ProfilePage /> },
    { path: '/refer', ele: <ReferAndEarnPage /> },
];
const ROUTES = [
    { path: '/', ele: <Home/> },
    { path: '/login', ele: <Login /> },
    
];

const AppRoute = () => {
	return (
    <Routes>
        <Route element={<PrivateRoutes />}>
        {AUTH_ROUTES.map((route) => (
            <Route
            key={route.path}
            path={`/${route.path}`}
            element={
                <div className="left-side-container pt-16">
                    <AppSidebar auth={true} />
                    {route.ele}
                </div>
            }
            />
        ))}
        </Route>
        {ROUTES.map((route) => (
        <Route
            key={route.path}
            path={`/${route.path}`}
            element={
                <div className="left-side-container pt-16">
                    <AppSidebar auth={false} />
                    {route.ele}
                </div>
            }
        />
        ))}
    </Routes>
	);
};

export default AppRoute;
