//show menu bar
document.getElementById("toggleMenu").onclick = () => {
  let menuBar_link = document.getElementById("menubar-link");
  menuBar_link.style.width = "60vw";
  menuBar_link.style.transition = `0.5s ease-in-out`;
};

document.getElementById("carousel").onclick = () => {
  let menuBar_link = document.getElementById("menubar-link");
  menuBar_link.style.width = "0";
  menuBar_link.style.transition = `0.5s ease-in-out`;
};

//scroll to top
document.getElementById("scrollToTop").onclick = () =>
  window.scrollTo({
    top: 200,
    behavior: "smooth",
  });
window.onscroll = () => {
  window.pageYOffset > 100
    ? document.getElementById("scrollToTop").classList.add("scroll-visible")
    : document.getElementById("scrollToTop").classList.remove("scroll-visible");
};
