const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");

require("dotenv").config();
const jwt_password = process.env.JWT_PASSWORD;

// Admin Routes
router.post("/signup", (req, res) => {
	// Implement admin signup logic
	const { username, password } = req.headers;

	Admin.create({
		username,
		password,
	});

	res.json({ message: "Admin created successfully" });
});

router.post("/signin", async (req, res) => {
	// Implement admin signup logic
	const { username, password } = req.headers;

	const adminExist = await Admin.findOne({ username, password });

	if (!adminExist) {
		res.status(401).json({ message: "Wrong credentials" });
		return;
	}

	const token = jwt.sign(username, jwt_password);
	res.json({ token });
});

router.post("/courses", adminMiddleware, async (req, res) => {
	// Implement course creation logic
	try {
		const { title, description, price, imageLink, published } = req.body;
		const token = req.headers.authorization.split(" ")[1];

		jwt.verify(token, jwt_password, async (err) => {
			if (err) {
				console.log(err.message);
				return res.status(401).json({ message: "Incorrect token" });
			}

			const courseId = Math.floor(Math.random() * 100000);

			const newCourse = new Course({
				courseId,
				title,
				description,
				price,
				image: imageLink,
				published,
			});

			await newCourse.save();

			res.status(201).json({
				message: "Course created successfully",
				courseId,
			});
		});
	} catch (error) {
		res.status(500).json({ message: "Could not create course" });
	}
});

router.get("/courses", adminMiddleware, (req, res) => {
	// Implement fetching all courses logic
	const token = req.headers.authorization.split(" ")[1];

	jwt.verify(token, jwt_password, (err) => {
		if (err) {
			return res.status(401).json({ message: "Invalid token" });
		}

		Course.find()
			.then((courses) => res.json({ courses }))
			.catch((err) =>
				res
					.status(500)
					.json({ message: `An unexpected error occurred` })
			);
	});
});

module.exports = router;
