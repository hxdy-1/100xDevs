console.log("hello world");

// console.log(a);

// write a program to greet a person given their first and last name:

// const fName = "Hadi";

// const lName = "Momin";

// console.log(`Hello ${fName} ${lName}, how are you doing today?`);

// write a program to greet a person based on their gender (if-else):

// const person1 = {
// 	gender: "female",
// 	name: "Jessica Bickling",
// };

// const person2 = {
// 	gender: "male",
// 	name: "John Doe",
// };

// const greetLoger = ({ gender, name }) => {
// 	if (gender === "female") {
// 		console.log(`${name} is a good girl and she works at xyz`);
// 	} else {
// 		console.log(`${name} is bad boy`);
// 	}
// };

// greetLoger(person1);
// greetLoger(person2);

// Run a loop and count till 1000:

// let answer = 0;

// for (let i = 1; i <= 1000; i++) {
// 	answer += i;
// 	console.log(answer);
// }

// console.log(answer);

// write a program which prints all the even numbers in an array:

// const arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 17, 23];
// let arrayOfEvenNums = [];

// const printEvenNum = (arr) => {
// 	for (let i = 0; i <= arr.length; i++) {
// 		if (i % 2 == 0) {
// 			arrayOfEvenNums.push(i);
// 		}
// 	}

// 	console.log(arrayOfEvenNums);
// };

// printEvenNum(arrayOfNums);

// write a program to print the biggest number in an array:

// const arrayOfNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 17, 23];

// const printBiggestNumber = (arr) => {
// 	let biggestNumber = arr[0];
// 	for (let i = 1; i <= arr.length; i++) {
// 		if (arr[i] > i) {
// 			biggestNumber = arr[i];
// 		}
// 	}

// 	console.log(biggestNumber);
// };

// printBiggestNumber(arrayOfNums);

// write a function that returns sum of two numbers:

// const sum = (a, b) => {
// 	return a + b;
// };

// console.log(sum(5, 5));

// write a function that returns sum of two numbers in a pretty format:

// const sum = (a, b) => {
// 	console.log(
// 		`The first number you've entered is: ${a} and the second one is: ${b}. ${
// 			a + b
// 		} is their sum`
// 	);
// };

// sum(5, 8);

// let sum = 0;

// for (let i = 0; i <= 10000000000; i++) {
// 	sum = sum + i;
// }

// console.log(sum);

// Callbacks:
// function sum(num1, num2, callback) {
// 	let result = num1 + num2;

// 	callback(result);
// 	// return result;
// }

// function displayResult(data) {
// 	console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
// 	console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum
// sum(4, 5, displayResult);
// sum(4, 5, displayResultPassive);

// Another example:
// function arithmetic(a, b, callback) {
// 	return callback(a, b);
// }

// function sum(a, b) {
// 	return a + b;
// }

// function sub(a, b) {
// 	return a - b;
// }

// console.log(arithmetic(6, 8, sum));
// console.log(arithmetic(6, 8, sub));

//
