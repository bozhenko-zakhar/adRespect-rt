import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

var gallery = document.querySelector('.projects-gallery');
var msnry;

imagesLoaded(gallery, function() {
  msnry = new Masonry(gallery, {
		itemSelector: '.projects-gallery-item',
		columnWidth: '.projects-gallery-sizer',
		gutter: 42,
		horizontalOrder: true,
	})
});

const searchIcon = document.querySelector(".search-icon");
const searchCross = document.querySelector(".search-cross");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", function () {
	searchIcon.classList.toggle("disappear");
	searchCross.classList.toggle("disappear");
	searchInput.classList.toggle("disappear");
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
    background: "/hero-background-0.jpg",
  },
  {
    title: "Tworzymy przestrzenie pełne <span class='hero-heading-cutted'>Zieleni</span>",
    description:
      "Projektujemy ogrody, tarasy i strefy relaksu, które łączą nowoczesny design z funkcjonalnością. Dbamy o każdy detal – od koncepcji aż po realizację.",
    background: "/hero-background-1.jpg",
  },
  {
    title: "Ogród, który jest stworzony dla <span class='hero-heading-cutted'>Ciebie</span>",
    description:
      "Każdy projekt powstaje z myślą o komforcie i stylu życia naszych klientów. Tworzymy miejsca, które zachwycają estetyką przez cały rok.",
    background: "/hero-background-2.jpg",
  },
];

function showSlide(slide) {
	heroHeading.innerHTML = `${slide.title}`;
	heroInfo.textContent = slide.description;
	heroImage.style.backgroundImage = `url(${slide.background}`;
}

buttonPrevious.addEventListener("click", function () {
	currentSlide--;

	if (currentSlide < 0)
		currentSlide = slides.length - 1;

	showSlide(slides[currentSlide])
})

buttonNext.addEventListener("click", function () {
	currentSlide++;

	if (currentSlide >= slides.length)
		currentSlide = 0;

	showSlide(slides[currentSlide])
});

const images = [
  { filename: "architectural-courtyard.jpg", alt: "Modern landscaped courtyard", size: "large" },
  { filename: "bamboo-garden-architecture.jpg", alt: "Bamboo garden with contemporary landscaping", size: "small" },
  { filename: "contemporary-pergola.jpg", alt: "Contemporary wooden pergola", size: "medium" },
  { filename: "flower-arch-garden.jpg", alt: "Garden pathway beneath a flowering arch", size: "medium" },
  { filename: "indoor-tropical-courtyard.jpg", alt: "Indoor tropical courtyard filled with lush greenery", size: "medium" },
  { filename: "koi-pond-garden.jpg", alt: "Peaceful koi pond surrounded by garden plants", size: "large" },
  { filename: "luxury villa courtyard.jpg", alt: "Modern villa courtyard with landscaped garden", size: "small" },
  { filename: "luxury-pool-villa.jpg", alt: "Contemporary villa with an outdoor swimming pool", size: "large" },
  { filename: "minimalist-landscape-architecture.jpg", alt: "Minimalist landscape garden design", size: "small" },
  { filename: "modern-botanical-garden.jpg", alt: "Modern botanical garden with diverse plants", size: "large" },
  { filename: "modern-patio-tropical.jpg", alt: "Tropical patio with modern outdoor design", size: "small" },
  { filename: "reflection-pool-architecture.jpg", alt: "Reflecting pool beside contemporary architecture", size: "medium" },
  { filename: "tropical-landscaping.jpg", alt: "Lush tropical garden landscaping", size: "medium" },
  { filename: "tropical-modern-garden.jpg", alt: "Modern tropical garden with natural greenery", size: "medium" },
  { filename: "tropical-pathway.jpg", alt: "Stone pathway through a tropical garden", size: "large" },
  { filename: "wooden-deck-garden.jpg", alt: "Wooden deck overlooking a landscaped garden", size: "small" },
  { filename: "wooden-pergola-architecture.jpg", alt: "Modern wooden pergola in a landscaped garden", size: "large" },
  { filename: "zen-water-garden.jpg", alt: "Zen garden with a peaceful water feature", size: "small" },
];

const projectsGallery = document.querySelector(".projects-gallery");
const projectsGradientButton = document.querySelector(".projects-gradient-button");

function generateGalleryItems(items) {
	return items.map(image => `
		<li class="projects-gallery-item projects-gallery-item-${image.size}">
			<img
				class="projects-gallery-image"
				src="/gallery/${image.filename}"
				alt="${image.alt}"
			>
		</li>
	`).join("");
}

projectsGradientButton.addEventListener("click", function () {
	if (images.length) {
		projectsGallery.insertAdjacentHTML("beforeend", generateGalleryItems(images.splice(-9)));

		imagesLoaded(projectsGallery, () => {
			msnry.reloadItems();
			msnry.layout();
		});

		if (!images.length) {
			projectsGradientButton.remove();
			projectsGallery.classList.remove("gradient");
		}
	}
});

const modalData = [
	{
		image: "/projects.jpg",
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
		image: "/landscape-designer.jpg",
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
		image: "/modern-garden.jpg",
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
}

function closeModal() {
	modalOverlay.classList.remove("modal-open");
}

modalCrossButton.addEventListener("click", closeModal);

offerItemButtons.forEach(button => {
	button.addEventListener("click", function () {
		openModal(modalData[+button.dataset.number]);
	});
});