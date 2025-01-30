function openmenu() {}

window.addEventListener("resize", function () {
  document.querySelector(".barlist").style.width =
    window.innerWidth - 200 + "px";
  if (this.window.innerWidth < 700) {
    document.querySelector(".barlist").style.width =
      window.innerWidth - 100 + "px";
  }
  if (window.innerWidth < 500) {
    document.querySelector(".barlist").style.width =
      window.innerWidth - 50 + "px";
  }
});


document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 320) {
    document.querySelector("#search").remove();
    document.querySelector(".search i").style.position = "unset";
  }
});
