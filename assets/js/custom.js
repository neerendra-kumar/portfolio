gsap.registerPlugin(ScrollTrigger);

/* HERO */

gsap.from(".hero-text h4", {
    y: 30,
    opacity: 0,
    duration: 1
});

gsap.from(".hero-text h1", {
    y: 60,
    opacity: 0,
    duration: 1,
    delay: .2
});

gsap.from(".hero-text h2", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: .4
});

gsap.from(".hero-text p", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: .6
});

gsap.from(".designation-badge", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: .8
});

gsap.from(".hero-btns", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 1
});

gsap.from(".hero-image", {
    x: 80,
    opacity: 0,
    duration: 1.2
});

/* ABOUT */

gsap.utils.toArray(".about-card").forEach((card) => {

    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },
        y: 60,
        opacity: 0,
        duration: 1
    });

});

/* SKILLS */

gsap.utils.toArray(".skill").forEach((skill) => {

    gsap.from(skill, {
        scrollTrigger: {
            trigger: skill,
            start: "top 90%"
        },
        y: 50,
        opacity: 0,
        duration: .8
    });

});

/* GALLERY */

gsap.utils.toArray(".gallery-card").forEach((card) => {

    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },
        y: 80,
        opacity: 0,
        scale: .9,
        duration: 1
    });

});

/* VIDEO */

gsap.utils.toArray(".video-card").forEach((card) => {

    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },
        y: 60,
        opacity: 0,
        duration: 1
    });

});

/* PARALLAX IMAGE EFFECT */

gsap.to(".gallery-card img", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
        trigger: ".gallery-right",
        scrub: true
    }
});
