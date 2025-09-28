// Header loading
const header = document.querySelector("header");
loadComponent("/src/layout/header.html", header).then(() => initBurgerMenu());

// Footer loading
const footer = document.querySelector("footer");
loadComponent("/src/layout/footer.html", footer);

async function loadComponent(componentPath, targetElement) {
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

function initBurgerMenu() {
	// Burger logic for phones on headers
	const burger_button = document.getElementById("burger__button");
	if (!burger_button) {
		console.error(`Burger button not found!`);
		return false;
	}
	burger_button.addEventListener("click", () => {
		const icons = burger_button.querySelectorAll("i");
		icons.forEach((icon) => {
			icon.classList.toggle("d-none");
		});

		const burgerMenu = document.querySelector(".burger__menu");
		burgerMenu.classList.toggle("d-none");
	});

	return true;
}
