document.addEventListener('DOMContentLoaded', () => {
    const timeline = gsap.timeline();

    // Animating the first line (BUILDING DREAMS)
    timeline.from(".first-line", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out"
    });

    // Animating the second line (crafting excellence)
    timeline.from(".second-line", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out",
        delay: 0.3
    });

    // Number counter animation (0 to 100)
    let count = {value: 0}; // start value
    gsap.to(count, {
        value: 100, // end value
        duration: 4, // duration in seconds
        ease: "none",
        onUpdate: function() {
            document.querySelector('.loading-percentage').innerText = Math.floor(count.value) + "%";
        }
    });

    // Optional fade-out effect after animation
    timeline.to(".loader-container", {
        opacity: 0,
        duration: 1,
        delay: 2,
        onComplete: () => {
            document.querySelector(".loader-container").style.display = "none";
        }
    });
});
