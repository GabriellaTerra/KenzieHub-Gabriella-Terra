import "./App.css";
import MainRoutes from "./routes";
import React from "react";
import { ToastContainer } from "react-toastify";
import UserProvider from "./contexts/logInContext/AuthContext";
import SignUpProvider from "./contexts/signUpContext/AuthContextSignUp";
import AddTechProvider from "./contexts/AddTech/AddTechContext";

function App() {
	return (
		<>
			<AddTechProvider>
				<UserProvider>
					<SignUpProvider>
						<div className=".App">
							<ToastContainer />
							<MainRoutes />
						</div>
					</SignUpProvider>
				</UserProvider>
			</AddTechProvider>
		</>
	);
}

export default App;
