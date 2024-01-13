import React from "react";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
	const navigate = useNavigate();
	return (
		<div style={{ backgroundColor: "white", color: "black" }}>
			<h1>Navbar</h1>
			<button
				onClick={() => {
					navigate("/dashboard");
				}}
			>
				Go to Dashboard
			</button>
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				Go to Landing page
			</button>
		</div>
	);
};

export default AppBar;
