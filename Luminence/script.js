function homeCursorAnimation() {
  var home = document.getElementById("home");
  var playButton = document.getElementById("play");
  var nav = document.getElementById("nav");

  home.addEventListener("mousemove", function (dets) {
    gsap.to(playButton, {
      x: dets.x - 15,
      y: dets.y - 15,
    });
  });

  home.addEventListener("mouseenter", function () {
    gsap.to(playButton, {
      opacity: 1,
      scale: 1,
    });
  });

  home.addEventListener("mouseleave", function () {
    gsap.to(playButton, {
      opacity: 0,
      scale: 0,
    });
  });

  nav.addEventListener("mouseenter", function () {
    gsap.to(playButton, {
      opacity: 0,
      scale: 0,
    });
  });

  nav.addEventListener("mouseleave", function () {
    gsap.to(playButton, {
      opacity: 1,
      scale: 1,
    });
  });
}
homeCursorAnimation();
