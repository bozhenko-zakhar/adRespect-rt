import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



export const modalContactOverlay = document.querySelector(".modal-contact");
const modalForm = modalContactOverlay.querySelector(".modal-form");
const modalFormButton = modalForm.querySelector(".modal-form-button");
const modalFormErrors = modalForm.querySelectorAll(".modal-form-error");

const modalActionCrossButton = modalContactOverlay.querySelector(".modal-cross-button");
const footerActionButton = document.querySelector(".footer-action-button");

export function openConnectModal() {
	modalContactOverlay.classList.add("modal-open");
	document.body.classList.add("body-not-scroll");
}

export function closeConnectModal() {
	modalContactOverlay.classList.remove("modal-open");
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