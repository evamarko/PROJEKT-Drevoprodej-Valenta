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

$(window).ready(function () {
  var windowWidth = $(window).width();
  if (windowWidth > 540) {
    $(".menu__item--hover").mouseenter(function () {
      $(".menu__dropdown").css("display", "block");
    });
    $(".menu__dropdown").mouseenter(function () {
      $(".menu__dropdown").css("display", "block");
    });
    $(".menu__item--hover").mouseleave(function () {
      $(".menu__dropdown").css("display", "none");
    });
    $(".menu__dropdown").mouseleave(function () {
      $(".menu__dropdown").css("display", "none");
    });
  }
});
