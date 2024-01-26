import React from "react";
import Card from "../utils/Card";
import { Link } from "react-router-dom";

const inputClasses =
	"w-full py-1.5 px-2 rounded outline-none focus:outline-stone-500 -outline-offset-2";

const buttonClasses =
	"mt-4 bg-white font-bold w-full text-black rounded-md py-2 transition-all transform hover:bg-stone-300 active:translate-y-0.5 shadow-none";

const SignupForm = () => {
	return (
		<Card customStyles="my-6">
			<h1 className="font-sans text-4xl font-bold">Signup</h1>
			<p className="font-sans font-semibold text-stone-400">
				Enter your information to create an account
			</p>
			<form className="font-semibold w-full font-sans text-left flex flex-col gap-4">
				<label htmlFor="first-name" className="w-full">
					First Name
				</label>
				<input
					type="text"
					id="first-name"
					className={`${inputClasses}`}
					placeholder="John"
				/>
				<label htmlFor="last-name" className="w-full">
					Last Name
				</label>
				<input
					type="text"
					id="last-name"
					className={`${inputClasses}`}
					placeholder="Doe"
				/>
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
				<button className={`${buttonClasses}`}>Signup</button>
			</form>
			<p>
				Already have an account?{" "}
				<Link className="underline underline-offset-2" to="/">
					Login
				</Link>
			</p>
		</Card>
	);
};

export default SignupForm;
