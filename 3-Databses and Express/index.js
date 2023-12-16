// const express = require("express");
// const z = require("zod")

// const app = express();

// app.use(express.json());

// app.get("/health-checkup", function (req, res) {
// 	const username = req.headers.username;
// 	const password = req.headers.password;
// 	const kidneyId = req.query.kidneyId;

// 	if (username != "harkirat" || password != "pass") {
// 		res.status(400).json({ msg: "Somethings up with your inputs" });
// 		return;
// 	}

// 	if (kidneyId != 1 && kidneyId != 2) {
// 		res.status(400).json({ msg: "Somethings up with your inputs" });
// 		return;
// 	}
// 	// do something with kidney here
// 	res.json({
// 		msg: "Your kidney is fine!",
// 	});
// });

// app.post("/health-checkup", function (req, res) {

// 	const kidneys = req.body.kidneys;
// 	const kidneysLength = kidneys.length;

// 	res.send("You have " + kidneysLength + " kidneys");
// });

// app.listen(3000);

const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", function (req, res) {
	// kidneys = [1, 2]
	const kidneys = req.body.kidneys;
	const response = schema.safeParse(kidneys);
	res.send({
		response,
	});
});

app.listen(3000);
