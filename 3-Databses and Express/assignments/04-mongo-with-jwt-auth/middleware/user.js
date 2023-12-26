const { User } = require("../db");

async function userMiddleware(req, res, next) {
	// Implement user auth logic
	// You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
	const { username } = req.headers;

	const userExist = await User.findOne(username);

	if (!userExist) {
		res.status(404).json({ message: "User not found" });
		return;
	}
	next();
}

module.exports = userMiddleware;
