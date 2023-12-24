const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
	try {
		const { username, password } = req.body;

		const newAdmin = new Admin({
			username,
			password,
		});

		await newAdmin.save();

		res.status(201).json({ message: "Admin created successfully" });
	} catch (error) {
		res.status(500).json({ message: "Could not create admin" });
	}
});

// Implement course creation logic
router.post("/courses", adminMiddleware, async (req, res) => {
	try {
		const { title, description, price, imageLink, published } = req.body;

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
	} catch (error) {
		res.status(500).json({ message: "Could not create course" });
	}
});

// Implement fetching all courses logic
router.get("/courses", adminMiddleware, (req, res) => {
	Course.find().then((courses) => {
		res.status(201).json({ courses });
	});
});

module.exports = router;
