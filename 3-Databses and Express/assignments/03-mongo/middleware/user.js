// Middleware for handling auth
const { User } = require("../db/index");

// module.exports = async function userMiddleware(req, res, next) {
async function userMiddleware(req, res, next) {
	const username = req.headers.username;

	const userExists = await User.findOne({ username });

	if (!userExists) {
		res.status(404).send("User not found");
		return;
	}
	next();
}

module.exports = userMiddleware;

// Implement user auth logic
// You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
// Input: Headers: { 'username': 'username', 'password': 'password' }
