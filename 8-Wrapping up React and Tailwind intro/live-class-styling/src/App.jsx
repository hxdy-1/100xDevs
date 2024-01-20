import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RevenueCard from "./components/RevenueCard";
import { Button } from "@mui/material";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="grid grid-cols-4">
				<RevenueCard
					title={"Revenue Card"}
					orderCount={13}
					amount={"93,312.20"}
				/>
				<Button variant="outlined">MUI Button</Button>
			</div>
		</>
	);
}

export default App;
