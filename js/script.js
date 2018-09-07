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
var slideMain1 = document.querySelector(".slider__slide:nth-child(1)");
var slideMain2 = document.querySelector(".slider__slide:nth-child(2)");
var slideMain3 = document.querySelector(".slider__slide:nth-child(3)");
var slideMainButton = document.querySelector(".slider__radio");
var slideMainButton1 = document.querySelector("button[name='slide-1']");
var slideMainButton2 = document.querySelector("button[name='slide-2']");
var slideMainButton3 = document.querySelector("button[name='slide-3']");


// function sliderMain(num) {
//   slideMainButton(num).addEventListener("click", function(evt) {
//     evt.preventDefault();
//     slideMain(x).classList.add("slider__slide--active");
//   });
// }
//
// sliderMain(3);

slideMainButton3.addEventListener("click", function(evt) {
  evt.preventDefault();
  slideMainButton.classList.remove("slider__radio--active");
  slideMain1.classList.remove("slider__slide--active");
  slideMain2.classList.remove("slider__slide--active");
  slideMain3.classList.add("slider__slide--active");
  slideMainButton.classList.add("slider__radio--active");
});
slideMainButton2.addEventListener("click", function(evt) {
  evt.preventDefault();
  slideMain1.classList.remove("slider__slide--active");
  slideMain2.classList.add("slider__slide--active");
  slideMain3.classList.remove("slider__slide--active");
});
slideMainButton1.addEventListener("click", function(evt) {
  evt.preventDefault();
  slideMain1.classList.add("slider__slide--active");
  slideMain2.classList.remove("slider__slide--active");
  slideMain3.classList.remove("slider__slide--active");
});


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
    if (!fieldName.value) {
      fieldName.classList.add("modal-form__field--invalid");
    } else {
      fieldName.classList.remove("modal-form__field--invalid");
    }
    if (!fieldEmail.value) {
      fieldEmail.classList.add("modal-form__field--invalid");
    } else {
      fieldEmail.classList.remove("modal-form__field--invalid");
    }
    if (!fieldText.value) {
      fieldText.classList.add("modal-form__field--invalid");
    } else {
      fieldText.classList.remove("modal-form__field--invalid");
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem("fieldName", fieldName.value);
    }
  }
});