import React from "react";
import ListItem from "./ListItem";

const UsersList = ({ users }) => {
	return (
		<ul className="flex flex-col gap-4 mt-2">
			{users?.map((user, index) => (
				<ListItem
					className="bg-black px-2 py-2 shadow-lg rounded-md"
					key={index}
					username={user.username}
				/>
			))}
		</ul>
	);
};

export default UsersList;
