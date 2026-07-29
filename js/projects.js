function getGalleryHeights() {
	if (window.innerWidth >= 1440) {
		return 1475
	}

	if (window.innerWidth >= 768) {
		return 2580
	}

	return 4509
}

function updateWrapperHeight() {
	const galleryHeights = getGalleryHeights();

	wrapper.style.height = `${(galleryHeights * expandCounter) + (42 * expandCounter)}px`;
}

const wrapper = document.querySelector(".projects-gallery-wrapper");
const projectsGradientButton = document.querySelector(".projects-gradient-button");
let expandCounter = 1;

projectsGradientButton.addEventListener("click", () => {
	expandCounter++;

	const galleryHeights = getGalleryHeights();

	wrapper.style.height = `${(galleryHeights * expandCounter) + (42 * expandCounter)}px`;

	if (expandCounter == 3) {
		projectsGradientButton.remove();
		wrapper.classList.remove("gradient");
		return;
	}
});

updateWrapperHeight();

window.addEventListener("resize", updateWrapperHeight);