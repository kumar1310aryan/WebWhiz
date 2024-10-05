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
// mousemoveOnDigitize();

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
