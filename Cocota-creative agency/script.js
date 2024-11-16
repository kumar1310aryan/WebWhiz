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

function awardsHoverAnimation() {
  const awwardsDiv = document.getElementById("awards");
  const trailContainer = document.getElementById("trail-container");

  const images = [
    "https://cocotastudio.com/wp-content/uploads/2024/06/cocota-brand_design-web_design-ADG_Laus.png.webp",
    "https://cocotastudio.com/wp-content/uploads/2024/06/cocota-brand_design-web_design-award-1.png.webp",
    "https://cocotastudio.com/wp-content/uploads/2024/06/cocota-brand_design-web_design-Awwwards.png.webp",
    "https://cocotastudio.com/wp-content/uploads/2024/06/cocota-brand_design-web_design-award-4.png.webp",
    "https://cocotastudio.com/wp-content/uploads/2024/06/cocota-brand_design-web_design-award-3.png.webp",
    "https://cocotastudio.com/wp-content/uploads/2024/06/cocota-brand_design-web_design-award-5.png.webp",
    "https://cocotastudio.com/wp-content/uploads/2024/06/cocota-brand_design-web_design-award-2.png.webp",
    "https://cocotastudio.com/wp-content/uploads/2024/06/cocota-brand_design-web_design-Awwwards.png.webp",
  ];

  function createTrailImage(x, y, imageUrl) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.className = "trail-image";
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    trailContainer.appendChild(img);

    setTimeout(() => {
      img.style.opacity = 0;
      setTimeout(() => img.remove(), 1000);
    }, 500);
  }

  function handleMouseMove(e) {
    const { clientX: x, clientY: y } = e;

    images.forEach((imageUrl, index) => {
      setTimeout(() => {
        createTrailImage(x + index * 10, y + index * 10, imageUrl);
      }, index * 100);
    });
  }

  awwardsDiv.addEventListener("mouseenter", () => {
    document.addEventListener("mousemove", handleMouseMove);
  });

  awwardsDiv.addEventListener("mouseleave", () => {
    document.removeEventListener("mousemove", handleMouseMove);
  });
}
awardsHoverAnimation();

function newContentScroller() {
  document
    .querySelector("#page4-top #arrow #left")
    .addEventListener("click", function () {
      const newDiv = document.querySelector("#new");
      newDiv.scrollLeft -= 369;
    });

  document
    .querySelector("#page4-top #arrow #right")
    .addEventListener("click", function () {
      const newDiv = document.getElementById("new");
      newDiv.scrollLeft += 366;
    });
}
newContentScroller();

function clientsScroller() {
  document
    .querySelector("#page7-top #arrow #left")
    .addEventListener("click", function () {
      const newDiv = document.querySelector("#clients");
      newDiv.scrollLeft -= 369;
    });

  document
    .querySelector("#page7-top #arrow #right")
    .addEventListener("click", function () {
      const newDiv = document.getElementById("clients");
      newDiv.scrollLeft += 366;
    });
}
clientsScroller();
