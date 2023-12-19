const fs = require("fs");

fs.writeFile(
	"./a.txt",
	" Writing this new data ",
	{ encoding: "utf-8", flag: "a" },
	(err) => {
		console.log("successfully wrote to file");
	}
);

let n = 0;
for (let i = 0; i < 10000000000; i++) {
	n += i;
}

console.log(n);
