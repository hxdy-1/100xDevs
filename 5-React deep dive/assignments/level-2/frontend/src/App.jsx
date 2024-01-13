import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import CardForm from "./components/CardForm/CardForm";
import Button from "./components/Button/Button";

function App() {
	const [showForm, setShowForm] = useState(false);
	const [cards, setCards] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:3000/get");
				const data = await response.json();

				setCards(data.allCards);
				console.log(cards);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	if (!cards) {
		return <h1>No cards found</h1>;
	}

	return (
		<>
			{showForm ? (
				<CardForm setCards={setCards} />
			) : (
				<Button setShowForm={setShowForm} />
			)}

			<div className="card-container">
				{cards?.map((card) => (
					<Card
						setCards={setCards}
						key={card._id}
						id={card._id}
						name={card.name}
						description={card.description}
						interests={card.interests}
						linkedIn={card.linkedIn}
						twitter={card.twitter}
					/>
				))}
			</div>
		</>
	);
}

export default App;
