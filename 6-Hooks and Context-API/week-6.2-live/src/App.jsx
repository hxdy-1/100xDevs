import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
	// const [id, setId] = useState(0);
	// const [sum, setSum] = useState(0);
	const [count, setCount] = useState(0);
	return (
		// <div>
		// 	<button
		// 		onClick={() => {
		// 			setId(1);
		// 		}}
		// 	>
		// 		1
		// 	</button>
		// 	<button
		// 		onClick={() => {
		// 			setId(2);
		// 		}}
		// 	>
		// 		2
		// 	</button>
		// 	<button
		// 		onClick={() => {
		// 			setId(3);
		// 		}}
		// 	>
		// 		3
		// 	</button>
		// 	<button
		// 		onClick={() => {
		// 			setId(4);
		// 		}}
		// 	>
		// 		4
		// 	</button>
		// 	<Todo id={id} />
		// </div>
		<div>
			{/* <input
				type="number"
				onChange={(e) => {
					const value = e.target.value;
					let sum = 0;

					for (let i = 1; i <= value; i++) {
						sum += i;
					}

					setSum(sum);
				}}
			/>
			<h3>Sum is {sum}</h3> */}
			<button
				onClick={() => {
					setCount((prev) => prev + 1);
				}}
			>
				Counter ({count})
			</button>
		</div>
	);
}

export default App;

const Todo = ({ id }) => {
	const [todo, setTodo] = useState({});

	useEffect(() => {
		axios
			.get(`https://sum-server.100xdevs.com/todo?id=${id || 1}`)
			.then((response) => {
				console.log(response.data);
				setTodo(response.data.todo);
			});
	}, [todo]);

	return (
		<div>
			<h1>{todo.title}</h1>
			<h1>{todo.description}</h1>
		</div>
	);
};
