import { animate, linear } from "animejs";
import { spring } from "animejs";

// Sidebar logic, functions, etc.
function initSidebar() {
	const sidebar = document.getElementById("sidebar");
	const sbBtn = document.getElementById("sidebar-button");
	const sbBtnSvg = sbBtn.querySelector("svg");

	if (!sidebar || !sbBtn) return;

	let isActive = false;
	const hiddenRight = "-240px";
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

initSidebar();
