// Reusable functions
export async function loadComponent(componentPath, targetElement) {
	try {
		const response = await fetch(componentPath);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const html = await response.text();
		targetElement.outerHTML = html;
		return true;
	} catch (error) {
		console.error("Error loading component:", error);
		targetElement.outerHTML = "<p>Компонент не загружен</p>";
		return false;
	}
}
