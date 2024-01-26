import React, { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { action as loginAction } from "./pages/LoginPage";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

function App() {
	return (
		<BrowserRouter>
			<Suspense
				fallback={
					<h1
						style={{
							textAlign: "center",
							fontWeight: "bolder",
							fontSize: "1.2rem",
						}}
					>
						Loading...
					</h1>
				}
			>
				<Routes>
					<Route
						path="/"
						element={<LoginPage />}
						// action={loginAction}
					/>
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
