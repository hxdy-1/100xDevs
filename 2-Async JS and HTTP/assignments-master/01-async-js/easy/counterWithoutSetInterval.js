const recursion = (count = 0, boundary = 1000) => {
	count++;
	console.clear();
	console.log(count);
	if (count < 1000) {
		setTimeout(() => {
			recursion(count, boundary);
		}, 1000);
	}
};

recursion();
