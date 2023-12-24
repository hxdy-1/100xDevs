const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

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

// Implement listing all courses logic
router.get("/courses", (req, res) => {
	Course.find().then((courses) => {
		res.status(201).json({ courses });
	});
});

// Implement course purchase logic
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
	try {
		const courseId = req.params.courseId;
		const { username } = req.headers;

		const purchasedCourse = await Course.findOne({ courseId });

		await User.findOneAndUpdate(
			{ username },
			{ $set: { purchasedCourses: purchasedCourse } }
		);

		res.status(201).json({ message: "Course purchased successfully" });
	} catch (error) {
		res.status(500).json({ message: "Could not purchase the course" });
	}
});

// Implement fetching purchased courses logic
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
	try {
		const { username } = req.headers;

		const { purchasedCourses } = await User.findOne({ username });

		res.status(201).json({
			purchasedCourses,
		});
	} catch (error) {
		res.status(500).json({ message: "Failed to get the courses" });
	}
});
