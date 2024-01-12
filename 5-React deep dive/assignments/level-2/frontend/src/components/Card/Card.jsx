import styles from "./Card.module.css";

const Card = ({
	setCards,
	name,
	description,
	interests,
	linkedIn,
	twitter,
	id,
}) => {
	const editHandler = (
		id,
		name,
		description,
		interests,
		linkedIn,
		twitter
	) => {
		const newName = prompt(`Change name from ${name} to:`);
		const newDescription = prompt(
			`Change description from ${description} to:`
		);
		const newInterests = prompt(
			`Change interests from ${interests.join(",")} to:`
		);
		const newLinkedIn = prompt(`Change linkedIn link from ${linkedIn} to:`);
		const newTwitter = prompt(`Change twitter from ${twitter} to:`);

		fetch("http://localhost:3000/put", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id,
				name: newName,
				description: newDescription,
				interests: newInterests.split(","),
				linkedIn: newLinkedIn,
				twitter: newTwitter,
			}),
		})
			.then((response) => response.json())
			.then((data) =>
				setCards((prev) =>
					prev?.map((card) =>
						card._id == id ? data.updatedCard : card
					)
				)
			);
	};

	const deleteHandler = (id, name) => {
		const shallDelete = confirm(
			`Do you want to delete this card with name: ${name}`
		);
		if (shallDelete) {
			fetch("http://localhost:3000/delete", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id,
				}),
			})
				.then((response) => response.json())
				.then((data) =>
					setCards((prev) => prev.filter((card) => card._id != id))
				);
		}
	};

	return (
		<div className={styles.card}>
			<h2>{name}</h2>
			<p>{description}</p>
			<h4>Intrests:</h4>
			<ul>
				{interests.map((interest, index) => (
					<li key={index}>{interest}</li>
				))}
			</ul>
			<div>
				<a href={linkedIn}>LinkedIn</a>
				<a href={twitter}>Twitter</a>
			</div>
			<div>
				<button
					onClick={() =>
						editHandler(
							id,
							name,
							description,
							interests,
							linkedIn,
							twitter
						)
					}
				>
					Edit
				</button>
				<button onClick={() => deleteHandler(id, name)}>Delete</button>
			</div>
		</div>
	);
};

export default Card;
