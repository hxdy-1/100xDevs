import React from "react";
import SearchInput from "./SearchInput";
import UsersList from "./UsersList";

const MainDashboard = ({ balance, users }) => {
	return (
		<div className="font-sans text-white py-4 px-6 flex flex-col gap-6 mx-auto w-10/12 mt-28">
			<h3 className="font-semibold text-xl bg-black text-center py-4 rounded-md shadow-lg mx-auto w-1/4 flex justify-evenly">
				<span>My Balance:</span> <span> &#8377; {balance}/-</span>
			</h3>
			<h2 className="text-3xl font-semibold">All Users</h2>
			<SearchInput />
			<UsersList users={users} />
		</div>
	);
};

export default MainDashboard;
