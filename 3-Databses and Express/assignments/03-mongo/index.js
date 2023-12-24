const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
// const adminRouter = require("./routes/admin.js");
// const userRouter = require("./routes/user.js");

require("dotenv").config();
const port = process.env.PORT;

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(`${port || 3000}`, () => {
	console.log(`Server is running on port ${port || 3000}`);
});
