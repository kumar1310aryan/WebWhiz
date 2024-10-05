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

mousemoveOnDigitize();
function scrambleText(elementId) {
  const element = document.getElementById(elementId);
  const originalText = element.innerText;
  let scrambled = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Only alphabetic characters

  element.addEventListener("mouseover", () => {
    const scramble = setInterval(() => {
      scrambled = "";
      for (let i = 0; i < originalText.length; i++) {
        if (originalText[i].match(/[a-zA-Z]/)) { // Only scramble alphabetic characters
          scrambled += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        } else {
          scrambled += originalText[i]; // Keep non-alphabetic characters the same
        }
      }
      element.innerText = scrambled;
    }, 50);

    setTimeout(() => {
      clearInterval(scramble);
      element.innerText = originalText; // revert to original text
    }, 400); 
  });
}

// Apply the effect to multiple elements
scrambleText("nav-left");
