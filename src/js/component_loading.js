import * as mainUtils from "./funcs.js";
import * as headerUtils from "./header.js";
import { initSidebar } from "./sidebar.js";

// Header loading
const header = document.querySelector("header");
mainUtils
	.loadComponent("/src/layout/header.html", header)
	.then(() => headerUtils.initBurgerMenu());

// Footer loading
const footer = document.querySelector("footer");
mainUtils.loadComponent("/src/layout/footer.html", footer);

// Sidebar loading
const sidebar = document.getElementById("sidebar");
mainUtils
	.loadComponent("/src/layout/sidebar.html", sidebar)
	.then(() => initSidebar());
