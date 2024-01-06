import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import HeaderWithButtons from "./components/HeaderWithButtons";
import Todo from "./components/Todo";
import Wrapper from "./components/Wrapper";

let id = 4;

function App() {
	// const [title, setTitle] = useState("Hadi");
	// const [todoArr, setTodoArr] = useState([
	// 	{
	// 		id: 1,
	// 		title: "First todo",
	// 		description: "Some long ass description",
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Second todo",
	// 		description: "Some long ass description",
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Third todo",
	// 		description: "Some long ass description",
	// 	},
	// ]);

	const [todosArr, setTodosArr] = useState([]);
	useEffect(() => {
		setInterval(() => {
			fetch("https://sum-server.100xdevs.com/todos")
				.then((res) => res.json())
				.then((result) => setTodosArr(result.todos));
		}, 5000);
		// fetch("https://sum-server.100xdevs.com/todos")
		// 	.then((res) => res.json())
		// 	.then((result) => setTodosArr(result.todos));
	}, []);
	// }, [todosArr]);
	return (
		<div>
			{/* <HeaderWithButtons /> */}
			{/* <button
				onClick={(e) => {
					setTitle(Math.floor(Math.random() * 100));
				}}
			>
				click me to update the title
			</button>
			<Header title={title} />
			<Header title={"Hadi"} />
			<Header title={"Hadi"} />
			<Header title={"Hadi"} /> */}

			{/* <button
				onClick={() => {
					setTodoArr([
						...todoArr,
						{
							id: id++,
							title:
								"Title number: " +
								Math.floor(Math.random() * 10000),
							description:
								"Description number: " +
								Math.floor(Math.random() * 10000),
						},
					]);
				}}
			>
				Add todo
			</button>
			{todoArr.map((todo) => (
				<Todo
					key={todo.id}
					title={todo.title}
					description={todo.description}
					id={todo.id}
				/>
			))} */}
			{/* <Wrapper>
				<h1>Some title</h1>
			</Wrapper> */}
			{todosArr.map((todo) => (
				<Todo title={todo.title} description={todo.description} />
			))}
		</div>
	);
}

export default App;
