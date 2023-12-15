/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
	const before = new Date();

	for (let i = 0; i < 100000000000; i++) {
		if (milliseconds === new Date() - before) {
			break;
		}
	}

	return new Promise((resolve, reject) => {
		resolve();
	});
}

module.exports = sleep;
