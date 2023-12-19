const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const z = require("zod");

const usernameSchema = z.string().email();
const passwordSchema = z.string().min(6);

function signJwt(username, password) {
	const usernameResult = usernameSchema.safeParse(username);
	const passwordResult = passwordSchema.safeParse(password);

	if (!usernameResult.success || !passwordResult.success) {
		return null;
	} else {
		const token = jwt.sign({ username }, jwtPassword);
		return token;
	}
}

function verifyJwt(token) {
	try {
		jwt.verify(token, jwtPassword);
		return true;
	} catch (error) {
		return false;
	}
}

function decodeJwt(token) {
	const isDecodable = jwt.decode(token);
	// if (isDecodable !== null) {
	if (isDecodable) {
		return true;
	} else {
		return false;
	}
}

module.exports = {
	signJwt,
	verifyJwt,
	decodeJwt,
	jwtPassword,
};
