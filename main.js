// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-about', {
    scrollTrigger: {
        trigger:'.animate-about', 
        start: "top 80%",
        end: "10% 70%",
        toggleActions: "play none reverse none",
    },
    delay: 1,
    duration: 2,
    opacity: 0,
    x: -81,
    stagger: 0.12
});



gsap.from('.animate-img', {
    scrollTrigger: {
        trigger:'.animate-about', 
        start: "top 80%",
        end: "10% 70%",
        toggleActions: "play none reverse none",
    },
    duration: 2,
    opacity: 0,
    x: 78,
    stagger: 2
});


gsap.from('.skills-bar span', {
    scrollTrigger: {
        trigger:'.skills-wrap',
        start: "-40% 70%",
        end: "-40% 50%",
        toggleActions: "play none reverse none",

    },
    delay: 0.8,
    width: "0px",
    ease: Power2.easeInOut,
    duration: 3,
    stagger: 0.1
});

gsap.from('.skills-wrap', {
    scrollTrigger: {
        trigger:'.skills-wrap',
        start: "-40% 70%",
        end: "-40% 50%",
        toggleActions: "play none reverse none",
    },
    delay: 0.5,
    duration: 2,
    opacity: 0,
    x: -81,
    stagger: 2
});

gsap.from('.skills-heading', {
    scrollTrigger: {
        trigger:'.skills-wrap',
        start: "-40% 70%",
        end: "-40% 50%",
        toggleActions: "play none reverse none",
    },
    duration: 2,
    opacity: 0,
    x: -81,
    stagger: 2
});

// gsap.from('.experience-heading', {
//     scrollTrigger: {
//         trigger:'.experience-title',
//         start: "bottom 70%",
//         end: "top 50%",
//         toggleActions: "play none reverse none",
//     },
//     duration: 1,
//     opacity: 0,
//     stagger: 0.8
// });

// gsap.from('.education-heading', {
//     scrollTrigger: {
//         trigger:'.experience-title',
//         start: "bottom 70%",
//         end: "top 50%",
//         toggleActions: "play none reverse none",
//     },
//     duration: 1,
//     opacity: 0,
//     stagger: 0.8
// });

// gsap.from('.work-heading', {
//     scrollTrigger: {
//         trigger:'.experience-title',
//         start: "bottom 70%",
//         end: "top 50%",
//         toggleActions: "play none reverse none",
//     },
//     duration: 1,
//     opacity: 0,
//     stagger: 0.8
// });

// gsap.from('.card-1', {
//     scrollTrigger: {
//         trigger:'.education-heading',
//         toggleActions: "play none reverse none",
//         start: "top 70%",
//         end: "-280% 50%",
//     },
//     duration: 2,
//     opacity: 0,
//     stagger: 0.8,
//     y: 200,
//     ease: Power2.easeInOut
// });

// gsap.from('.card-2', {
//     scrollTrigger: {
//         trigger:'.experience',
//         toggleActions: "play none reverse none",
//         start: "top 70%",
//         end: "-280% 50%",
//     },
//     delay: 0.5,
//     duration: 2,
//     opacity: 0,
//     stagger: 0.8,
//     y: 200,
//     ease: Power2.easeInOut
// });

// gsap.from('.card-3', {
//     scrollTrigger: {
//         trigger:'.experience',
//         toggleActions: "play none reverse none",
//         start: "top 70%",
//         end: "-280% 50%",
//     },
//     delay: 1,
//     duration: 2,
//     opacity: 0,
//     stagger: 0.8,
//     y: 40,
//     ease: Power2.easeInOut
// });

// gsap.from('.card-4', {
//     scrollTrigger: {
//         trigger:'.experience',
//         toggleActions: "play none reverse none",
//         start: "top 70%",
//         end: "-280% 50%",
//     },
//     duration: 2,
//     opacity: 0,
//     stagger: 0.8,
//     y: 200,
//     ease: Power2.easeInOut
// });

// gsap.from('.card-5', {
//     scrollTrigger: {
//         trigger:'.experience',
//         toggleActions: "play none reverse none",
//         start: "top 70%",
//         end: "-280% 50%",
//     },
//     delay: 0.5,
//     duration: 2,
//     opacity: 0,
//     stagger: 0.8,
//     y: 200,
//     ease: Power2.easeInOut
// });

// gsap.from('.card-6', {
//     scrollTrigger: {
//         trigger:'.experience',
//         toggleActions: "play none reverse none",
//         start: "top 70%",
//         end: "-280% 50%",
//     },
//     delay: 1,
//     duration: 2,
//     opacity: 0,
//     stagger: 0.8,
//     y: 40,
//     ease: Power2.easeInOut
// });

gsap.from('.status-body', {
    scrollTrigger: {
        trigger:'.skills-wrap',
        start: "-40% 70%",
        end: "-40% 50%",
        toggleActions: "play none reverse none",
    },
    delay: 1,
    duration: 2,
    opacity: 0,
    stagger: 0.8,
    y: 80,
    ease: Power2.easeInOut
});

gsap.from('.info-slider', {
    scrollTrigger: {
        trigger:'.interest-title',
        toggleActions: "play none reverse none",
        start: "top 70%",
        end: "-80% 50%",
    },
    duration: 2,
    opacity: 0,
    stagger: 0.8,
});


const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const xBtn = document.querySelector('.sidebar-header i')

user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display')
    sidebarWrapper.classList.add('sidebar-wrapper-display')
})

xBtn.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display')
    sidebarWrapper.classList.remove('sidebar-wrapper-display')
})

// gsap.from('.navv', {
//     scrollTrigger: {
//         trigger:'.main-page',
//         toggleActions: "play none reverse none",
//         // start: "top 70%",
//         // end: "-80% 50%",
//     },
//     duration: 1.5,
//     opacity: 0,
//     stagger: 1,
//     y:-100,
//     ease: Power2.easeInOut
// });

// gsap.from('.text-box p', {
//     scrollTrigger: {
//         trigger:'.main-page',
//         toggleActions: "play none reverse none",
//         // start: "top 70%",
//         // end: "-80% 50%",
//     },
//     duration: 2,
//     opacity: 0,
//     stagger: 0.8,
//     x:-90,
// });

// gsap.from('.text-box h1', {
//     scrollTrigger: {
//         trigger:'.main-page',
//         toggleActions: "play none reverse none",
//         // start: "top 70%",
//         // end: "-80% 50%",
//     },
//     delay: 0.5,
//     duration: 2,
//     opacity: 0,
//     stagger: 0.8,
//     x:-90,
// });

// gsap.from('.row', {
//     scrollTrigger: {
//         trigger:'.main-page',
//         toggleActions: "play none reverse none",
//         // start: "top 70%",
//         // end: "-80% 50%",
//     },
//     delay: 1,
//     duration: 2,
//     opacity: 0,
//     stagger: 0.8,
//     x:-90,
// });




// Navigation

// const links = document.querySelectorAll(".nav-link");

// links.forEach((item)=>{
//     item.addEventListener("click", () =>
//     {
//         let el = document.getElementById(item.getAttribute("data-link"));
//         el.scrollIntoView({behaviour:"smooth", block:"start"});
//     })
// })




// End of Navigation