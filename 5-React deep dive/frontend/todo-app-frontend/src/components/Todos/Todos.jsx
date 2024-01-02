import React, { useEffect, useState } from "react";
import styles from "./Todos.module.css";

const Todos = ({ update }) => {
	const [todosArr, setTodosArr] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/todos")
			.then((response) => response.json())
			.then((data) => {
				setTodosArr(data.todos);
			});
	}, [update, todosArr]);

	const clickHandler = (id) => {
		console.log(id);
		fetch("http://localhost:3000/completed", {
			method: "PUT",
			body: JSON.stringify({
				id,
			}),
			headers: {
				"Content-type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((updatedTodo) => {
				setTodosArr(
					todosArr.map((todo) =>
						todo._id === updatedTodo._id ? updatedTodo : todo
					)
				);
			});
	};
	return (
		<div className={styles["card-container"]}>
			{todosArr.map((todo) => {
				return (
					<div key={todo._id} className={styles.card}>
						<h3>{todo.title}</h3>
						<p>{todo.description}</p>
						<button onClick={() => clickHandler(todo._id)}>{`${
							todo.completed ? "already done" : "mark as done"
						}`}</button>
					</div>
				);
			})}
		</div>
	);
};

export default Todos;
