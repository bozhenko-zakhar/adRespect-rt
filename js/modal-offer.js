import { openConnectModal } from "./modal-contact.js"
import { modalData } from "./data.js"

function preloadModalImages() {
	modalData.forEach(service => {
		const img = new Image();

		img.src = service.image + ".webp";
		img.srcset = `${service.image}.webp 1x, ${service.image}@2x.webp 2x`;
	});
}

preloadModalImages();


export const modalOfferOverlay = document.querySelector(".modal-offer");
const modalOfferContainer = modalOfferOverlay.querySelector(".modal-container");
const modalOfferCrossButton = modalOfferContainer.querySelector(".modal-cross-button");
const modalOfferContactButton = modalOfferContainer.querySelector(".modal-contact-button");

const modalOfferImage = modalOfferContainer.querySelector(".modal-image");
const modalOfferTitle = modalOfferContainer.querySelector(".modal-title");
const modalOfferSubtitle = modalOfferContainer.querySelector(".modal-subtitle");
const modalOfferDescription = modalOfferContainer.querySelector(".modal-description");
const modalOfferFeaturesTitle = modalOfferContainer.querySelector(".modal-features-title");
const modalOfferList = modalOfferContainer.querySelector(".modal-list");
const offerItems = document.querySelectorAll(".offer-item");


export async function openOfferModal(service) {
	// Image handling ↓
	modalOfferImage.classList.toggle("opacity-0");
//--|--
		modalOfferImage.srcset = `${service.image}.webp 1x, ${service.image}@2x.webp 2x`;
		modalOfferImage.src = service.image + ".webp";
		modalOfferImage.alt = "Image that represents " + service.title.toLowerCase();

		await modalOfferImage.decode();
//--|--
	modalOfferImage.classList.toggle("opacity-0");
	// Image handled ↑

	modalOfferTitle.textContent = service.title;
	modalOfferSubtitle.textContent = service.subtitle;
	modalOfferDescription.textContent = service.description;
	modalOfferFeaturesTitle.textContent = service.featuresTitle;
	modalOfferList.innerHTML = generateFeatures(service.features);

	modalOfferOverlay.classList.add("modal-open");
	document.body.classList.add("body-not-scroll")
}

export function closeModal() {
	modalOfferOverlay.classList.remove("modal-open");
	document.body.classList.remove("body-not-scroll");
}

function generateFeatures(features) {
	return (
		features.map(feature =>
			`<li class="modal-item border border-green rounded-[200px] bg-transparent px-4 w-full font-inter font-normal text-sm leading-normal tracking-[-0.01em] text-green desktop:w-fit desktop:base">${feature}</li>`).join("")
	)
}

modalOfferCrossButton.addEventListener("click", closeModal);
modalOfferContactButton.addEventListener("click", () => {
	closeModal();
	openConnectModal();
})

offerItems.forEach(item => {
	item.addEventListener("click", function () {
		openOfferModal(modalData[+item.dataset.number]);
	});
});