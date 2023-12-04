/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	const normalizer = (str) => str.toLowerCase();

	const charCounter = (str) => {
		const charObj = {};

		for (let char of str) {
			charObj[char] = (charObj[char] || 0) + 1;
		}

		return charObj;
	};

	const normalizedStr1 = normalizer(str1);
	const normalizedStr2 = normalizer(str2);

	// if (normalizedStr1.length !== normalizedStr2.length) {
	// 	return false;
	// }

	const charInNormalizedStr1 = charCounter(normalizedStr1);
	const charInNormalizedStr2 = charCounter(normalizedStr2);

	for (let char in charInNormalizedStr1) {
		if (charInNormalizedStr1[char] !== charInNormalizedStr2[char]) {
			return false;
		}
	}

	return true;
}

module.exports = isAnagram;

// we have to check: lengths of both strings (before or after normalization doesn't matter), occurrence of each character in both the strings.
