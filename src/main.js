import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

var gallery = document.querySelector('.projects-gallery');
var lightbox = GLightbox({
	selector: ".glightbox",
});;
var msnry;

imagesLoaded(gallery, function () {
	msnry = new Masonry(gallery, {
		itemSelector: '.projects-gallery-item',
		columnWidth: '.projects-gallery-sizer',
		gutter: 42,
		horizontalOrder: true,
	});
});

const searchIcon = document.querySelector(".search-icon");
const searchCross = document.querySelector(".search-cross");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", function () {
	searchButton.classList.toggle("appearing")
	searchIcon.classList.toggle("appearing");
	searchCross.classList.toggle("appearing");
	searchInput.classList.toggle("appearing");
});


const heroHeading = document.querySelector(".hero-heading")
const heroInfo = document.querySelector(".hero-info")
const heroImage = document.querySelector(".hero-image")
const buttonPrevious = document.querySelectorAll(".hero-image-button")[0]
const buttonNext = document.querySelectorAll(".hero-image-button")[1]

let currentSlide = 0;
const slides = [
	{
		title: "Nowoczesna aranżacja <span class='hero-heading-cutted'>Twojego ogrodu</span>",
		description:
			"Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.",
	},
	{
		title: "Tworzymy przestrzenie pełne <span class='hero-heading-cutted'>Zieleni</span>",
		description:
			"Projektujemy nowoczesne ogrody, komfortowe tarasy oraz unikalne strefy relaksu, łączące styl z funkcjonalnością. Dbamy o każdy, najmniejszy detal – od wstępnej koncepcji aż po realizację.",
	},
	{
		title: "Estetyczna przestrzeń dla <span class='hero-heading-cutted'>Ciebie</span>",
		description:
			"Każdy projekt powstaje z myślą o wyjątkowym komforcie i stylu życia naszych klientów. Tworzymy unikalne miejsca, które zachwycają swoją estetyką i funkcjonalnością przez cały rok.",
	},
];

function showSlide(slide) {
	heroHeading.innerHTML = `${slide.title}`;
	heroInfo.textContent = slide.description;

	heroImage.classList.toggle(`image-${currentSlide}`);
}

buttonPrevious.addEventListener("click", function () {
	currentSlide--;

	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
		heroImage.classList.toggle("image-0");
	} else {
		heroImage.classList.toggle(`image-${currentSlide + 1}`);
	}

	showSlide(slides[currentSlide])
})

buttonNext.addEventListener("click", function () {
	currentSlide++;

	if (currentSlide >= slides.length) {
		currentSlide = 0;
		heroImage.classList.toggle("image-2");
	} else {
		heroImage.classList.toggle(`image-${currentSlide - 1}`);
	}

	showSlide(slides[currentSlide])
});

const images = [
	{ imageName: "architectural-courtyard", alt: "Modern landscaped courtyard", size: "large" },
	{ imageName: "bamboo-garden-architecture", alt: "Bamboo garden with contemporary landscaping", size: "small" },
	{ imageName: "contemporary-pergola", alt: "Contemporary wooden pergola", size: "medium" },
	{ imageName: "flower-arch-garden", alt: "Garden pathway beneath a flowering arch", size: "medium" },
	{ imageName: "indoor-tropical-courtyard", alt: "Indoor tropical courtyard filled with lush greenery", size: "medium" },
	{ imageName: "koi-pond-garden", alt: "Peaceful koi pond surrounded by garden plants", size: "large" },
	{ imageName: "luxury villa courtyard", alt: "Modern villa courtyard with landscaped garden", size: "small" },
	{ imageName: "luxury-pool-villa", alt: "Contemporary villa with an outdoor swimming pool", size: "large" },
	{ imageName: "minimalist-landscape-architecture", alt: "Minimalist landscape garden design", size: "small" },
	{ imageName: "modern-botanical-garden", alt: "Modern botanical garden with diverse plants", size: "large" },
	{ imageName: "modern-patio-tropical", alt: "Tropical patio with modern outdoor design", size: "small" },
	{ imageName: "reflection-pool-architecture", alt: "Reflecting pool beside contemporary architecture", size: "medium" },
	{ imageName: "tropical-landscaping", alt: "Lush tropical garden landscaping", size: "medium" },
	{ imageName: "tropical-modern-garden", alt: "Modern tropical garden with natural greenery", size: "medium" },
	{ imageName: "tropical-pathway", alt: "Stone pathway through a tropical garden", size: "large" },
	{ imageName: "wooden-deck-garden", alt: "Wooden deck overlooking a landscaped garden", size: "small" },
	{ imageName: "wooden-pergola-architecture", alt: "Modern wooden pergola in a landscaped garden", size: "large" },
	{ imageName: "zen-water-garden", alt: "Zen garden with a peaceful water feature", size: "small" },
];

const projectsGallery = document.querySelector(".projects-gallery");
const projectsGradientButton = document.querySelector(".projects-gradient-button");

function generateGalleryItems(items) {
	return items.map(image => `
		<li class="projects-gallery-item projects-gallery-item-${image.size}">
			<a 
				class="glightbox" 
				href="/glightbox/${image.imageName}"
				data-gallery="projects"
			>
				<img
					class="projects-gallery-image"
					srcset="/gallery/${image.imageName}.webp 1x, /gallery/${image.imageName}@2x.webp 2x"
					srcset="/gallery/${image.imageName}"
					alt="${image.alt}"
				>
			</a>
		</li>
	`).join("");
}

projectsGradientButton.addEventListener("click", function () {
	if (images.length) {
		projectsGallery.insertAdjacentHTML("beforeend", generateGalleryItems(images.splice(-9)));

		imagesLoaded(projectsGallery, () => {
			msnry.reloadItems();
			msnry.layout();

			lightbox.reload();
		});

		if (!images.length) {
			projectsGradientButton.remove();
			projectsGallery.classList.remove("gradient");
		}
	}
});

const modalData = [
	{
		image: "/projects.webp",
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
		image: "/landscape-designer.webp",
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
		image: "/modern-garden.webp",
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

const offerItemButtons = document.querySelectorAll(".offer-item-button");


function generateFeatures(features) {
	return (
		features.map(feature => `<li class="modal-item">${feature}</li>`).join("")
	)
}

function openModal(service) {
	modalImage.src = service.image;
	modalImage.alt = "Image that represents " + service.title.toLocaleLowerCase();
	modalTitle.textContent = service.title;
	modalSubtitle.textContent = service.subtitle;
	modalDescription.textContent = service.description;
	modalFeaturesTitle.textContent = service.featuresTitle;
	modalList.innerHTML = generateFeatures(service.features);

	modalOverlay.classList.add("modal-open");
	document.body.classList.toggle("not-scroll")
}

function closeModal() {
	modalOverlay.classList.remove("modal-open");
	document.body.classList.toggle("not-scroll");
}

modalCrossButton.addEventListener("click", closeModal);
modalContactButton.addEventListener("click", () => {
	closeModal();
	openContectModal();
})

offerItemButtons.forEach(button => {
	button.addEventListener("click", function () {
		openModal(modalData[+button.dataset.number]);
	});
});

const modalFormOverlay = document.querySelector(".modal-form-overlay");
const footerActionButton = document.querySelector(".footer-action-button");
const modalForm = document.querySelector(".modal-form");
const modalActionCrossButton = document.querySelector(".modal-form-cross-button");
const modalFormButton = document.querySelector(".modal-form-button");
const modalFormErrors = document.querySelectorAll(".modal-form-error");

function openContectModal() {
	modalFormOverlay.classList.add("modal-open");
	document.body.classList.toggle("not-scroll");
}

function closeContectModal() {
	modalFormOverlay.classList.remove("modal-open");
	document.body.classList.toggle("not-scroll");
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

		closeContectModal();
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

footerActionButton.addEventListener("click", openContectModal);
modalActionCrossButton.addEventListener("click", closeContectModal);
modalFormButton.addEventListener("click", (event) => handleSubmit(event));

const headerNavList = document.querySelector(".header-nav-list");
const burgerMenu = document.querySelector(".burger-menu");
const headerModalOverlay = document.querySelector(".header-modal-overlay");
const logo = document.querySelector(".logo");

burgerMenu.addEventListener("click", function () {
	burgerMenu.classList.toggle("open-burger");
	logo.classList.toggle("open-burger");
	headerModalOverlay.classList.toggle("active");

	document.body.classList.toggle("not-scroll");
})