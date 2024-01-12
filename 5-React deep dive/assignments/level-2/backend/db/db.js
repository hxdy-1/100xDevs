const { connect, model, Schema } = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.mongo_url;

connect(mongoUrl);

const CardsSchema = new Schema({
	name: String,
	description: String,
	interests: Array,
	linkedIn: String,
	twitter: String,
});

const Cards = model("Cards", CardsSchema);

module.exports = Cards;
