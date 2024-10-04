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
