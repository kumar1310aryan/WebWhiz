function loaderAnimation() {
  window.addEventListener("load", () => {
    gsap
      .timeline()
      .to(".loader-content h3", {
        opacity: 1,
        duration: 1.5,
        y: -20,
        ease: "power2.out",
        delay: 1,
      })
      .to(
        ".loader-content h1",
        { opacity: 1, duration: 1, y: -20, ease: "power2.out" },
        "-=0.5"
      )
      .to("#loader", { opacity: 0, duration: 1, ease: "power2.out", delay: 1 })
      .to("#loader", { display: "none" })
      .to("#main", { display: "block" }) 
      .from("#home", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out",
      });
  });
}
loaderAnimation();

Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hover", {
  videos: ["./assets/2.mp4", "./assets/3.mp4", "./assets/play-video.mp4"],
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
  let lastScrollY = window.scrollY; 
  const heading = document.querySelector("#new-heading-wrapper"); 

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
newInspoScrollAnimation();

function sherymousefollowr() {
  
  let isCustomFollowerActive = false;

  const mouseFollower = document.getElementById("mouse-follower");
  const dragElements = document.querySelectorAll(".drag");

 
  function showCustomFollower() {
    mouseFollower.style.display = "block";
    isCustomFollowerActive = true;
  }

  
  function hideCustomFollower() {
    mouseFollower.style.display = "none";
    isCustomFollowerActive = false;
  }

  
  function updateFollowerPosition(e) {
    const x = e.clientX;
    const y = e.clientY;
    mouseFollower.style.left = `${x}px`;
    mouseFollower.style.top = `${y}px`;
  }

  
  dragElements.forEach((drag) => {
    drag.addEventListener("mouseenter", () => {
      
      Shery.mouseFollower("destroy"); 
      showCustomFollower();
    });

    drag.addEventListener("mouseleave", () => {
      hideCustomFollower();
      
      Shery.mouseFollower(); 
    });

    drag.addEventListener("mousemove", (e) => {
      updateFollowerPosition(e);
    });
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    Shery.mouseFollower();
  });
}

function dragScroller() {
  const follower = document.getElementById("mouse-follower");
  const dragElements = document.querySelectorAll(".drag");

  
  document.addEventListener("mousemove", (e) => {
    follower.style.top = `${e.clientY}px`;
    follower.style.left = `${e.clientX}px`;
  });

  
  dragElements.forEach((drag) => {
    drag.addEventListener("mouseenter", () => {
      follower.style.opacity = 1;
    });

    drag.addEventListener("mouseleave", () => {
      follower.style.opacity = 0; 
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

// locomotiveAnimation();
