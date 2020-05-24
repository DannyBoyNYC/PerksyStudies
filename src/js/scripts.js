function addNavClass(e) {
  // console.log("on");
  header.classList.add("header-switch")
}

function removeNavClass() {
  // console.log("off");
  header.classList.remove("header-switch")
}

const header = document.querySelector("header")
header.addEventListener("mouseover", addNavClass)
header.addEventListener("mouseout", removeNavClass)

function showSubNav(e) {
  subnav.style.display = "block"
}

function hideSubNav(e) {
  subnav.style.display = "none"
}

const captivate = document.querySelector(".link-captivate")
const subnav = document.querySelector(".subnav")
captivate.addEventListener("mouseover", showSubNav)
captivate.addEventListener("mouseout", hideSubNav)
