var mainContent = document.querySelector("#main-content");

var cursor = document.querySelector("#cursor");

mainContent.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x - 700,
    y: dets.y,
  });
});

mainContent.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    opacity: 1,
    scale: 1,
  });
});

mainContent.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    opacity: 0,
    scale: 0,
  });
});
