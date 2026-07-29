import "../js/haeder.js";
import "../js/hero.js";
import "../js/projects.js";
import "../js/modal-offer.js";
import "../js/modal-contact.js";

import "../css/animations.css"

import { modalOfferOverlay, closeModal } from "../js/modal-offer.js";
import { modalContactOverlay, closeConnectModal } from "../js/modal-contact.js";

import imagesLoaded from "imagesloaded";
import Masonry from "masonry-layout";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

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

modalOfferOverlay.addEventListener("click", handleBackdropClick)
modalContactOverlay.addEventListener("click", handleBackdropClick)
document.addEventListener("keydown", handleKeyDown);