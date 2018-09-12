var link = document.querySelector(".contacts__btn");
var popup = document.querySelector(".modal--write-us");
var overlay = document.querySelector(".overlay");
var mapLink = document.querySelector(".map-link");
var map = document.querySelector(".modal--map");
var popupClose = document.querySelector(".btn--close");
var mapClose = document.querySelector(".btn-map");
var modalForm = popup.querySelector(".modal-form");
var fieldName = popup.querySelector("#contact-name");
var fieldEmail = popup.querySelector("#contact-email");
var fieldText = popup.querySelector("#input-text");
var storageName = localStorage.getItem("fieldName");
var storageEmail = localStorage.getItem("fieldEmail");
var isStorageSupport = true;
var storage = "";

// Slider Services

var slideServicesIndex = 1;
showServicesSlides(slideServicesIndex);

function plusServicesSlides(n) {
  showServicesSlides(slideServicesIndex += n);
}

function currentServicesSlide(n) {
  showServicesSlides(slideServicesIndex = n);
}

function showServicesSlides(n) {
  var i;
  var slidesServices = document.getElementsByClassName("slider-services__slide");
  var conrtolServices = document.getElementsByClassName("slider-services__btn");
  for (i = 0; i < slidesServices.length; i++) {
    slidesServices[i].classList.remove("slider-services__slide--active");
  }
  for (i = 0; i < conrtolServices.length; i++) {
    conrtolServices[i].className = conrtolServices[i].className.replace(" slider-services__btn--active", "");
  }
  slidesServices[slideServicesIndex - 1].classList.add("slider-services__slide--active");
  conrtolServices[slideServicesIndex - 1].className += " slider-services__btn--active";
}

// Slider main

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__slide");
  var dots = document.getElementsByClassName("slider__radio");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slider__slide--active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slider__radio--active", "");
  }
  slides[slideIndex - 1].classList.add("slider__slide--active");
  dots[slideIndex - 1].className += " slider__radio--active";
}

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
  } else if (storageName && storageEmail) {
    fieldName.value = storageName;
    fieldEmail.value = storageEmail;
    fieldText.focus();
  } else {
    fieldName.focus();
  }
});

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.add("modal-show");
  overlay.classList.add("modal-show");
});

popupClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("modal-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  map.classList.remove("modal-show");
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
    } else if (map.classList.contains("modal-show")) {
      evt.preventDefault();
      map.classList.remove("modal-show");
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