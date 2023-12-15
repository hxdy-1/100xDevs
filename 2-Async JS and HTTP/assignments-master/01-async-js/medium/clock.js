setInterval(() => {
	const time = new Date();
	let hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	let amPm = "AM";

	console.clear();

	console.log(
		`${hours < 10 ? "0" + hours : hours}h : ${
			minutes < 10 ? "0" + minutes : minutes
		}m : ${seconds < 10 ? "0" + seconds : seconds}s`
	);

	if (hours >= 12) {
		amPm = "PM";
	}
	if (hours > 12) {
		hours -= 12;
	}

	if (hours === 0) {
		hours = 12;
	}

	console.log(
		`${hours < 10 ? "0" + hours : hours}h : ${
			minutes < 10 ? "0" + minutes : minutes
		}m : ${seconds < 10 ? "0" + seconds : seconds}s ${amPm}`
	);
}, 1000);
