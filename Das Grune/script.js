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
  tl.from("#page2", {
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
loadingAnimation();

function mousemoveOnDigitize() {
  const h1Elements = document.querySelectorAll(".digitizeh1");
  const image = document.querySelector(".image");

  h1Elements.forEach((h1) => {
    h1.addEventListener("mouseenter", () => {
      image.style.display = "block"; // Show the image
      gsap.to(".image", {
        opacity: 1,
      });
    });

    h1.addEventListener("mousemove", (e) => {
      image.style.left = e.pageX - 50 + "px"; // Adjust based on image width
      image.style.top = e.pageY - 50 + "px"; // Adjust based on image height
    });

    h1.addEventListener("mouseleave", () => {
      gsap.to(".image", {
        opacity: 0,
      });
      display: none;
    });
  });
}

function play() {
  const playCircle = document.getElementById("play-circle");
  const playImage = document.getElementById("play-image");
  let isPlaying = false;

  playCircle.addEventListener("click", function () {
    if (isPlaying) {
      playCircle.style.transform = "translateX(0)";
      playImage.src = "./images/play.svg";
    } else {
      const playContainerWidth = document.getElementById("play").offsetWidth;
      const playCircleWidth = playCircle.offsetWidth;
      const moveDistance = playContainerWidth - playCircleWidth - 12;
      playCircle.style.transform = `translateX(${moveDistance}vw )`;
      playImage.src = "./images/pause.svg";
    }
    isPlaying = !isPlaying;
  });
}
// play();

function playFinal() {
  const play = document.getElementById("play");
  const playCircle = document.getElementById("play-circle");
  const playImage = document.getElementById("play-image");
  let isPlaying = false;

  playCircle.addEventListener("click", function () {
    if (isPlaying) {
      
      play.classList.remove("playing"); 
      playImage.src = "./images/play.svg";
    } else {
      
      play.classList.add("playing"); 
      playImage.src = "./images/pause.svg";
    }
    isPlaying = !isPlaying;
  });
}
playFinal();

function scrambleText(elementId) {
  const element = document.getElementById(elementId);
  const originalText = element.innerText;
  let scrambled = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";

  element.addEventListener("mouseover", () => {
    const scramble = setInterval(() => {
      scrambled = "";
      for (let i = 0; i < originalText.length; i++) {
        if (originalText[i].match(/[a-zA-Z]/)) {
          scrambled += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        } else {
          scrambled += originalText[i];
        }
      }
      element.innerText = scrambled;
    }, 50);

    setTimeout(() => {
      clearInterval(scramble);
      element.innerText = originalText;
    }, 400);
  });
}
scrambleText("nav-left");

function designHover() {
  const designDivs = document.querySelectorAll(".design-div");
  const hoverReveals = document.querySelectorAll(".hover-reveal");
  const hiddenImages = document.querySelectorAll(".hidden-img");

  for (let i = 0; i < designDivs.length; i++) {
    // Mouse move event to reveal the image
    designDivs[i].addEventListener("mousemove", (e) => {
      hoverReveals[i].style.opacity = 1;
      hoverReveals[i].style.transform = `translate(-100%, -50%) rotate(5deg)`;
      hiddenImages[i].style.transform = "scale(1, 1)";
      hoverReveals[i].style.left = e.clientX + "px";
    });

    // Mouse leave event to hide the image
    designDivs[i].addEventListener("mouseleave", (e) => {
      hoverReveals[i].style.opacity = 0;
      hoverReveals[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
      hiddenImages[i].style.transform = "scale(0.8, 0.8)";
    });
  }
}
designHover();

function imageHover() {
  const imageDiv = document.getElementById("image");
  const arrowDiv = document.getElementById("arrow");

  imageDiv.addEventListener("mousemove", (event) => {
    const rect = imageDiv.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Update the arrow div's position to follow the mouse
    arrowDiv.style.left = `${x - arrowDiv.offsetWidth / 2}px`;
    arrowDiv.style.top = `${y - arrowDiv.offsetHeight / 2}px`;
  });

  imageDiv.addEventListener("mouseleave", () => {
    arrowDiv.style.left = "80%";
    arrowDiv.style.top = "0%";
  });
}
imageHover();

const tl = gsap.timeline();

tl.fromTo(
  ".digitizeh1",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1.5,
    stagger: 0.5,
    ease: "power3.out",
    delay: 0.3,
  }
);
