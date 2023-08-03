document.addEventListener('DOMContentLoaded', () => {

    gsap.to('.dots1', {
        yPercent: 60,
        scrollTrigger: {
            scrub: 0.3
        }
    })

    gsap.to('.dots2', {
        xPercent: 100,
        scrollTrigger: {
            scrub: 0.3
        }
    })

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.bg',
            pin: true,
            start: 'top top',
            end: '+=' + window.innerHeight * 2,
            scrub: 0.3,
        }
    })

    tl.to('.bg', {
        rotation: -360,
        xPercent: -100,
        yPercent: 25,
        backgroundColor: 'transparent',
        backgroundSize: '100%',
        clipPath: 'circle(50% at 50% 50%)',
    })

    tl.to('.bg', {
        yPercent: 10
    })

    tl.to('.bg', {
        yPercent: 0,
        xPercent: -10,
        rotation: '+=10',
    })

})