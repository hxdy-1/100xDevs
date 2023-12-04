/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
	const categoryTotals = {};

	transactions.forEach((transaction) => {
		if (!categoryTotals[transaction.category]) {
			categoryTotals[transaction.category] = transaction.price;
		} else {
			categoryTotals[transaction.category] += transaction.price;
		}
	});

	const resultArray = Object.keys(categoryTotals).map((category) => {
		return { category, totalSpent: categoryTotals[category] };
	});

	return resultArray;
	// return [];
}

module.exports = calculateTotalSpentByCategory;

// we have to return an array of objects, each object representing the category as key and total amount spent as value.
