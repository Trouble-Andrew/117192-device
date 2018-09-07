var link = document.querySelector(".contacts__btn");
var popup = document.querySelector(".modal__write-us");
var overlay = document.querySelector(".overlay");
var mapLink = document.querySelector(".map-link");
var map = document.querySelector(".modal__map");
var popupClose = document.querySelector(".btn--close");
var modalForm = popup.querySelector(".modal-form");
var fieldName = popup.querySelector("#contact-name");
var fieldEmail = popup.querySelector("#contact-email");
var fieldText = popup.querySelector("#input-text");
var storageName = localStorage.getItem("fieldName");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem(fieldName);
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show");
  if (storageName) {
    fieldName.value = storageName;
    fieldEmail.focus();
  } else {
    fieldName.focus();
  }
});

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
  overlay.classList.add("modal-show");
  fieldName.focus();
});

popupClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
  map.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("modal-show");
    }
  }
});

modalForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!fieldName.value || !fieldEmail.value || !fieldText.value) {
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("fieldName", fieldName.value);
    }
  }
});