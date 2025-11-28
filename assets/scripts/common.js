document.addEventListener("DOMContentLoaded", () => {
	const body = document.body;

	// Get the current <script> element and its tabindex, title and prefix attribute
	const currentScript = document.querySelector('script[src$="common.js"]');
	const selectedIndex = parseInt(currentScript?.getAttribute("tabindex") ?? "-1", 10);
	const sectionTitle = currentScript?.getAttribute("title") ?? "";
	const pathPrefix = currentScript?.getAttribute("prefix") ?? "";

	// Define the navigation links and labels
	const navLinks = [
		{ href: "index.html", label: "Index" },
		{ href: "projects.html", label: "Projects" },
		{ href: "videos.html", label: "Videos" },
		{ href: "utils.html", label: "Utils" },
		{ href: "debug.html", label: "Debug" }
	];

	// Update <title> element dynamically
	if (selectedIndex >= 0 && selectedIndex < navLinks.length) {
		const sectionPath = sectionTitle ? ` / ${sectionTitle}` : "";
		document.title = `${navLinks[selectedIndex].label}${sectionPath} @ MorningMC.qzz.io`;
	}

	// Generate the navigation bar with > < marker for selected item
	const navBar = navLinks.map((link, i) => {
		const mark = i === selectedIndex ? ">" : " ";
		const backMark = i === selectedIndex ? "<" : " ";
		return `${mark} <a href="${pathPrefix}${link.href}">${link.label}</a> ${backMark}`;
	}).join("  ");

	// Header HTML content with placeholder for dynamic time
	const headerHTML =
		`<header>
			<img class="logo" src="${pathPrefix}/assets/images/logo.png" alt="logo">
		</header>
		<nav><pre>${navBar}</pre></nav>`;

	// Footer HTML content
	const footerHTML =
		`<footer>
			<p>
				Powered by <a href="https://pages.github.com/">GitHub Pages</a>. View source <a href="https://github.com/MorningMC/MorningMC.github.io">here</a>.
				<br>
				Copyright (c) 2025 MorningMC <span style='color: darkgray'>lincensed under <a href="https://mit-license.org/">MIT License</a>. Full document see <a href="${pathPrefix}LICENSE.txt">here</a>.</span>
			</p>
		</footer>`;

	// Insert the header and footer
	body.insertAdjacentHTML("afterbegin", headerHTML);
	body.insertAdjacentHTML("beforeend", footerHTML);
});