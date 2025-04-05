function locomotive(){

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        inertia: .6,
        getDirection: true,
        mobile: {
            breakpoint: 0,  
            smooth: true,
            inertia: .9,
            getDirection: true,
        },
        tablet: {
            breakpoint: 0,  
            smooth: true,
            inertia: 0.9,
            getDirection: true,
        },
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, true) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

}
locomotive();
// Initialize a new Lenis instance for smooth scrolling
// const lenis = new Lenis();

// // Listen for the 'scroll' event and log the event data to the console
// lenis.on('scroll', (e) => {
//   console.log(e);
// });

// // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
// lenis.on('scroll', ScrollTrigger.update);

// // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// // This ensures Lenis's smooth scroll animation updates on each GSAP tick
// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000); // Convert time from seconds to milliseconds
// });

// // Disable lag smoothing in GSAP to prevent any delay in scroll animations
// gsap.ticker.lagSmoothing(0);

let tl = gsap.timeline()

tl.from('.top-bar',{
    duration: 0.8,
    y: -100,
    // ease: 'elastic.out(1, 0.3)'
},'a')
tl.from('.top-bar .lis, .top-bar .top-bar-social-icon',{
    duration: 1,
    opacity: 0,
    y: 40,
    stagger: 0.1,
    ease: 'elastic.out(1, 0.3)'
},'a')
tl.from('.nav-bar',{
    duration: 0.6,
    y: -150,
    // ease: 'elastic.out(1, 0.3)'
},'a')
tl.from('.nav-bar .logo,.nav-bar .links li ',{
    duration: 0.8,
    opacity: 0,
    y: 40,
    stagger: 0.1,
    ease: 'elastic.out(1, 0.3)'
},'a')
tl.from('.hero .itemss ',{
    duration: 1,
    opacity: 0,
    y: -500,
    // ease: "back.in(1.7)",
},'a')




tl.from('.news h1 , .news .news-slides .news-card ,  .new .news-slides .news-indicator , .news .news-slides .pr, .news .news-slides .ne',{
    y:100,
    opacity:0,
    duration:1,
    ease: "bounce.out",
    stagger:0.7,
    delay:0.8,
    scrollTrigger: {
        trigger:".news h1",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
},'a')

Shery.makeMagnet(".news .news-slides .news-card" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
tl.from('.ads h1  ',{
    
    y:100,
    opacity:0,
    duration:1,
    ease: "bounce.out",
    stagger:0.7,
    delay:1.4,
    scrollTrigger: {
        trigger:".ads h1",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from('.ads .ads-l , .ads .ads-r',{
    x:-100,
    y:100,
    // scale:0,
    opacity:0,
    duration:1,
    stagger:0.7,
    scrollTrigger: {
        trigger:".ads .ads-l",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})

tl.from('.health h1',{
    
    y:100,
    opacity:0,
    duration:1,
    ease: "bounce.out",
    stagger:0.7,
    delay:2,
    scrollTrigger: {
        trigger:".health h1",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }   
})
tl.from('.health .health-left .health-left-box ',{
    rotate:25,
    opacity:0,
    duration:1,
    // ease: "bounce.out",
    stagger:0.7,
    delay:2.4,
    scrollTrigger: {
        trigger:".health .health-left .health-left-box",
        start:"top 50%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from('.health .health-right ',{
    rotate:-25,
    opacity:0,
    duration:1,
    // ease: "bounce.out",
    stagger:0.7,
    delay:2.8,
    scrollTrigger: {
        trigger:".health .health-right .health-right-box",
        start:"top 50%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,    
        // markers: true,
    }
})
tl.from('.sub , .sub h2 , .sub p , .sub input , .sub button ',{
    y:-200,
    opacity:0,
    duration:2,
    stagger:1.3,
    delay:3.2,
    scrollTrigger: {
        trigger:".sub",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from('.event h2',{
    y:100,
    opacity:0,
    duration:1,
    ease: "bounce.out",
    stagger:0.7,
    delay:4,
    scrollTrigger: {
        trigger:".event h2",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})

tl.from(' .event .event-row .event-top-box',{
    rotate:60,
    opacity:0,
    duration:1,
    stagger:1,
    delay:4.3,
    scrollTrigger: {
        trigger:".event .event-row .event-top-box",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from(' .event .event-row .secondbox',{
    rotate:120,
    opacity:0,
    duration:1,
    stagger:1,
    delay:4.3,
    scrollTrigger: {
        trigger:".event .event-row .secondbox",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from(' .event .event-row .thirdbox',{
    rotate:180,
    opacity:0,
    duration:1,
    stagger:1,
    delay:4.3,
    scrollTrigger: {
        trigger:".event .event-row .thirdbox",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from('.about h1',{
    y:100,
    opacity:0,
    duration:1,
    ease: "bounce.out",
    stagger:0.7,
    delay:5,
    scrollTrigger: {
        trigger:".about h1",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from(".about .a-l",{
    rotate:-45,
    opacity:0,
    duration:1,
    stagger:1,
    delay:5.3,
    scrollTrigger: {
        trigger:".about .a-l",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from('.about .a-r',{
    rotate:45,
    opacity:0,
    duration:1,
    stagger:1,
    delay:5.6,
    scrollTrigger: {
        trigger:".about .a-r",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from('.testimonial h2',{
    y:100,
    opacity:0,
    duration:1,
    ease: "bounce.out",
    stagger:0.7,
    delay:6,
    scrollTrigger: {
        trigger:".testimonial h2",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from('.testimonial .testimonial-row .test-box-1',{
    rotate:30,
    scale:0,
    x:-200,
    opacity:0,
    duration:1,
    stagger:1,
    delay:6.3,
    ease: "steps(12)",
    scrollTrigger: {
        trigger:".testimonial .testimonial-row .test-box-1",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from('.testimonial .testimonial-row .test-box-2',{
    rotate:60,
    scale:0,
    y:100,
    opacity:0,
    duration:1,
    stagger:1,
    delay:6.3,
    ease: "steps(12)",
    scrollTrigger: {
        trigger:".testimonial .testimonial-row .test-box-2",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from('.testimonial .testimonial-row .test-box-3',{
    rotate:90,
    scale:0,
    x:200,
    opacity:0,
    duration:1,
    stagger:1,
    delay:6.3,
    ease: "steps(12)",
    scrollTrigger: {
        trigger:".testimonial .testimonial-row .test-box-3",
        start:"top 60%",
        scroller: "#main",
        end:"bottom 80%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from('.contact .contact-l',{
    x:-200,
    opacity:0,
    duration:1,
    stagger:1,
    delay:7,
    scrollTrigger: {
        trigger:".contact .contact-l",
        start:"top 100%",
        scroller: "#main",
        end:"bottom 100%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
tl.from('.contact .contact-r',{
    x:200,
    opacity:0,
    duration:1,
    stagger:1,
    delay:7,
    scrollTrigger: {
        trigger:".contact .contact-r",
        start:"top 100%",
        scroller: "#main",
        end:"bottom 100%",
        scrub:1,
        // markers:true,
        // markers: true,
    }
})
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.5, 2, 0.320, 1)",
    duration: 1,
  });
  Shery.imageEffect(".he1", {
    style: 2, //Select Style
    debug: true, // Debug Panel
    config: {
      /* Config made from debug panel */
    },
    preset: "./presets/wigglewobble.json",
  });