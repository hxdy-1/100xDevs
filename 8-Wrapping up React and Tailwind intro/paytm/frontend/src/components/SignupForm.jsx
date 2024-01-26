import React, { useCallback, useState } from "react";
import Card from "../utils/Card";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";

const inputClasses =
	"w-full py-1.5 px-2 rounded outline-none focus:outline-stone-500 -outline-offset-2";

const buttonClasses =
	"mt-4 bg-white font-bold w-full text-black rounded-md py-2 transition-all transform hover:bg-stone-300 active:translate-y-0.5 shadow-none";

const SignupForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		username: "",
		password: "",
	});

	const handleSubmit = useCallback(
		async (e) => {
			e.preventDefault();
			// console.log("First name:", formData.firstName);
			// console.log("Last name:", formData.lastName);
			// console.log("Username:", formData.username);
			// console.log("Password:", formData.password);

			try {
				const { data } = await axios.post(
					"http://localhost:3000/api/v1/user/signup",
					{
						firstName: formData.firstName,
						lastName: formData.lastName,
						username: formData.username,
						password: formData.password,
					}
				);

				console.log(data.message);
				console.log(data.token);

				setFormData({
					username: "",
					password: "",
					firstName: "",
					lastName: "",
				});

				localStorage.clear();
				localStorage.setItem("token", data.token);

				navigate("/dashboard");
			} catch (error) {
				console.log(error);
				console.log(error.response.data.message);
			}
		},
		[formData]
	);

	const handleChange = useCallback((e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	}, []);

	return (
		<Card customStyles="my-6">
			<h1 className="font-sans text-4xl font-bold">Signup</h1>
			<p className="font-sans font-semibold text-stone-400">
				Enter your information to create an account
			</p>
			<form
				onSubmit={handleSubmit}
				className="font-semibold w-full font-sans text-left flex flex-col gap-4"
			>
				<label htmlFor="firstName" className="w-full">
					First Name
				</label>
				<input
					onChange={handleChange}
					type="text"
					id="firstName"
					name="firstName"
					value={formData.firstName}
					className={`${inputClasses}`}
					placeholder="John"
				/>
				<label htmlFor="lastName" className="w-full">
					Last Name
				</label>
				<input
					onChange={handleChange}
					type="text"
					id="lastName"
					name="lastName"
					value={formData.lastName}
					className={`${inputClasses}`}
					placeholder="Doe"
				/>
				<label htmlFor="username" className="w-full">
					Username
				</label>
				<input
					onChange={handleChange}
					type="text"
					id="username"
					name="username"
					value={formData.username}
					className={`${inputClasses}`}
				/>
				<label htmlFor="password" className="w-full">
					Password
				</label>
				<input
					onChange={handleChange}
					type="password"
					id="password"
					name="password"
					value={formData.password}
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
