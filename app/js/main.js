// Get elements from the DOM
const menuButton = document.querySelector("#menu-btn");
const menuButtonIcon = document.querySelector("#menu-btn img");
const mobileMenu = document.querySelector(".mobile-menu");
const subMenuButtons = document.querySelectorAll(".open-sub-menu-btn");
const subMenus = document.querySelectorAll(".sub-menu");
const menuButtonArrows = document.querySelectorAll(".arrow-img img");

// Boolean that indicates the menu is closed
let menuOpen = false;

// Open the menu when button is clicked
menuButton.addEventListener("click", () => {
	menuOpen = !menuOpen;
	menuButtonIcon.setAttribute("src", "./images/icon-close.svg");
	mobileMenu.classList.remove("fade-out");
	mobileMenu.classList.add("fade-in");

	if (!menuOpen) {
		// if menuOpen === false
		menuButtonIcon.setAttribute("src", "./images/icon-hamburger.svg");
		mobileMenu.classList.remove("fade-in");
		mobileMenu.classList.add("fade-out");
	}
});

// Selects all the menu buttons
subMenuButtons.forEach((button) => {
	button.addEventListener("click", (e) => {
		let element = e.target.id; // The id of the button getting clicked
		let classArray;
		let arr;

		// Selects all the sub menus
		subMenus.forEach((menu) => {
			classArray = menu.classList; // An array of all the classes the element has

			if (classArray.contains(element)) {
				arr = [...classArray];
				classArray.toggle("hide");
				classArray.add("slide-in");
			} else {
				classArray.remove("slide-in");
				classArray.add("hide");
			}
		});

		menuButtonArrows.forEach((arrow) => {
			if (arrow.classList[0] === element && arr.includes("hide")) {
				arrow.classList.remove("rotate-down");
				arrow.classList.add("rotate-up");
				console.log(arr);
			} else {
				arrow.classList.remove("rotate-up");
				arrow.classList.add("rotate-down");
			}
		});
	});
});
