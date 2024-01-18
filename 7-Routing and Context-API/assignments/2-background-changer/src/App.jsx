import "./App.css";

function App() {
	return (
		<>
			<ColorPicker />
		</>
	);
}

export default App;

function ColorPicker() {
	const defaultColor = "White";

	const setBgColor = (color) => {
		const rootDiv = document.getElementById("root");
		rootDiv.style.backgroundColor = color;
	};

	return (
		<div className="ColorPicker">
			<button onClick={() => setBgColor("Violet")}>Violet</button>
			<button onClick={() => setBgColor("Indigo")}>Indigo</button>
			<button onClick={() => setBgColor("Blue")}>Blue</button>
			<button onClick={() => setBgColor("Green")}>Green</button>
			<button onClick={() => setBgColor("Yellow")}>Yellow</button>
			<button onClick={() => setBgColor("Orange")}>Orange</button>
			<button onClick={() => setBgColor("Red")}>Red</button>
			<button onClick={() => setBgColor(defaultColor)}>Default</button>
		</div>
	);
}
