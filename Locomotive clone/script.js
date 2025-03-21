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

function page1HeadingAnimation() {
  gsap.from("#nav", {
    y: -90,
    delay: 0.8,
    duration: 1.2,
    ease: "power4.ease-in-out",
  });

  gsap.set(".man", {
    transformOrigin: "0% 100%",
    rotationX: -120,
    y: 150,
    opacity: 0,
  });

  gsap.to(".man", {
    rotationX: 0,
    y: 0,
    duration: 0.7,
    ease: "power4.ease-in-out",
    opacity: 1,
    stagger: 0.15,
    delay: 1.5,
  });
}
page1HeadingAnimation();

function scrollDirectionAnimation() {
  ScrollTrigger.create({
    trigger: "#page4",
    start: "top",
    end: "+=300",
    pin: true,
    scrub: true,
    scroller: "#main",
    // markers: true,
  });

  const movingElements = gsap.utils.toArray(".moving");

  movingElements.forEach((element, index) => {
    gsap.fromTo(
      element,
      { x: index % 2 === 0 ? "-100%" : "130%" },
      {
        x: 0,
        duration: 2.5,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top 30%",
          end: "+=500",
          scrub: 3,
          scroller: "#main",
        },
      }
    );
  });
}
scrollDirectionAnimation();

function imagePin() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page8",
      // markers: "true",
      scroller: "#main",
      start: "top -40%",
      end: "+=800",
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });
}
imagePin();

function vehicleAnimation() {
  gsap.to("#page12 h1", {
    x: 1600,
    y: 1600,
    rotate: 35,
    scrollTrigger: {
      trigger: "#page11",
      scroller: "#main",
      start: "top -100%",
      end: "top -200%",
      scrub: true,
      // markers: true,
    },
  });

  gsap.set("#pageZ h1", {
    x: 1500,
  });

  gsap.to("#pageZ h1", {
    x: -150,
    y: 1800,
    scrollTrigger: {
      trigger: "#pageZ",
      scroller: "#main",
      start: "top",
      end: "top -200%",
      scrub: true,
      // markers: true,
    },
  });
}
vehicleAnimation();

function backgroundColorChange() {
  gsap.to("#main", {
    backgroundColor: "#c7c7c9",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top",
      scrub: 5,
      // markers: true,
    },
  });

  gsap.to("#main", {
    backgroundColor: "#c7c7c9",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top",
      scrub: 5,
      // markers: true,
    },
  });

  gsap.to("#main", {
    backgroundColor: "#cdd4c9",
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top",
      scrub: 5,
      // markers: true,
    },
  });

  gsap.to("#main", {
    backgroundColor: "#d4c9c9",
    scrollTrigger: {
      trigger: "#pageZ",
      scroller: "#main",
      start: "top center",
      end: "bottom center",
      scrub: 5,
      // markers: true,
    },
  });
}
backgroundColorChange();
