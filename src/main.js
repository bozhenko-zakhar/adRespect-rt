import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

var gallery = document.querySelector('.projects-gallery');
var msnry;

imagesLoaded(gallery, function() {
  // init Isotope after all images have loaded
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
})