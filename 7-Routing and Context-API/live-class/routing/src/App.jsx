import { useContext, useState } from "react";
import { context } from "./context";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<context.Provider value={count}>
				<Count setCount={setCount} />
			</context.Provider>
		</div>
	);
}

function Count({ setCount }) {
	return (
		<div>
			<CountRenderer />
			<Buttons setCount={setCount} />
		</div>
	);
}

function CountRenderer() {
	const count = useContext(context);
	return <div>{count}</div>;
}

function Buttons({ setCount }) {
	const count = useContext(context);
	return (
		<div>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Increase
			</button>

			<button
				onClick={() => {
					setCount(count - 1);
				}}
			>
				Decrease
			</button>
		</div>
	);
}

export default App;
