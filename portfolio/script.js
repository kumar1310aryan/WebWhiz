function loadingAnimation() {
  var tl = gsap.timeline();

  var tldot = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  tldot
    .fromTo(
      "#dot",
      { opacity: 0 },
      { opacity: 1, stagger: 0.2, duration: 0.5, delay: 0.5 }
    )
    .to("#dot", { opacity: 0, stagger: 0.2, duration: 0.5 });

  tl.from(".a", {
    opacity: 0,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5,
    onComplete: function () {
      var percentage = document.querySelector(".percentage");
      var green = document.querySelector(".green");
      var i = 0;
      var interval = setInterval(function () {
        if (i < 100) {
          i++;
          green.style.width = i + "%";
          percentage.innerHTML = `${i}%`;
        } else {
          clearInterval(interval);
          percentage.innerHTML = "100%";
          green.style.width = "100%";
        }
      }, 40);
    },
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 4,
    onComplete: function () {
      document.getElementById("loader").style.display = "none";
      document.getElementById("main").style.display = "block";
    },
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1200,
    opacity: 0,
    duration: 0.5,
    ease: "power4.out",
  });

  tl.to("#loader", {
    display: "none",
  });
}
function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      left: dets.x,
      top: dets.y,
    });
  });
}

loadingAnimation();
cursorAnimation();
