document.addEventListener("DOMContentLoaded", () => {
	// Header loading
	const header = document.querySelector("header");
	loadComponent("src/layout/header.html", header);

	// Footer loading
	const footer = document.querySelector("footer");
	loadComponent("src/layout/footer.html", footer);
});

async function loadComponent(componentPath, targetElement) {
	try {
		const response = await fetch(componentPath);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const html = await response.text();
		targetElement.outerHTML = html;
	} catch (error) {
		console.error("Error loading component:", error);
		targetElement.outerHTML = "<p>Компонент не загружен</p>";
	}
}
