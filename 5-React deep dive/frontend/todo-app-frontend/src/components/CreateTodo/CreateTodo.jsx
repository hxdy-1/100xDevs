import { useRef } from "react";
import styles from "./CreateTodo.module.css";

const CreateTodo = ({ setUpdate }) => {
	const titleRef = useRef();
	const descriptionRef = useRef();

	const submitHandler = (e) => {
		e.preventDefault();

		// console.log(titleRef.current.value);
		// console.log(descriptionRef.current.value);

		const title = titleRef.current.value;
		const description = descriptionRef.current.value;

		fetch("http://localhost:3000/todo", {
			method: "POST",
			body: JSON.stringify({
				title,
				description,
			}),
			headers: {
				"Content-type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data.message);
				// Handle data
			});

		titleRef.current.value = "";
		descriptionRef.current.value = "";

		setUpdate((prev) => prev + 1);
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<input ref={titleRef} type="text" placeholder="Title" />
			<textarea
				ref={descriptionRef}
				placeholder="Description"
				rows={4}
				cols={40}
			/>

			<button>+Add Todo</button>
		</form>
	);
};

export default CreateTodo;
