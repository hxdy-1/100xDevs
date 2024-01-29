import React, { useState } from "react";

const Modal = ({ isOpen, onClose, allUsers }) => {
	return (
		<dialog open={isOpen}>
			<button onClick={onClose}>Close Modal</button>
			<input
				type="text"
				placeholder="Recipient"
				value={recipient}
				onChange={(e) => setRecipient(e.target.value)}
			/>
			<button onClick={handleSendMoney}>Send Money</button>
		</dialog>
	);
};

export default Modal;
