Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hover", {
  videos: ["./assets/2.mp4", "./assets/3.mp4"],
});

gsap.to(".left-element", {
  scrollTrigger: {
    trigger: "#featured-contents",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-400%",
  ease: Power1,
});

let elements = document.querySelectorAll(".left-element");
Shery.imageEffect(".images", {
  style: 2,
  slideStyle: (setScroll) => {
    elements.forEach(function (elem, index) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

function newInspoScrollAnimation() {
  let lastScrollY = window.scrollY; // Store the initial scroll position
  const heading = document.querySelector("#new-heading-wrapper"); // Select the wrapper

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Check scroll direction
    if (currentScrollY > lastScrollY) {
      // Scrolling down: move the animation to the left
      heading.style.animation = "marquee-left 20s linear infinite";
    } else {
      // Scrolling up: move the animation to the right
      heading.style.animation = "marquee-right 20s linear infinite";
    }

    lastScrollY = currentScrollY; // Update lastScrollY with current position
  });
}
newInspoScrollAnimation();

function sherymousefollowr() {
  // Assuming Shery.mouseFollower() initializes the follower automatically
  let isCustomFollowerActive = false;

  const mouseFollower = document.getElementById("mouse-follower");
  const dragElements = document.querySelectorAll(".drag");

  // Function to show custom mouse follower
  function showCustomFollower() {
    mouseFollower.style.display = "block";
    isCustomFollowerActive = true;
  }

  // Function to hide custom mouse follower
  function hideCustomFollower() {
    mouseFollower.style.display = "none";
    isCustomFollowerActive = false;
  }

  // Function to update the custom follower's position
  function updateFollowerPosition(e) {
    const x = e.clientX;
    const y = e.clientY;
    mouseFollower.style.left = `${x}px`;
    mouseFollower.style.top = `${y}px`;
  }

  // Event listeners for .drag elements
  dragElements.forEach((drag) => {
    drag.addEventListener("mouseenter", () => {
      // Disable Shery.js mouse follower
      Shery.mouseFollower("destroy"); // or any method to disable it if available
      showCustomFollower();
    });

    drag.addEventListener("mouseleave", () => {
      hideCustomFollower();
      // Re-enable Shery.js mouse follower if needed
      Shery.mouseFollower(); // or any method to re-enable it if available
    });

    drag.addEventListener("mousemove", (e) => {
      updateFollowerPosition(e);
    });
  });

  // Optional: If Shery.js needs to be initialized on page load
  document.addEventListener("DOMContentLoaded", () => {
    Shery.mouseFollower();
  });
}

function dragScroller() {
  const follower = document.getElementById("mouse-follower");
  const dragElements = document.querySelectorAll(".drag");

  // Move the mouse follower with the mouse
  document.addEventListener("mousemove", (e) => {
    follower.style.top = `${e.clientY}px`;
    follower.style.left = `${e.clientX}px`;
  });

  // Show mouse follower on hover and hide when not hovering
  dragElements.forEach((drag) => {
    drag.addEventListener("mouseenter", () => {
      follower.style.opacity = 1; // Make the follower visible
    });

    drag.addEventListener("mouseleave", () => {
      follower.style.opacity = 0; // Hide the follower
    });
  });
}
dragScroller();

function inspoDragging() {
  const scroller = document.getElementById("inspo-scroller");
  let isDown = false;
  let startX;
  let scrollLeft;

  scroller.addEventListener("mousedown", (e) => {
    isDown = true;
    scroller.classList.add("dragging");
    startX = e.pageX - scroller.offsetLeft;
    scrollLeft = scroller.scrollLeft;
  });

  scroller.addEventListener("mouseleave", () => {
    isDown = false;
    scroller.classList.remove("dragging");
  });

  scroller.addEventListener("mouseup", () => {
    isDown = false;
    scroller.classList.remove("dragging");
  });

  scroller.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scroller.offsetLeft;
    const walk = (x - startX) * 2;
    scroller.scrollLeft = scrollLeft - walk;
  });
}

inspoDragging();

function followScrollAnimation() {
  let lastScrollY = window.scrollY;
  const heading = document.querySelector("#follow-heading-wrapper");

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      heading.style.animation = "marquee-left 20s linear infinite";
    } else {
      heading.style.animation = "marquee-right 20s linear infinite";
    }

    lastScrollY = currentScrollY;
  });
}
followScrollAnimation();
