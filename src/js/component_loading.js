import * as mainUtils from "./funcs.js";
import * as headerUtils from "./header.js";
import { initSidebar } from "./sidebar.js";

const baseUrl = import.meta.env.BASE_URL;

// Header loading
const header = document.querySelector("header");
mainUtils
	.loadComponent(`${baseUrl}layout/header.html`, header)
	.then(() => headerUtils.initBurgerMenu());

// Footer loading
const footer = document.querySelector("footer");
mainUtils.loadComponent(`${baseUrl}layout/footer.html`, footer);

// Sidebar loading
const sidebar = document.getElementById("sidebar");
mainUtils
	.loadComponent(`${baseUrl}layout/sidebar.html`, sidebar)
	.then(() => initSidebar());
