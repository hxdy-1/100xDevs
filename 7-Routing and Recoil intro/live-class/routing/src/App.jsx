import { useState } from "react";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import AppBar from "./pages/AppBar";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<AppBar />
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/" element={<Landing />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
