function coll() {
  let button = document.getElementById("button");
  let content = document.getElementById("moreServices");

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
  button.classList.toggle("active");
}
