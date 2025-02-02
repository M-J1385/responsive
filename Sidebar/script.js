var menustatus = false;
function openmenu() {
  menustatus = !menustatus;
  if (menustatus == true) {
    document.querySelectorAll(".main-menu ul li a").forEach((item) => {
      document.querySelector(".barlist").prepend(item);
    });
    document.querySelector(".barlist").style.display = "flex";
  } else {
    document.querySelector(".barlist").style.display = "none";
  }
}

function closesidebar() {
  document.querySelectorAll(".sidebar>*").forEach((item) => {
    item.style.opacity = "0";
    item.style.visibility = "hidden";
  });
  document.querySelector(".sidebar").style.width = "0";
  document.querySelector(".sidebar").style.paddingLeft = "0";
  document.querySelector(".sidebar").style.paddingRight = "0";
}

function opensidebar() {
  if (window.innerWidth < 750 && window.innerWidth > 500) {
    document.querySelectorAll(".sidebar>*").forEach((item) => {
      item.style.opacity = "1";
      item.style.visibility = "visible";
    });
    document.querySelector(".sidebar").style.width = "25%";
    document.querySelector(".sidebar").style.padding = "0 30px";
    document.querySelector(".sidebar").style.paddingTop = "40px";
  } else if (window.innerWidth < 500 && window.innerWidth > 350) {
    document.querySelectorAll(".sidebar>*").forEach((item) => {
      item.style.opacity = "1";
      item.style.visibility = "visible";
    });
    document.querySelector(".sidebar").style.width = "40%";
    document.querySelector(".sidebar").style.padding = "0 30px";
    document.querySelector(".sidebar").style.paddingTop = "40px";
  } else if (window.innerWidth < 350) {
    document.querySelectorAll(".sidebar>*").forEach((item) => {
      item.style.opacity = "1";
      item.style.visibility = "visible";
    });
    document.querySelector(".sidebar").style.width = "50%";
    document.querySelector(".sidebar").style.padding = "0 30px";
    document.querySelector(".sidebar").style.paddingTop = "40px";
  } else {
    document.querySelectorAll(".sidebar>*").forEach((item) => {
      item.style.opacity = "1";
      item.style.visibility = "visible";
    });
    document.querySelector(".sidebar").style.width = "15%";
    document.querySelector(".sidebar").style.padding = "0 30px";
    document.querySelector(".sidebar").style.paddingTop = "40px";
  }
}

window.addEventListener("resize", function () {
  if (window.innerWidth < 960) {
    document.querySelector(".barlist").style.width =
      window.innerWidth - 200 + "px";
  }

  if (window.innerWidth < 700) {
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
  if (window.innerWidth < 960) {
    document.querySelector(".barlist").style.width =
      window.innerWidth - 200 + "px";
  }

  if (window.innerWidth < 700) {
    document.querySelector(".barlist").style.width =
      window.innerWidth - 100 + "px";
  }
  if (window.innerWidth < 500) {
    document.querySelector(".barlist").style.width =
      window.innerWidth - 50 + "px";
  }
});
