var link = document.querySelector(".contacts__btn");
var popup = document.querySelector(".modal__write-us");
var overlay = document.querySelector(".overlay");
var popupClose = document.querySelector(".btn--close");
var fieldName = popup.querySelector("#contact-name");
var modalForm = popup.querySelector(".modal-form");
var fieldEmail = popup.querySelector("#contact-email");
var fieldText = popup.querySelector("#input-text");


link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-show");
  fieldName.focus();
});

popupClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
});

modalForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
  console.log(fieldName.value);
  console.log(fieldEmail.value);
});