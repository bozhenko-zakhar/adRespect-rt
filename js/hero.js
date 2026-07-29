import { slides } from "./data.js"

const heroSection = document.querySelector("#hero");
const heroHeading = document.querySelector(".hero-heading");
const heroInfo = document.querySelector(".hero-info");
const heroImage = document.querySelector(".hero-image");
const [buttonPrevious, buttonNext] = document.querySelectorAll(".hero-image-button");
let currentSlide = 0;

const delay = (ms) => {
	return new Promise((resolve) => {
		return setTimeout(resolve, ms)
	});
}

async function showSlide(direction) {
	heroSection.classList.add("is-changing");
	await delay(350);

	currentSlide = direction === "previous" ? currentSlide - 1 : currentSlide + 1;

	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
		heroImage.classList.remove("image-0");
	} else if (currentSlide >= slides.length) {
		currentSlide = 0;
		heroImage.classList.remove("image-2");
	} else {
		heroImage.classList.remove(`image-${direction === "previous" ? (currentSlide + 1) : (currentSlide - 1)}`);
	}

	heroHeading.innerHTML = slides[currentSlide].title;
	heroInfo.textContent = slides[currentSlide].description;
	heroImage.classList.add(`image-${currentSlide}`);

	heroSection.classList.remove("is-changing");
	await delay(350);
}

buttonPrevious.addEventListener("click", async function () {
	buttonPrevious.disabled = true;

	await showSlide("previous");

	buttonPrevious.disabled = false;
})

buttonNext.addEventListener("click", async function () {
	buttonNext.disabled = true;

	await showSlide("next");

	buttonNext.disabled = false;
});