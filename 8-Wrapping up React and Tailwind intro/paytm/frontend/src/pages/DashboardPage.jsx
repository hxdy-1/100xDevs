import React from "react";
import Navbar from "../components/Navbar";
import MainDashboard from "../components/MainDashboard";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const DashboardPage = () => {
	const loaderData = useLoaderData();

	console.log("loaderData: ", loaderData);

	return (
		<>
			<Navbar username={loaderData.username} />
			<MainDashboard
				balance={loaderData?.balance}
				users={loaderData?.usersArr}
			/>
		</>
	);
};

export default DashboardPage;

export const loader = async () => {
	const token = localStorage.getItem("token");
	// console.log(token);

	try {
		const { data } = await axios.get(
			"http://localhost:3000/api/v1/accounts/balance",
			{
				headers: {
					Authorization: "Bearer " + token,
					"Content-Type": "application/json",
				},
			}
		);

		// console.log("data: ", data);
		return data;
	} catch (error) {
		return token;
	}
};
