function navScroll() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    document.getElementById("nav").classList.remove("hide");
  } else {
    document.getElementById("nav").classList.add("hide");
  }
};

window.onscroll = function() {
  navScroll();
};
