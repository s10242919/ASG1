import Club from "./club.js";

let leagues = [
	["Premier League", "premierleague"],
	["Bundesliga", "bundesliga"],
	["La Liga", "laliga"],
];

const leagueSelect = document.querySelector("#league-select");
for (let league of leagues) {
	console.log;
	let option = document.createElement("option");
	option.textContent = league[0];
	option.value = league[1];
	leagueSelect.appendChild(option);
}

let file = leagueSelect.firstChild.value;

leagueSelect.addEventListener("change", (e) => {
	file = e.target.value;
	fetchFile(e.target.value);
});

async function fetchFile(fileName) {
	let clubList = [];
	await fetch(`/${fileName}.json`)
		.then((res) => res.json())
		.then((data) =>
			data.forEach((e) => {
				let newClub = new Club(...e);
				clubList.push(newClub);
			})
		);
	generateTableHead(width);
	generateTableBody(width, clubList);
}

// table head
const tableHead = document.querySelector(".league-table--header");
function generateTableHead(width) {
	let tableCols = ["Pos", "Club", "Pl", "W", "D", "L", "GD", "Pts"];
	let toAppend = [];
	let vals =
		width < 500
			? [
					tableCols[0],
					tableCols[1],
					tableCols[2],
					tableCols[3],
					tableCols[4],
					tableCols[5],
					tableCols[7],
			  ]
			: tableCols;
	for (let col of vals) {
		let newTh = document.createElement("th");
		newTh.innerHTML = `<th>${col}<th>`;
		newTh.textContent = col;
		// tableHead.appendChild(newTh);
		toAppend.push(newTh);
	}
	tableHead.replaceChildren(...toAppend);
}

// table data
const tableBody = document.querySelector(".league-table--body");
function generateTableBody(width, clubList) {
	let toAppend = [];
	clubList.forEach((club) => {
		let vals =
			width < 500
				? [club.pos, club.sf, club.pl, club.w, club.d, club.l, club.pts]
				: Object.values(club).slice(0, -1);
		let newTr = document.createElement("tr");
		newTr.classList.add("club");
		for (let col of vals) {
			let newTd = document.createElement("td");
			newTd.textContent = col;
			newTr.appendChild(newTd);
			toAppend.push(newTr);
		}
		// tableBody.replaceChildren(toAppend);
		// tableBody.appendChild(newTr);
	});
	tableBody.replaceChildren(...toAppend);
}

// aside
let sideArt = document.querySelectorAll(".side-art");
for (let art of sideArt) {
	art.addEventListener("mouseover", function () {
		art.querySelector("div").classList.toggle("art-hover");
	});
	art.addEventListener("mouseout", function () {
		art.querySelector("div").classList.toggle("art-hover");
	});
}

let width = window.innerWidth;

// on window load
window.addEventListener("load", onLoad());
function onLoad() {
	fetchFile(file);
}

// check for window resize
window.addEventListener("resize", onResize);
function onResize() {
	width = window.innerWidth;
	fetchFile(file);
}

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
	["All", "index"],
];

for (let sport of sports) {
	let a = document.createElement("a");
	a.classList.add("sport");
	a.textContent = sport[0];
	a.setAttribute("href", `/${sport[1]}.html`);
	overlay.appendChild(a);
}
