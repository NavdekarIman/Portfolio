const tl = gsap.timeline({
    defaults: { ease: "power1.out" },
    onStart:function(){ document.body.style.overflow = "hidden";},
     onComplete:function(){
         document.body.style.overflowY = "initial"; 
         document.body.style.overflowX = "hidden";
         }
    })

tl.to('.text', {y: "0%", duration: 2, stagger: 0.4})
tl.to('.intro-slider', {y: "-100%", duration: 1.5, delay: 1})
tl.to('.intro', {y: "-100%", duration: 1}, "-=1" )
tl.fromTo('.home h3', { x: -500 }, { x: 0 } )
tl.fromTo('.home h1', { x: -100, opacity:0 }, { x: 0, opacity:1 } )
tl.fromTo('.home h1 span', { opacity:0 }, { opacity:1 } )
tl.fromTo('.typing-slider', { opacity:0 }, { opacity:1 } )
tl.fromTo('.home .btn', { opacity:0 }, { opacity:1 } )
tl.fromTo('.nav-links li', {x: "500%", opacity:"0"}, {x: "0%", opacity:"1", duration: 0.6, stagger: 0.25})

