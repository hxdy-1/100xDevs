import styles from "./Card.module.css";

const Card = ({ name, description, interests, socials }) => {
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
				{socials.map((social, index) => (
					<a key={index} href={social.link}>
						{social.name}
					</a>
				))}
			</div>
		</div>
	);
};

export default Card;
