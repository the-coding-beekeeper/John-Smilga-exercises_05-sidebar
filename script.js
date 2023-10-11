menuEl = document.querySelector(".pop-up");
menuBtnEl = document.querySelector("#menu");
deleteEl = document.getElementById("delete");

document.addEventListener("click", (e) => {
if (e.target == menuBtnEl || e.target == deleteEl) {
  menuEl.classList.toggle("pop-up-active");
}
});


