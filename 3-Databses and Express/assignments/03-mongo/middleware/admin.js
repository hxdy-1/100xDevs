// Middleware for handling auth
const { Admin } = require("../db/index");

async function adminMiddleware(req, res, next) {
	const username = req.headers.username;

	const adminExists = await Admin.findOne({ username });

	if (!adminExists) {
		res.status(404).send("User not found");
		return;
	}
	next();
}

module.exports = adminMiddleware;

// Implement admin auth logic
// You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

// Input Headers: { 'username': 'username', 'password': 'password' }
