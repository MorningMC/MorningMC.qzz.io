document.addEventListener("DOMContentLoaded", () => {
	// Format and update the current time
	const updateClock = () => {
		const now = new Date();

		const tzOffset = -now.getTimezoneOffset();
		const sign = tzOffset >= 0 ? "+" : "-";
		const pad = (n, len = 2) => String(Math.abs(n)).padStart(len, "0");
		const tzHours = pad(Math.floor(Math.abs(tzOffset) / 60));
		const tzMinutes = pad(Math.abs(tzOffset) % 60);
		const timezone = sign + tzHours + tzMinutes;

		const timestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}.${pad(now.getMilliseconds(), 3)}${timezone}`;

		const timeEl = document.querySelector(".datetime");
		if (timeEl) {
			timeEl.textContent = timestamp;
		}
	};

	updateClock(); // Initialize clock
	setInterval(updateClock, 64); // Avoid making last digits of millisecond the same all the time
});