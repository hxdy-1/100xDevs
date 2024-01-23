const express = require("express");
const middleware = require("../middleware");
const { Account } = require("../db/db");
const router = express.Router();

router.get("/balance", middleware, async (req, res) => {
	const { balance } = await Account.findOne({
		userId: req.userId,
	});

	res.json({
		balance,
	});
});

router.post("/transfer", middleware, async (req, res) => {
	const mongooseSession = await mongoose.startSession();

	mongooseSession.startTransaction();
	const { amount, to } = req.body;

	const account = await Account.findOne({ userId: req.userId }).session(
		mongooseSession
	);

	if (!account || account.balance < amount) {
		await mongooseSession.abortTransaction();
		return res.status(400).json({
			message: "Insufficient balance",
		});
	}

	const toAccount = await Account.findOne({ userId: to }).session(
		mongooseSession
	);

	if (!toAccount) {
		await mongooseSession.abortTransaction();
		return res.status(400).json({
			message: "Invalid account",
		});
	}

	await Account.updateOne(
		{ userId: req.userId },
		{ $inc: { balance: -amount } }
	).session(mongooseSession);

	await Account.updateOne(
		{ userId: to },
		{ $inc: { balance: amount } }
	).session(mongooseSession);

	await mongooseSession.commitTransaction();
	res.json({
		message: "Transfer successful",
	});
});

module.exports = router;
