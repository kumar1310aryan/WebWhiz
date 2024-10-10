function locomotiveScroll() {
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
locomotiveScroll();

function cursorAnimation() {
  var mainContent = document.querySelector("#main-content");

  var cursor = document.querySelector("#cursor");

  mainContent.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x - 720,
      y: dets.y - 710,
    });
  });

  mainContent.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
    });
  });

  mainContent.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
    });
  });
}
cursorAnimation();

function navColor() {
  gsap.to("#nav h2", {
    color: "black",
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page2",
      // markers: true,
      start: "top 5%",
      end: "top 5%",
      onLeave: () => {
        gsap.to("#nav h2", { color: "black" });
      },
      onEnterBack: () => {
        gsap.to("#nav h2", { color: "white" });
      },
    },
  });
}
navColor();

function menuAnimation() {
  const h2Elements = document.querySelectorAll("#nav h2");
  const menu = h2Elements[1];

  const fullNav = document.querySelector("#full-scr-nav");
  const close = document.querySelector("#rejouice h4");

  const navContent = document.querySelector("#nav-content");
  const navBottom = document.querySelector("#fullnav-bottom");
  const video = document.querySelector("#nav-video video");

  const openNavTimeline = gsap.timeline({ paused: true, reversed: true });

  openNavTimeline
    .set(fullNav, { top: "-100%" })
    .to(fullNav, { top: "0%", duration: 0.5, ease: "power2.out" })
    .from(
      navContent,
      {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.8,
      },
      "-=0.3"
    )
    .from(
      navBottom,
      { opacity: 0, y: 30, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    )
    .from(video, { opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.3");

  menu.addEventListener("click", function () {
    if (openNavTimeline.reversed()) {
      openNavTimeline.play();
    }
  });

  close.addEventListener("click", function () {
    openNavTimeline.reverse();
  });
}
menuAnimation();

function cursorAnimation2() {
  var page5 = document.querySelector("#page5");

  var cursor = document.querySelector("#cursor2");

  page5.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x - 750,
      y: dets.y - 450,
    });
  });

  page5.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      opacity: 1,
      scale: 1,
    });
  });

  page5.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      opacity: 0,
      scale: 0,
    });
  });
}
cursorAnimation2();

function svgAnimation() {
  gsap.to("#svg1", {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page5",
      start: "top 10%",
      end: "bottom center",
      // markers: true,
      once: true,
      onEnter: () => gsap.to("#svg1", { rotation: 250, duration: 1.2 }),
    },
  });
}
svgAnimation();

function swiper() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,          
    spaceBetween: 10,          
    loop: true,                
    speed: 5000,               
    loopedSlides: 5,           
    autoplay: {
      delay: 0,                
      disableOnInteraction: false, 
    },
  });
}
swiper();

