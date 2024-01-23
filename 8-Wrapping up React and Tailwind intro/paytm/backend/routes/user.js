const express = require("express");
const z = require("zod");
const { User, Account } = require("../db/db");
const jwt = require("jsonwebtoken");
const middleware = require("../middleware");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const router = express.Router();

const userSignupBody = z.object({
	username: z.string,
	password: z.string,
	firstName: z.string,
	lastName: z.string,
});

router.post("/signup", async (req, res) => {
	const { username, password, lastName, firstName } = req.body;

	const { success } = userSignupBody.safeParse(req.body);

	if (!success) {
		return res.status(411).json({
			message: "Email already taken / Incorrect inputs",
		});
	}

	const userExists = await User.findOne({ username });

	if (userExists) {
		return res.status(411).json({
			message: "Email already taken / Incorrect inputs",
		});
	}

	const user = await User.create({
		username,
		password,
		firstName,
		lastName,
	});

	const userId = user._id;
	const balance = Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

	await Account.create({
		userId,
		balance,
	});

	const token = jwt.sign({ userId }, JWT_SECRET);

	res.json({ message: "User created successfully", token });
});

// Sign-in route:
const userSigninBody = z.object({
	username: z.string,
	password: z.string,
});

router.post("/signin", async (req, res) => {
	const { username, password } = req.body;
	const { success } = userSigninBody.safeParse(req.body);

	if (!success) {
		return res.status(411).json({
			message: "Email already taken / Incorrect inputs",
		});
	}

	const user = await User.findOne({
		username,
		password,
	});

	if (user) {
		const token = jwt.sign(
			{
				userId: user._id,
			},
			JWT_SECRET
		);

		res.json({
			token,
		});
		return;
	}

	res.status(411).json({
		message: "Error while logging in",
	});
});

// Update credentials route:

const updateBody = z.object({
	password: z.string().optional(),
	firstName: z.string().optional(),
	lastName: z.string().optional(),
});

router.put("/", middleware, async (req, res) => {
	const { success } = updateBody.safeParse(req.body);
	if (!success) {
		res.status(411).json({
			message: "Error while updating information",
		});
	}

	await User.updateOne(req.userId, req.body);

	res.json({
		message: "Updated successfully",
	});
});

router.get("/bulk", async (req, res) => {
	const filter = req.query.filter || "";

	const users = await User.find({
		$or: [
			{
				firstName: {
					$regex: filter,
				},
			},
			{
				lastName: {
					$regex: filter,
				},
			},
		],
	});

	res.json(users);
});

module.exports = router;
