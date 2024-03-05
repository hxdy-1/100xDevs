import React from "react";

export default function ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			banner: 20% off on login
			{children}
		</div>
	);
}
