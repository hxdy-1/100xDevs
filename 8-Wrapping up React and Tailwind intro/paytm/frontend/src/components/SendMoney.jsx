import React from "react";
import Card from "../utils/Card";
import { Form, useNavigation, useSearchParams } from "react-router-dom";

const SendMoney = () => {
	const [searchParams] = useSearchParams();
	const navigation = useNavigation();
	const sendingMoney = navigation.state === "submitting";
	// console.log(searchParams.get("name"));
	// console.log(searchParams.get("id"));
	return (
		<Card>
			<h1 className="font-bold text-4xl">Send Money</h1>
			<div className="flex w-full items-center gap-4">
				<div className="flex items-center justify-center rounded-full bg-stone-50 w-10 h-10 text-black font-semibold text-xl">
					{searchParams.get("name")?.[0].toUpperCase()}
				</div>
				<h2 className="text-2xl font-semibold">
					{searchParams.get("name")}
				</h2>
			</div>
			<Form
				method="post"
				// action="/send"
				className="flex flex-col gap-2 w-full"
			>
				<label className="w-full" htmlFor="amount">
					Amount (in Rs.)
				</label>
				<input
					className="px-2 py-2 rounded-md shadow-lg w-full"
					type="number"
					name="amount"
					id="amount"
					placeholder="Enter amount"
				/>
				<button className="bg-white font-bold w-full text-black rounded-md py-2 transition-all transform hover:bg-emerald-300 active:translate-y-0.5 shadow-none">
					{!sendingMoney ? "Initiate Transfer" : "Sending..."}
				</button>
			</Form>
		</Card>
	);
};

export default SendMoney;
