// The name of the website
const websiteName = "MorningMC.qzz.io";

// Define the navigation links and labels
const navigationLinks = [
	{ href: "index.html", label: "Index" },
	{ href: "projects.html", label: "Projects" },
	{ href: "videos.html", label: "Videos" },
	{ href: "utils.html", label: "Utils" },
	{ href: "debug.html", label: "Debug" }
];

// Get the current <script> element's data-nav-index, data-title and data-path-prefix attribute
const navigationIndex = parseInt(document.currentScript.getAttribute("data-nav-index") ?? "-1", 10);
const pageTitle = document.currentScript.getAttribute("data-title") ?? "";
const pathPrefix = document.currentScript.getAttribute("data-path-prefix") ?? "";

// Generate the navigation bar with indicators for selected item
const navigationBarContent = navigationLinks.map((link, index) => {
	const leftIndicator = index === navigationIndex ? "<span class='nav-indicator'>></span>" : " ";
	const rightIndicator = index === navigationIndex ? "<span class='nav-indicator'><</span>" : " ";
	return `${leftIndicator} <a href="${pathPrefix}${link.href}">${link.label}</a> ${rightIndicator}`;
}).join("  ");

// Header HTML content
const header = `<header>
	<img class="logo" src="${pathPrefix}/assets/images/logo.png" alt="logo">
</header>
<nav><pre class="nav-content">${navigationBarContent}</pre></nav>`;

// Footer HTML content
const footer = `<footer>
	<p class="footer-content">
		Powered by <a href="https://pages.github.com/">GitHub Pages</a>. View source <a href="https://github.com/MorningMC/MorningMC.github.io">here</a>.
		<br>
		Copyright (c) 2025 MorningMC <span style='color: darkgray'>lincensed under <a href="https://mit-license.org/">MIT License</a>. Full document see <a href="${pathPrefix}LICENSE.txt">here</a>.</span>
	</p>
</footer>`;

// Update <title> element dynamically
if (0 <= navigationIndex && navigationIndex < navigationLinks.length) {
	const sectionPath = pageTitle ? ` / ${pageTitle}` : "";
	document.title = `${navigationLinks[navigationIndex].label}${sectionPath} @ ${websiteName}`;
}

// Insert the header and footer
document.body.insertAdjacentHTML("afterbegin", header);
document.body.insertAdjacentHTML("beforeend", footer);