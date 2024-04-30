let mobile_view_menu = document.getElementById("mobile_view_menu");
let dropdown_menu = document.getElementById("dropdown_menu");

mobile_view_menu.addEventListener("click", () => {
  if (dropdown_menu.style.display == "block") {
    dropdown_menu.style.display = "none";
  } else {
    dropdown_menu.style.display = "block";
  }
});
