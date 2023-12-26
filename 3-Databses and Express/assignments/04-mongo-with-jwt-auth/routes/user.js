const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const jwt_password = process.env.JWT_PASSWORD;

// User Routes
// Implement user signup logic
router.post("/signup", async (req, res) => {
	try {
		const { username, password } = req.headers;
		const newUser = new User({ username, password });
		await newUser.save();

		res.status(201).json({ message: "User created successfully" });
	} catch (error) {
		res.status(500).json({ message: "Could not create user" });
	}
});

// Implement admin signup logic
router.post("/signin", async (req, res) => {
	const { username, password } = req.headers;

	const userExist = await User.findOne({ username, password });

	if (!userExist) {
		return res.status(401).json({ message: "Wrong credentials" });
	}

	const token = jwt.sign(username, jwt_password);
	res.json({ token });
});

// Implement listing all courses logic
router.get("/courses", (req, res) => {
	try {
		const token = req.headers.authorization.split(" ")[1];

		jwt.verify(token, jwt_password, async (err) => {
			if (err) {
				return res.status(401).json({ message: "Invalid token" });
			}

			Course.find().then((courses) => {
				res.status(201).json({ courses });
			});
		});
	} catch (error) {
		res.status(500).json({ message: "An unexpected error occurred" });
	}
});

// Implement course purchase logic
router.post("/courses/:courseId", userMiddleware, (req, res) => {
	try {
		const courseId = req.params.courseId;
		const token = req.headers.authorization.split(" ")[1];

		jwt.verify(token, jwt_password, async (err, username) => {
			if (err) {
				return res.status(401).json({ message: "Invalid token" });
			}

			console.log(username);
			const purchasedCourse = await Course.findOne({ courseId });

			await User.findOneAndUpdate(
				{ username },
				{ $push: { purchasedCourses: purchasedCourse } }
			);

			res.status(201).json({ message: "Course purchased successfully" });
		});
	} catch (error) {
		res.status(500).json({ message: "Could not purchase the course" });
	}
});

// Implement fetching purchased courses logic
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
	try {
		const token = req.headers.authorization.split(" ")[1];

		jwt.verify(token, jwt_password, async (err, username) => {
			if (err) {
				return res.status(401).json({ message: "Invalid token" });
			}
			const { purchasedCourses } = await User.findOne({ username });

			res.status(201).json({
				purchasedCourses,
			});
		});
	} catch (error) {
		res.status(500).json({ message: "Failed to get the courses" });
	}
});

module.exports = router;
