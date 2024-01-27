import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { action as loginAction } from "./pages/LoginPage";
import { action as signupAction } from "./pages/SignupPage";
import { loader as dashboardLoader } from "./pages/DashboardPage";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

const router = createBrowserRouter([
	{
		path: "/",
		action: loginAction,
		element: (
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
				<LoginPage />
			</Suspense>
		),
	},
	{
		path: "/signup",
		action: signupAction,
		element: (
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
				<SignupPage />
			</Suspense>
		),
	},
	{
		path: "/dashboard",
		loader: dashboardLoader,
		element: (
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
				<DashboardPage />
			</Suspense>
		),
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
