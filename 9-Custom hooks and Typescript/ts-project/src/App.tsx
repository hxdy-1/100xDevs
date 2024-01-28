import "./App.css";

function App() {
	return (
		<>
			<Todo title="task 1" description="wow" />
		</>
	);
}

export default App;

interface TodoProps {
	title: string;
	description: string;
}

function Todo(prop: TodoProps) {
	return (
		<>
			<h1>{prop.title}</h1>
			<p>{prop.description}</p>
		</>
	);
}
