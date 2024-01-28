import React from "react";

const ListItem = ({ username }) => {
	return (
		<li className="font-sans bg-black py-4 px-4 rounded-md shadow-lg flex justify-between">
			<div className="flex gap-4 items-center">
				<div className="bg-slate-50 text-black font-bold rounded-full w-10 h-10 flex justify-center items-center">
					{username?.[0]}
				</div>
				<p className="text-white font-semibold text-xl">{username}</p>
			</div>
			<button className="bg-white text-black py-1 px-2 rounded-md shadow-lg font-bold">
				Send Money
			</button>
		</li>
	);
};

export default ListItem;