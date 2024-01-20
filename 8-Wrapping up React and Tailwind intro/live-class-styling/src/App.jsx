import "./App.css";

function App() {
	return (
		<>
			<div className="flex justify-between text-black font-bold">
				<h2 className="bg-red-200 ">Tailwind</h2>
				<h2 className="bg-red-300">Tailwind</h2>
				<h2 className="bg-red-400">Tailwind</h2>
				<h2 className="bg-red-500">Tailwind</h2>
			</div>
			<div className="grid grid-cols-4 text-black font-bold">
				<h2 className="bg-red-200 ">Tailwind</h2>
				<h2 className="bg-red-300">Tailwind</h2>
				<h2 className="bg-red-400">Tailwind</h2>
				<h2 className="bg-red-500">Tailwind</h2>
			</div>
			<div className="grid grid-cols-10 text-black font-bold">
				<h2 className="bg-red-200 col-span-4">Tailwind</h2>
				<h2 className="bg-red-300 col-span-4">Tailwind</h2>
				<h2 className="bg-red-400 col-span-2">Tailwind</h2>
				<h2 className="bg-red-500">Tailwind</h2>
			</div>
		</>
	);
}

export default App;
