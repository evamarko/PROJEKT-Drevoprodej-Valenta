function openPopup() {
  document.getElementById("myPopup").style.display = "block";
}

function closePopup() {
  document.getElementById("myPopup").style.display = "none";
}

//Zobrazení popupu při načtení stránky
window.onload = function () {
  openPopup();
};
