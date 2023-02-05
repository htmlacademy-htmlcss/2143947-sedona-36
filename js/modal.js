const searchHotel = document.querySelectorAll(".search-hotel");
const searchHotelModal = document.querySelector(".modal-container");
const modalClose = searchHotelModal.querySelector(".modal-close-button");

for (var i = 0; i < searchHotel.length; i++) {

searchHotel[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  searchHotelModal.classList.add("modal-show");
});

}

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchHotelModal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchHotelModal.classList.contains("modal-show")) {
      evt.preventDefault();
      searchHotelModal.classList.remove("modal-show");
    }
  }
});
