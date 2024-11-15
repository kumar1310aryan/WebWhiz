function brandingDesignHoverEffect() {
  const branding = document.getElementById("branding");
  const design = document.getElementById("design");
  const brandingh1 = document.querySelector("#branding h1");

  design.addEventListener("mouseenter", () => {
    branding.style.backgroundColor = "rgb(229, 223, 223)";
    brandingh1.style.color = "rgb(0, 0, 0)";
  });

  design.addEventListener("mouseleave", () => {
    branding.style.backgroundColor = "rgba(255, 0, 0, 0.904)";
    brandingh1.style.color = "rgb(255, 255, 255)";
  });
}
brandingDesignHoverEffect();
