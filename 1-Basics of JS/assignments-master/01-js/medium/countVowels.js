/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
	let countOfVowels = 0;

	const caseInsensitiveStr = str.toLowerCase();

	for (let i = 0; i <= caseInsensitiveStr.length; i++) {
		if (
			caseInsensitiveStr[i] === "a" ||
			caseInsensitiveStr[i] === "e" ||
			caseInsensitiveStr[i] === "i" ||
			caseInsensitiveStr[i] === "o" ||
			caseInsensitiveStr[i] === "u"
		) {
			countOfVowels++;
		}
	}

	// console.log(countOfVowels);
	return countOfVowels;
}

// countVowels("four");
// countVowels("aeiou");
// countVowels("fly");

module.exports = countVowels;
