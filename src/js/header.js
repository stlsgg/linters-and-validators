// Specific functions, events, etc. for header component
export function initBurgerMenu() {
	// Burger logic for phones on headers
	const burger_button = document.getElementById("burger__button");
	if (!burger_button) {
		console.error(`Burger button not found!`);
		return false;
	}
	burger_button.addEventListener("click", () => {
		const icons = burger_button.querySelectorAll("svg");
		icons.forEach((icon) => {
			icon.classList.toggle("d-none");
		});

		const burgerMenu = document.querySelector(".burger__menu");
		burgerMenu.classList.toggle("d-none");
	});

	return true;
}
