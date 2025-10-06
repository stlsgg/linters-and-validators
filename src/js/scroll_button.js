import { animate, spring } from "animejs";

// scroll-button.js
export const scrollButtonSetup = ({
	introSelector = ".article__intro",
	offset = 0,
} = {}) => {
	const btn = document.getElementById("scroll-button");
	if (!btn) return;

	const intro = document.querySelector(introSelector);

	const scrollUp = () => {
		animate([document.documentElement, document.body], {
			scrollTop: 0,
			duration: 400,
			ease: "inOutQuad",
		});
	};

	btn.addEventListener("click", scrollUp);
	btn.addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			scrollUp();
		}
	});

	if ("IntersectionObserver" in window && intro) {
		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					animate(btn, {
						right: !entry.isIntersecting ? "50px" : "-70px",
						duration: 300,
						ease: spring({ bounce: 0.4 }),
					});
				});
			},
			{ root: null, threshold: 0 },
		);

		io.observe(intro);
	} else {
		// fallback
		const threshold = intro
			? intro.getBoundingClientRect().height - offset
			: 300;
		const onScroll = () => {
			animate(btn, {
				right: window.scrollY > threshold ? "50px" : "-70px",
				duration: 300,
				ease: spring({ bounce: 0.4 }),
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
	}
};

// init
document.addEventListener("DOMContentLoaded", () => {
	scrollButtonSetup({ introSelector: ".article__intro", offset: 0 });
});
