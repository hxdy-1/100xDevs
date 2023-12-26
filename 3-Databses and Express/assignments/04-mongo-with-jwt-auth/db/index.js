const mongoose = require("mongoose");
require("dotenv").config();
const mongo_url = process.env.MONGO_URL;

// Connect to MongoDB
mongoose.connect(mongo_url);

// Define schemas
const AdminSchema = new mongoose.Schema({
	// Schema definition here
	username: String,
	password: String,
});

const UserSchema = new mongoose.Schema({
	// Schema definition here
	username: String,
	password: String,
	purchasedCourses: Array,
});

const CourseSchema = new mongoose.Schema({
	// Schema definition here
	courseId: String,
	title: String,
	description: String,
	price: Number,
	image: String,
	published: Boolean,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
	Admin,
	User,
	Course,
};
