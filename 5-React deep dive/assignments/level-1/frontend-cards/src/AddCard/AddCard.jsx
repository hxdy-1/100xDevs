import { useState } from "react";

const AddCardPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		socialMedia: [{ name: "", link: "" }], // Initialize with an empty object
		interests: [""],
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSocialMediaChange = (index, e) => {
		const { name, value } = e.target;
		const updatedSocialMedia = [...formData.socialMedia];
		updatedSocialMedia[index] = {
			...updatedSocialMedia[index],
			[name]: value,
		};
		setFormData({ ...formData, socialMedia: updatedSocialMedia });
	};

	const handleInterestChange = (index, e) => {
		const { name, value } = e.target;
		const updatedInterests = [...formData.interests];
		updatedInterests[index] = {
			...updatedInterests[index],
			[name]: value,
		};
		setFormData({ ...formData, interests: [...formData.interests, value] });
	};

	const handleSubmit = (e) => {
		// Handle submission, send formData to backend
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div className="add-card">
			{/* Form to add card */}
			<form onSubmit={handleSubmit}>
				{/* Input fields for name, description, social media, interests */}
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
					placeholder="Name"
				/>
				<input
					type="text"
					name="description"
					value={formData.description}
					onChange={handleInputChange}
					placeholder="Description"
				/>
				{formData.interests.map((interest, index) => (
					<div key={index}>
						<input
							type="text"
							name="name"
							value={interest.name}
							onChange={(e) => handleInterestChange(index, e)}
							placeholder="Hobbies"
						/>
					</div>
				))}
				{/* Other input fields (description, interests, etc.) */}
				{/* Social Media input fields */}
				{formData.socialMedia.map((platform, index) => (
					<div key={index}>
						<input
							type="text"
							name="name"
							value={platform.name}
							onChange={(e) => handleSocialMediaChange(index, e)}
							placeholder="Social Media Name"
						/>
						<input
							type="text"
							name="link"
							value={platform.link}
							onChange={(e) => handleSocialMediaChange(index, e)}
							placeholder="Link"
						/>
					</div>
				))}
				<button type="submit">Add Card</button>
			</form>
		</div>
	);
};

export default AddCardPage;
