import { useContext, useState } from "react";
import { CountContext } from "./Context";
import {
	RecoilRoot,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from "recoil";
import { countAtom, isEvenSelector } from "../store/atoms/Count";

function App() {
	// const [count, setCount] = useState(0);
	// wrap anyone that wants to use the teleported value inside a provider
	// recoil, redux, Themes in mUI
	return (
		<div>
			{/* <CountContext.Provider value={count}> */}
			<RecoilRoot>
				<Count />
			</RecoilRoot>
			{/* </CountContext.Provider> */}
		</div>
	);
}

// function Count({ setCount }) {
function Count() {
	console.log("Count comp rendered");
	const count = useRecoilValue(countAtom);
	const isEven = useRecoilValue(isEvenSelector);
	return (
		<div>
			<CountRenderer />
			{/* <Buttons setCount={setCount} /> */}
			<Buttons />
			{isEven ? "It is even" : ""}
		</div>
	);
}

function CountRenderer() {
	// const count = useContext(CountContext);
	const count = useRecoilValue(countAtom);
	return <div>{count}</div>;
}

// function Buttons({ setCount }) {
function Buttons() {
	// const count = useContext(CountContext);
	const setCount = useSetRecoilState(countAtom);
	return (
		<div>
			<button
				onClick={() => {
					setCount((prev) => prev + 1);
				}}
			>
				Increase
			</button>

			<button
				onClick={() => {
					setCount((prev) => prev - 1);
				}}
			>
				Decrease
			</button>
		</div>
	);
}

export default App;
