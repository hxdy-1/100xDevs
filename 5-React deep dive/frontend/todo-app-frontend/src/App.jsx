import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import Todos from "./components/Todos/Todos";

function App() {
	const [update, setUpdate] = useState(0);
	// console.log(update);
	return (
		<>
			<CreateTodo setUpdate={setUpdate} />
			<Todos
				update={update}
				// internalUpdate={internalUpdate}
				// setInternalUpdate={setInternalUpdate}
			/>
		</>
	);
}

export default App;
