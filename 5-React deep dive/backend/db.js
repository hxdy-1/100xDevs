const mongoose = require("mongoose");
const { Schema, model } = mongoose;

require("dotenv").config();
const mongo_connection_string = process.env.mongo_connection_string;

mongoose.connect(mongo_connection_string);

const todoSchema = new Schema({
	title: String,
	description: String,
	completed: Boolean,
});

const todo = model("todos", todoSchema);

module.exports = {
	todo,
};
