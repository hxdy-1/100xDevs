import AddCardPage from "./AddCard/AddCard";
import "./App.css";
import Card from "./Card/Card";

function App() {
	return (
		<div className="card-container">
			<Card
				name={"Hadi"}
				description={"An alumni in 100xDevs Cohort 2.0"}
				interests={["MERN Stack", "Open Source", "Fitness", "Cricket"]}
				socials={[
					{
						name: "LinkedIn",
						link: "linkedin.in",
					},
					{
						name: "Instagram",
						link: "instagram.in",
					},
					{
						name: "Twitter",
						link: "twitter.in",
					},
				]}
			/>
		</div>
		// <AddCardPage />
	);
}

export default App;
