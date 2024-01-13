import React from "react";
import styles from "./Button.module.css";

const Button = ({ setShowForm }) => {
	return (
		<div className={styles.btn}>
			<button onClick={() => setShowForm(true)}>+Add New Card</button>
		</div>
	);
};

export default Button;
