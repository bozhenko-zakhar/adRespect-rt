import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";

import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import "./animations.css"

const gallery = document.querySelector('.projects-gallery');
const lightbox = GLightbox({
	selector: ".glightbox",
});
let msnry;

imagesLoaded(gallery, function () {
	msnry = new Masonry(gallery, {
		itemSelector: '.projects-gallery-item',
		columnWidth: '.projects-gallery-sizer',
		gutter: 42,
		horizontalOrder: true,
	});
});

const animatedElements = document.querySelectorAll(".animation-appearing");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach(entry => {
			if (!entry.isIntersecting) return;

			entry.target.classList.add("is-visible");

			observer.unobserve(entry.target);
		});
	},
	{
		threshold: 0.5,
		rootMargin: "0px",
	}
);

animatedElements.forEach(element => {
	observer.observe(element);
});











const searchForm = document.querySelector(".search-form");
const searchIcon = document.querySelector(".search-icon");
const searchCross = document.querySelector(".search-cross");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", function () {
	searchForm.classList.toggle("search-open")
	searchButton.classList.toggle("search-open")
	searchIcon.classList.toggle("search-open");
	searchCross.classList.toggle("search-open");
	searchInput.classList.toggle("search-open");
});

const burgerMenu = document.querySelector(".burger-menu");
const headerModalOverlay = document.querySelector(".header-modal-overlay");
const logo = document.querySelector(".header-nav-logo");

burgerMenu.addEventListener("click", function () {
	burgerMenu.classList.toggle("open-my-burger");
	logo.classList.toggle("open-my-burger");
	headerModalOverlay.classList.toggle("header-modal-open");

	document.body.classList.toggle("body-not-scroll");
});










const slides = [
	{
		title: "Nowoczesna aranżacja <span>Twojego ogrodu</span>",
		description:
			"Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.",
	},
	{
		title: "Aranżujemy zielone <span>Mikrośrodowiska</span>",
		description:
			"Projektujemy nowoczesne ogrody, komfortowe tarasy i unikalne strefy relaksu, łączące styl z funkcjonalnością. Dbamy o detal – od koncepcji po realizację.",
	},
	{
		title: "Estetyczna przestrzeń dla <span>Ciebie</span>",
		description:
			"Projektujemy nowoczesne ogrody, komfortowe tarasy i unikalne strefy relaksu, łączące styl z funkcjonalnością. Dbamy o każdy detal – od koncepcji po realizację.",
	},
];

const heroHeading = document.querySelector(".hero-heading")
const heroInfo = document.querySelector(".hero-info")
const heroImage = document.querySelector(".hero-image")
const buttonPrevious = document.querySelectorAll(".hero-image-button")[0]
const buttonNext = document.querySelectorAll(".hero-image-button")[1]

let currentSlide = 0;

function showSlide(slide) {
	heroHeading.innerHTML = `${slide.title}`;
	heroInfo.textContent = slide.description;
	heroImage.classList.add(`image-${currentSlide}`);
}

buttonPrevious.addEventListener("click", function () {
	currentSlide--;

	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
		heroImage.classList.remove("image-0");
	} else {
		heroImage.classList.remove(`image-${currentSlide + 1}`);
	}

	showSlide(slides[currentSlide])
})

buttonNext.addEventListener("click", function () {
	currentSlide++;

	if (currentSlide >= slides.length) {
		currentSlide = 0;
		heroImage.classList.remove("image-2");
	} else {
		heroImage.classList.remove(`image-${currentSlide - 1}`);
	}

	showSlide(slides[currentSlide])
});









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











const modalData = [
	{
		image: "/projects",
		title: "Projekty",
		subtitle: "Projektujemy ogrody dopasowane do Twojego stylu życia",
		description: "Tworzymy indywidualne projekty ogrodów, tarasów oraz stref wypoczynkowych. Każda koncepcja powstaje z uwzględnieniem ukształtowania terenu, istniejącej roślinności oraz oczekiwań klienta.",
		featuresTitle: "Zakres usługi",
		features: [
			"Indywidualna konsultacja",
			"Projekt koncepcyjny",
			"Dobór roślin i materiałów",
			"Plan oświetlenia i nawodnienia",
			"Dokumentacja wykonawcza"
		]
	},
	{
		image: "/landscape-designer",
		title: "Wizualizacje",
		subtitle: "Zobacz swój ogród, zanim powstanie",
		description: "Przygotowujemy realistyczne wizualizacje 3D, które pozwalają zobaczyć przyszły ogród z różnych perspektyw oraz wirtualnie przejść przez projekt jeszcze przed rozpoczęciem realizacji.",
		featuresTitle: "Otrzymujesz",
		features: [
			"Wizualizacje 3D wysokiej jakości",
			"Wirtualny spacer",
			"Możliwość wprowadzania zmian",
			"Kilka wariantów projektu",
			"Realistyczne odwzorowanie materiałów i roślin"
		]
	},
	{
		image: "/modern-garden",
		title: "Realizacje",
		subtitle: "Realizujemy projekty od pierwszego szkicu do ostatniego detalu",
		description: "Dbamy o każdy etap wykonania inwestycji, wykorzystując nowoczesny sprzęt, sprawdzone technologie oraz wysokiej jakości materiały. Dzięki temu gotowy ogród zachwyca wyglądem i funkcjonalnością przez wiele lat.",
		featuresTitle: "Etapy realizacji",
		features: [
			"Przygotowanie terenu",
			"Prace ziemne",
			"Systemy nawadniania",
			"Nasadzenia roślin",
			"Wykończenie i pielęgnacja"
		]
	},
]

const modalOverlay = document.querySelector(".modal-overlay");
const modalContainer = modalOverlay.querySelector(".modal-container");
const modalCrossButton = modalContainer.querySelector(".modal-cross-button");
const modalContactButton = modalContainer.querySelector(".modal-contact-button");

const modalImage = modalContainer.querySelector(".modal-image");
const modalTitle = modalContainer.querySelector(".modal-title");
const modalSubtitle = modalContainer.querySelector(".modal-subtitle");
const modalDescription = modalContainer.querySelector(".modal-description");
const modalFeaturesTitle = modalContainer.querySelector(".modal-features-title");
const modalList = modalContainer.querySelector(".modal-list");

const offerItems = document.querySelectorAll(".offer-item");

function generateFeatures(features) {
	return (
		features.map(feature =>
			`<li class="modal-item border border-green rounded-[200px] bg-transparent px-4 w-full font-inter font-normal text-sm leading-normal tracking-[-0.01em] text-green desktop:w-fit desktop:base">${feature}</li>`).join("")
	)
}

function openModal(service) {
	modalImage.srcset = `${service.image}.webp 1x, ${service.image}@2x.webp 2x`
	modalImage.src = service.image + ".webp";
	modalImage.alt = "Image that represents " + service.title.toLocaleLowerCase();
	modalTitle.textContent = service.title;
	modalSubtitle.textContent = service.subtitle;
	modalDescription.textContent = service.description;
	modalFeaturesTitle.textContent = service.featuresTitle;
	modalList.innerHTML = generateFeatures(service.features);

	modalOverlay.classList.add("modal-open");
	document.body.classList.add("body-not-scroll")
}

function closeModal() {
	modalOverlay.classList.remove("modal-open");
	document.body.classList.remove("body-not-scroll");
}

modalCrossButton.addEventListener("click", closeModal);
modalContactButton.addEventListener("click", () => {
	closeModal();
	openConnectModal();
})

offerItems.forEach(item => {
	item.addEventListener("click", function () {
		openModal(modalData[+item.dataset.number]);
	});
});











const modalFormOverlay = document.querySelector(".modal-form-overlay");
const modalForm = modalFormOverlay.querySelector(".modal-form");
const modalFormButton = modalForm.querySelector(".modal-form-button");
const modalFormErrors = modalForm.querySelectorAll(".modal-form-error");

const modalActionCrossButton = document.querySelector(".modal-form-cross-button");
const footerActionButton = document.querySelector(".footer-action-button");

function openConnectModal() {
	modalFormOverlay.classList.add("modal-open");
	document.body.classList.add("body-not-scroll");
}

function closeConnectModal() {
	modalFormOverlay.classList.remove("modal-open");
	document.body.classList.remove("body-not-scroll");

	modalFormErrors.forEach(errorParagraph => {
		errorParagraph.classList.remove("error-displayed")
	});
}

function handleSubmit(event) {
	event.preventDefault();

	if (modalForm.checkValidity()) {
		iziToast.success({
			message: "Dane już są «wysłane» na serwer",
			position: "topRight"
		});

		modalFormErrors.forEach(errorParagraph => {
			errorParagraph.classList.remove("error-displayed")
		});

		modalForm.reset();

		closeConnectModal();
		return;
	} else {
		iziToast.error({
			message: "Podaj wszystkie dane",
			position: "topRight"
		});

		modalFormErrors.forEach(errorParagraph => {
			errorParagraph.classList.add("error-displayed")
		});
	}
}

footerActionButton.addEventListener("click", openConnectModal);
modalActionCrossButton.addEventListener("click", closeConnectModal);
modalFormButton.addEventListener("click", handleSubmit);













function handleBackdropClick(event) {
	if (event.target === event.currentTarget) {
		closeModal();
		closeConnectModal();

		document.body.classList.remove("body-not-scroll");
	}
}

const handleKeyDown = (event) => {
	if (event.key === "Escape") {
		closeModal();
		closeConnectModal();

		document.body.classList.remove("body-not-scroll");
	}
};

modalOverlay.addEventListener("click", handleBackdropClick)
modalFormOverlay.addEventListener("click", handleBackdropClick)
document.addEventListener("keydown", handleKeyDown);