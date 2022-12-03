// overlay
let hamburger = document.querySelector("#hamburger");
let overlayContainer = document.querySelector(".overlay-container");
let overlay = document.querySelector(".overlay");
hamburger.addEventListener("click", function () {
	overlayContainer.classList.toggle("show");
	overlay.classList.toggle("show");
});

overlayContainer.addEventListener("click", function () {
	overlayContainer.classList.remove("show");
	overlay.classList.remove("show");
	hamburger.checked = false;
});

let sports = [
	["Baseball", "baseball"],
	["Basketball", "basketball"],
	["Bowling", "bowling"],
	["Football", "football"],
	["Golf", "golf"],
	["Swimming", "swimming"],
	["Tennis", "tennis"],
	["All", "all"],
];

for (let sport of sports) {
	let a = document.createElement("a");
	a.classList.add("sport");
	a.textContent = sport[0];
	a.setAttribute("href", `/${sport[1]}.html`);
	overlay.appendChild(a);
}
