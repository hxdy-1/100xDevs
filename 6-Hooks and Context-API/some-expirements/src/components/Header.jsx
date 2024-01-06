import React, { memo } from "react";

const Header = memo(({ title }) => {
	return <div>My name is {title}</div>;
});

export default Header;
