const express = require("express");
const cors = require("cors");
const Cards = require("./db/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/get", async (req, res) => {
	const allCards = await Cards.find();

	res.json({
		allCards,
	});
});

app.get("/get-one", async (req, res) => {
	const { id } = req.body;

	const card = await Cards.findById(id);

	res.json({
		card,
	});
});

app.post("/post", async (req, res) => {
	const { name, description, interests, linkedIn, twitter } = req.body;

	const createdCard = await Cards.create({
		name,
		description,
		interests,
		linkedIn,
		twitter,
	});

	res.json({
		message: "User created successfully",
		createdCard,
	});
});

app.put("/put", async (req, res) => {
	const { id, name, description, interests, linkedIn, twitter } = req.body;

	const updatedCard = await Cards.findByIdAndUpdate(
		id,
		{
			name,
			description,
			interests,
			linkedIn,
			twitter,
		},
		{ new: true }
	);

	res.json({
		message: "Card updated successfully",
		updatedCard,
	});
});

app.delete("/delete", async (req, res) => {
	const { id } = req.body;

	await Cards.findByIdAndDelete(id);

	res.json({
		message: "Card deleted successfully",
	});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
