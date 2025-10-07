import { animate } from "animejs";
import { spring } from "animejs";

// Sidebar logic, functions, etc.
export function initSidebar() {
	const sidebar = document.getElementById("sidebar");
	const sbBtn = document.getElementById("sidebar-button");

	if (!sidebar || !sbBtn) return;
	const sbBtnSvg = sbBtn.querySelector("svg");

	let isActive = false;
	const hiddenRight = "-210px";
	const shownRight = "0px";

	sbBtn.addEventListener("click", () => {
		isActive = !isActive;

		animate(sidebar, {
			right: isActive ? shownRight : hiddenRight,
			duration: 100,
			ease: spring({ bounce: 0.2 }),
		});

		animate(sbBtnSvg, {
			rotate: isActive ? 180 : 0,
			duration: 500,
			ease: spring({ bounce: 0.6 }),
		});
	});
}
