# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Try to bootstrap a basic React application using vite. Read more about vite here - https://vitejs.dev/

Create the following functionality -

A basic TODO application where there are two input (title and description) boxes and users can add append TODOs to a div
Try using the same DOM functionality we did in week 4. Don't try to use state variables in React just yet
Just tro to port over our original HTML/JS implementation over to a React project
Hard todo - If you can, try using useState that we discussed this week and propagate the TODOs using state (If you don't understand this, don't worry about it)

You have been given the code of a purely frontend TODO app You have to fill in the following functions -

addTodoToDom
removeTodoFromDom
updateTodoInDom
updateState
These 4 functions comprise of what it means to create a library like React. The goal is the following -

Any time the updateState function is called with a new state, the updateState function calculates the diff between newTodos and oldTodos and call addTodoToDom, removeTodoFromDom or updateState based on the calculated diff.
They id of a todo uniquely identifies it. If the title of a todo with the same id changes in two iterations, updateTodoInDom should be called for it.
