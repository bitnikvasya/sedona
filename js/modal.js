var link = document.querySelector(".hotel-search__button");
var popup = document.querySelector(".search");
link.addEventListener("click", function (a) {
  a.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show")
    }
    else popup.classList.add("modal-show")
});