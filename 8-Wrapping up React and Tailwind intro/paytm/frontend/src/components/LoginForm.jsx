import React from "react";
import Card from "../utils/Card";
import { Link } from "react-router-dom";

const inputClasses =
	"w-full py-1.5 px-2 rounded outline-none focus:outline-stone-500 -outline-offset-2";

const buttonClasses =
	"mt-4 bg-white font-bold w-full text-black rounded-md py-2 transition-all transform hover:bg-stone-300 active:translate-y-0.5 shadow-none";

const LoginForm = () => {
	return (
		<Card>
			<h1 className="font-sans text-4xl font-bold">Login</h1>
			<p className="font-sans font-semibold text-stone-400">
				Enter your credentials to access your account
			</p>
			<form className="font-semibold w-full font-sans text-left flex flex-col gap-4">
				<label htmlFor="username" className="w-full">
					Username
				</label>
				<input
					type="text"
					id="username"
					className={`${inputClasses}`}
				/>
				<label htmlFor="password" className="w-full">
					Password
				</label>
				<input
					type="password"
					id="password"
					className={`${inputClasses}`}
				/>
				<button className={`${buttonClasses}`}>Login</button>
			</form>
			<p>
				Don't have an account?{" "}
				<Link className="underline underline-offset-2" to="/signup">
					Signup
				</Link>
			</p>
		</Card>
	);
};

export default LoginForm;
