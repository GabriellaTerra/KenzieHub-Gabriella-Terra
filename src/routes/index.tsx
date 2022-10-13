import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import React from "react";

import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";

function MainRoutes() {
	return (
		<div className="App">
			<Routes>
				<Route path="/LogIn" element={<LogIn />} />
				<Route path="*" element={<Navigate replace to={"/LogIn"} />} />
				<Route path="/Dashboard" element={<Dashboard />} />
				<Route path="/SignUp" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default MainRoutes;
