const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

// const cors = require("cors");
// const corsOptions = {
// 	origin: "http://localhost:3000",
// 	credentials: true, //access-control-allow-credentials:true
// 	optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

app.use(express.json());

const { todoSchema, updateTodoSchema } = require("./types");
const { todo } = require("./db");

// body {
//     title: String,
//     description: string
// }
app.post("/todo", async (req, res) => {
	try {
		console.log(req.body);

		const parsedResult = todoSchema.safeParse(req.body);

		if (!parsedResult.success) {
			return res.status(411).json({
				message: "Wrong inputs",
			});
		}

		// post in mongodb
		await todo.create({
			title: req.body.title,
			description: req.body.description,
			completed: false,
		});

		res.json({
			message: "Todo has been added",
		});
	} catch (e) {
		res.status(500).json({
			message: "An unexpected error occurred",
		});
	}
});

// body {
//     title: String,
//     description: string
// }
app.get("/todos", async (req, res) => {
	const todos = await todo.find();

	res.json({
		todos,
	});
});

// body {
//     id: Number
// }
app.put("/completed", async (req, res) => {
	console.log(req.body);
	const parsedResult = updateTodoSchema.safeParse(req.body);

	if (!parsedResult.success) {
		return res.status(411).json({
			message: "Wrong inputs",
		});
	}
	// update it in mongodb
	await todo.updateOne(
		{
			_id: req.body.id,
		},
		{
			completed: true,
		}
	);

	res.json({
		message: "Todo has been updated",
	});
});

// app.listen(3000);

app.listen(`3000`, () => {
	console.log(`Server is running on port 3000`);
});
