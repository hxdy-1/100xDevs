const mongoose = require("mongoose");
const { Schema, model } = mongoose;

mongoose.connect(
	"mongodb+srv://hadimomin02:whatever890@cluster0.gdp0v0s.mongodb.net/TodoApp"
);

const todoSchema = new Schema({
	title: String,
	description: String,
	completed: Boolean,
});

const todo = model("todos", todoSchema);

module.exports = {
	todo,
};
