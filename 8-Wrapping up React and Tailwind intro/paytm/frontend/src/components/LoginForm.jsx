import React, { useCallback, useState } from "react";
import Card from "../utils/Card";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const inputClasses =
	"w-full py-1.5 px-2 rounded outline-none focus:outline-stone-500 -outline-offset-2";

const buttonClasses =
	"mt-4 bg-white font-bold w-full text-black rounded-md py-2 transition-all transform hover:bg-stone-300 active:translate-y-0.5 shadow-none";

const LoginForm = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleSubmit = useCallback(
		async (e) => {
			e.preventDefault();
			// console.log("Username:", formData.username);
			// console.log("Password:", formData.password);

			try {
				const { data } = await axios.post(
					"http://localhost:3000/api/v1/user/signin",
					{
						username: formData.username,
						password: formData.password,
					}
				);

				console.log(data.token);

				setFormData({
					username: "",
					password: "",
				});

				localStorage.clear();
				localStorage.setItem("token", data.token);

				navigate("/dashboard");
			} catch (error) {
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
		<Card>
			<h1 className="font-sans text-4xl font-bold">Login</h1>
			<p className="font-sans font-semibold text-stone-400">
				Enter your credentials to access your account
			</p>
			<form
				onSubmit={handleSubmit}
				className="font-semibold w-full font-sans text-left flex flex-col gap-4"
			>
				<label htmlFor="username" className="w-full">
					Username
				</label>
				<input
					type="text"
					id="username"
					name="username"
					onChange={handleChange}
					value={formData.username}
					className={`${inputClasses}`}
				/>
				<label htmlFor="password" className="w-full">
					Password
				</label>
				<input
					type="password"
					id="password"
					name="password"
					onChange={handleChange}
					value={formData.password}
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

export const action = async ({ request }) => {
	const data = await request.formData();
	const authData = {
		username: data.get("username"),
		password: data.get("password"),
	};

	console.log(authData);
};
