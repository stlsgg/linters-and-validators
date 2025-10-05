import { getAvgTimeToRead, getWordsCount, pluralizeMins } from "./funcs";

const articleSetup = () => {
	const article = document.getElementById("article");
	if (!article) return;
	// ttr - time to read element
	const ttr = article.querySelector("#ttr");
	if (!ttr) return;

	const wordsCount = getWordsCount(article);
	const timeToRead = getAvgTimeToRead(wordsCount);

	ttr.innerText = `${timeToRead} ${pluralizeMins(timeToRead)}`;
};

const run = () => articleSetup();

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", run());
} else run();
