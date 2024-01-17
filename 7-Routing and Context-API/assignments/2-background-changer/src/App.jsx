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
	return (
		<div className="ColorPicker">
			<button>Violet</button>
			<button>Indigo</button>
			<button>Blue</button>
			<button>Green</button>
			<button>Yellow</button>
			<button>Orange</button>
			<button>Red</button>
			<button>Default</button>
		</div>
	);
}
