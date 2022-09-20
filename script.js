const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

//toggle nav

toggle.addEventListener("click", function () {
  document.body.classList.toggle("show-nav");
});

//SHOW MODAL

open.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

//hide modal

close.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

//hide modal on outside click

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("show-modal");
  } else {
    false;
  }
});
