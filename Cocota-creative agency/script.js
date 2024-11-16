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

function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locomotiveAnimation();

function awardsHoverAnimation() {
  const awwardsDiv = document.getElementById("awards");
  const trailContainer = document.getElementById("trail-container");

  const images = [
    "https://cocotastudio.com/wp-content/uploads/2024/06/cocota-brand_design-web_design-award-1.png.webp",
    "https://cocotastudio.com/wp-content/uploads/2024/06/cocota-brand_design-web_design-Awwwards.png.webp",
    "https://cocotastudio.com/wp-content/uploads/2024/06/cocota-brand_design-web_design-ADG_Laus.png.webp",
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
    img.style.left = `${x - 50}px`;
    img.style.top = `${y - 650}px`;

    trailContainer.appendChild(img);

    gsap.fromTo(
      img,
      { opacity: 1, scale: 1.5 },
      {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "power1.out",
        onComplete: () => img.remove(),
      }
    );
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

function headingP1Animation() {
  gsap.fromTo(
    ".animated-heading",
    {
      y: 100,
      opacity: 0,
      scale: 0.8,
      rotateX: 30,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.2,
    }
  );
}
headingP1Animation();

function loaderAnimation() {
  const tl = gsap.timeline({
    onComplete: () => {
      document.querySelector("#loader").style.display = "none";

      gsap.from("#nav", {
        y: -100,
        delay: 0.4,
        duration: 0.7,
      });

      gsap.fromTo(
        "#main",
        {
          scale: 0,
        },
        {
          duration: 1,
          scale: 1,
          ease: "power2.out",
          display: "block",
        }
      );
    },
  });

  tl.to("#loader #circle", {
    duration: 2,
    scale: 1,
    ease: "power2.inOut",
    rotation: 360,
  });

  tl.to(".right-eye", {
    height: "6px",
  });

  if (window.innerWidth > 500) {
    tl.to(".right-eye", {
      height: "3.5vw",
      delay: 0.2,
    });
  } else {
    tl.to(".right-eye", {
      delay: 0.2,
      height: "6vw",
    });
  }
}
loaderAnimation();
