// const express = require("express")
const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const middleware = async (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res
			.status(403)
			.json({ message: "Invalid token, Bearer missing" });
	}

	const token = authHeader.split(" ")[1];

	const decoded = jwt.verify(token, JWT_SECRET, (err) => {
		if (err) res.status(403).json({ message: "Invalid token" });
	});

	req.userId = decoded.userId;

	next();
};

module.exports = middleware;
