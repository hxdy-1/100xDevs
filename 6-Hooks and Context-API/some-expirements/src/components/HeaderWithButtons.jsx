import React, { useState } from "react";
import Header from "./Header";

const HeaderWithButtons = () => {
	const [title, setTitle] = useState("Hadi");
	return (
		<>
			<button
				onClick={(e) => {
					setTitle(Math.floor(Math.random() * 100));
				}}
			>
				click me to update the title
			</button>
			<Header title={title} />
		</>
	);
};

export default HeaderWithButtons;
