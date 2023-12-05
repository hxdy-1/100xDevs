/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
	constructor() {
		this.todoArr = [];
	}

	add(todo) {
		this.todoArr.push(todo);
	}

	remove(indexOfTodo) {
		if (indexOfTodo >= 0 && indexOfTodo < this.todoArr.length) {
			this.todoArr.splice(indexOfTodo, 1);
		}
	}

	update(index, updatedTodo) {
		if (index >= 0 && index < this.todoArr.length) {
			this.todoArr.splice(index, 1, updatedTodo);
			// this.todoArr[index] = updatedTodo;
		}
	}

	getAll() {
		return this.todoArr;
	}

	get(indexOfTodo) {
		if (indexOfTodo >= 0 && indexOfTodo < this.todoArr.length) {
			return this.todoArr[indexOfTodo];
		} else {
			return null;
		}
	}

	clear() {
		this.todoArr = [];
	}
}

module.exports = Todo;
