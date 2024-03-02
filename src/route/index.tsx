import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const ROUTES = [
    { path: '/home', ele: <Home/> },
];

const AppRoute = () => {
	return (
		<Suspense>
			<Routes>
                {
                    ROUTES.map((route) => (
                        <Route key={route.path} path={route.path} element={route.ele}  />
                    ))
                }
			</Routes>
		</Suspense>
	);
};

export default AppRoute;
