import { openOfferModal } from "./modal-offer";
import { modalData } from "./data.js"


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
const headerModalNavLink = document.querySelectorAll(".header-modal-nav-link");
const offerModalButtons = document.querySelectorAll(".header-modal-link");
const offerButtons = document.querySelectorAll(".dropdown-link");

headerModalNavLink.forEach(link => {
  link.addEventListener("click", function () {
    burgerMenu.classList.remove("open-my-burger");
    logo.classList.remove("open-my-burger");
    headerModalOverlay.classList.remove("header-modal-open");

    document.body.classList.remove("body-not-scroll");
  })
})

offerButtons.forEach(button => {
  button.addEventListener("click", function () {
    burgerMenu.classList.remove("open-my-burger");
    logo.classList.remove("open-my-burger");
    headerModalOverlay.classList.remove("header-modal-open");
    openOfferModal(modalData[+button.dataset.offer])
  })
});

offerModalButtons.forEach(button => {
  button.addEventListener("click", function () {
    burgerMenu.classList.remove("open-my-burger");
    logo.classList.remove("open-my-burger");
    headerModalOverlay.classList.remove("header-modal-open");

    openOfferModal(modalData[+button.dataset.offer])
  })
});

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("open-my-burger");
  logo.classList.toggle("open-my-burger");
  headerModalOverlay.classList.toggle("header-modal-open");

  document.body.classList.toggle("body-not-scroll");
});