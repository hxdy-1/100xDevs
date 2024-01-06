import React, { useEffect, useState } from "react";

const Todo = ({ title, description }) => {
	return (
		<div>
			<h1>{title}</h1>
			<h5>{description}</h5>
		</div>
	);
};

export default Todo;
