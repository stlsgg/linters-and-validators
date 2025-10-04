// Sidebar logic, functions, etc.
function initSidebar() {
	const sidebar = document.getElementById("sidebar");
	const sbBtn = document.getElementById("sidebar-button");

	if (!sidebar || !sbBtn) return;

	sbBtn.addEventListener("click", () => {
		sidebar.classList.toggle("sidebar");
		sidebar.classList.toggle("sidebar--active");
	});
}

initSidebar();
