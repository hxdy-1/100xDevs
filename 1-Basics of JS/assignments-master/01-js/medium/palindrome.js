/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
	const caseInsensitiveStr = str.toLowerCase().replace(/[\W_]/g, "");
	let reversedStr = "";
	for (let i = caseInsensitiveStr.length - 1; i >= 0; i--) {
		// console.log(caseInsensitiveStr[i]);
		reversedStr += caseInsensitiveStr[i];
	}

	if (caseInsensitiveStr !== reversedStr) {
		return false;
	}
	// console.log(reversedStr);
	return true;
}

module.exports = isPalindrome;

// isPalindrome("nanonan");
// isPalindrome("Abdul Haadi");
// isPalindrome("Nitin");

// We have to remove all the white spaces and reverse the original string and then compare it to the original input string.
