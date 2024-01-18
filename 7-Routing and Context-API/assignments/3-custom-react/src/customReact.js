const el = {
	type: "a",
	props: {
		href: "https://github.com/hxdy-1",
		target: "_blank",
		children: "Click Me !",
	},
};

document.addEventListener("DOMContentLoaded", function () {
	function generateHTML(reactElement) {
		const { type, props } = reactElement;
		const attributes = Object.keys(props)
			.map((key) => `${key}="${props[key]}"`)
			.join(" ");

		return `<${type} ${attributes}>${props.children}</${type}>`;
	}

	function customRender(reactElement, path) {
		const htmlCode = generateHTML(reactElement);
		const targetElement = document.querySelector(path);

		if (targetElement) {
			targetElement.innerHTML = htmlCode;
		} else {
			console.error(`Element at path "${path}" not found.`);
		}
	}

	customRender(el, "#target");
});
