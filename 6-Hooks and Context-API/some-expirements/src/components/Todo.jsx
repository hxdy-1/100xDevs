import React, { useEffect, useState } from "react";
import axios from "axios";

// const Todo = ({ title, description, id }) => {
const Todo = ({ id }) => {
	const [todo, setTodo] = useState();
	useEffect(() => {
		axios
			.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
			.then((response) => {
				console.log(response.data);
				setTodo(response.data.todo);
			});
	}, []);

	return (
		// <div>
		// 	<h1>{title}</h1>
		// 	<h5>{description}</h5>
		// </div>
		<div>
			<h1>{todo.title}</h1>
			<h5>{todo.description}</h5>
		</div>
	);
};

export default Todo;
