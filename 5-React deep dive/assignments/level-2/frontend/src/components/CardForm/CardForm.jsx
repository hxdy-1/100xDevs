import React from "react";
import styles from "./CardForm.module.css";

const CardForm = ({ setCards }) => {
	const submitHandler = (e) => {
		e.preventDefault();
		const { name, description, interests, linkedIn, twitter } = e.target;

		// console.log(name.value);
		// console.log(description.value);
		// console.log(interests.value.split(","));
		// console.log(linkedIn.value);
		// console.log(twitter.value);
		fetch("http://localhost:3000/post", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name.value,
				description: description.value,
				interests: interests.value.split(","),
				linkedIn: linkedIn.value,
				twitter: twitter.value,
			}),
		})
			.then((response) => response.json())
			.then((data) => setCards((prev) => [...prev, data.createdCard]));
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<label htmlFor="name">
				Name:
				<input type="text" name="name" id="name" />
			</label>
			<label htmlFor="description">
				Description:
				<textarea name="description" id="description" />
			</label>
			<label htmlFor="interests">
				Interests:
				<input
					type="text"
					name="interests"
					id="interests"
					placeholder="Comma separated"
				/>
			</label>
			<label htmlFor="linkedIn">
				LinkedIn:
				<input type="text" name="linkedIn" id="linkedIn" />
			</label>
			<label htmlFor="twitter">
				Twitter:
				<input type="text" name="twitter" id="twitter" />
			</label>
			<button>+Add Card</button>
		</form>
	);
};

export default CardForm;
