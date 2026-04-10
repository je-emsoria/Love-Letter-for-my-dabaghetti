onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

document.querySelector(".enter-btn").addEventListener("click", () => {
  document.querySelector(".enter-btn").style.opacity = "0";
  document.querySelector(".enter-btn").style.pointerEvents = "none";
});
