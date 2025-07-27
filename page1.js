"strict";
const background = document.querySelector(".hero1");
const playNow = document.querySelector(".play");
const hero = document.querySelector(".hero1");

background.style.transition = ".8s all";
playNow.addEventListener("mouseenter", function () {
  background.style.backgroundSize = "170%";
  background.style.backgroundPosition = "center";
  hero.style.back = 'dissolve';
  playNow.addEventListener("mouseleave", function () {
    background.style.backgroundSize = "100%";
  });
});
