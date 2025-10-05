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

// Return average time to read an article
// Inputs:
// @words - amount of the words in article
// @wpm - words per minute - 180 words by default
// Return time in minutes required to read
export const getAvgTimeToRead = (words, wpm = 180) => {
	const w = Number(words) || 0;
	if (w === 0) return 0;
	return Math.ceil(w / wpm);
};

export const getWordsCount = (element) => {
	if (!element) return 0;
	const text = (element.textContent || "").trim();
	if (!text) return 0;
	return text.split(/\s+/).filter(Boolean).length;
};

export const pluralizeMins = (amount) => {
	const n = Math.abs(Math.floor(Number(amount) || 0));
	const lastTwo = n % 100;
	const last = n % 10;

	if (lastTwo >= 11 && lastTwo <= 14) return "минут";
	if (last === 1) return "минута";
	if (last >= 2 && last <= 4) return "минуты";
	return "минут";
};
