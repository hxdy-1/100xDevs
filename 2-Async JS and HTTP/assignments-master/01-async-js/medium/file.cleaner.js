const fs = require("fs");

fs.readFile("./b.txt", "utf-8", (err, data) => {
	const dataToBeWritten = data
		.split(" ")
		.filter((element) => (element.length > 0 ? true : false))
		.join(" ");

	fs.writeFile("./b.txt", dataToBeWritten, { encoding: "utf-8" }, (err) => {
		console.log("written successfully to the b.txt");
	});
});
