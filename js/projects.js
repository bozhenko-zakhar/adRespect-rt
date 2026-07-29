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

	wrapper.style.height = `${galleryHeights * expandCounter}px`;
}

const wrapper = document.querySelector(".projects-gallery-wrapper");
const projectsGradientButton = document.querySelector(".projects-gradient-button");
var expandCounter = 1;

projectsGradientButton.addEventListener("click", () => {
	expandCounter++;

	const galleryHeights = getGalleryHeights();

	wrapper.style.height = `${(galleryHeights * expandCounter) + (42 * (expandCounter - 1))}px`;

	if (expandCounter == 3) {
		projectsGradientButton.remove();
		wrapper.classList.remove("gradient");
		return;
	}
});

updateWrapperHeight();

window.addEventListener("resize", updateWrapperHeight);