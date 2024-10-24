/*******locomotive js***********/
function locomotiveAnimate(){
	gsap.registerPlugin(ScrollTrigger);


// --- SETUP START ---
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// locomotive handle navbar when scroll
locoScroll.on("scroll", (args) => {
	const navHide = document.getElementById("nav-links");
	const scrollBar = args.scroll.y;

	if(scrollBar > 0) {
		navHide.style.display = "none";
	} else {
		navHide.style.display = "block"
	}

});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: "#main" });
// --- SETUP END ---


// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveAnimate()

/*
gsap.to(".nav_logo svg",{
	transform:"translateY(-100%)",
	scrollTrigger:{
		trigger:"#page1",
		scroller:"#main",
		markers:true,
		start:"top 0",
		end:"top -5%",
		scrub:true
	}
})

gsap.to(".navbar .nav_links",{
	transform:"translateY(-100%)",
	opacity:0,
	scrollTrigger:{
		trigger:"#page1",
		scroller:"#main",
		markers:true,
		start:"top 0",
		end:"top -5%",
		scrub:true
	}
})

*/

/*************video animate*************/

function videoCurAnimation(){
let videocur = document.querySelector("#video-container");

let playbtn = document.querySelector("#play");

videocur.addEventListener("mouseenter", function(){
	gsap.to(playbtn,{
	scale:1,
	opacity:1
	});

});

videocur.addEventListener("mouseleave", function(){
	gsap.to(playbtn,{
	scale:0,
	opacity:0
	});

});

videocur.addEventListener("mousemove", function(dets){
	gsap.to(playbtn,{
	left:dets.x-50,
	top:dets.y-80
	});

});
}

videoCurAnimation()


//****default***/
/*
document.querySelector("#detail1").addEventListener("mouseenter",function(){
	gsap.to("#cursor",{
		transform: `scale(1) translate(-50%,-50%)`
	});
});

document.addEventListener("mousemove",function(dets){
	gsap.to("#cursor",{
		left:dets.x,
	});
});
*/



/*********loading animate************/



function loadingAnimate(){
gsap.from("#page1 h1",{
	y:80,
	opacity:0,
	delay:0.6,
	duration:0.5,
	stagger:0.2
});

gsap.from("#page1 #video-container",{
	y:80,
	scale:0.8,
	opacity:0,
	delay:0.8,
	duration:0.9,
});
}

loadingAnimate()

//*** cursor animate     ****////
function pageCursor(){

let cursorAni = document.querySelector("#page3");

let cursorBtn = document.querySelector("#cursor");
	

cursorAni.addEventListener("mouseenter", function(){
	gsap.to(cursorBtn,{
	transform: `scale(1) translate(-50%,-50%)`
	});

});


cursorAni.addEventListener("mouseleave", function(){
	gsap.to(cursorBtn,{
	transform: `scale(0) translate(-50%,-50%)`
	});

});


cursorAni.addEventListener("mousemove", function(dets){
	gsap.to(cursorBtn,{
	left:dets.x,
});

});

}

pageCursor()

//  const navHide = document.getElementById("nav-links");
window.addEventListener('scroll',function(){
	const navHide = document.getElementById("nav-links");
	if(window.scrollY>0) {
		console.log(" working");
		// this.document.body.style.background = "black";
		document.getElementById("nav-links").style.display = "none";
	}else {
		navHide.style.display = "block";
		console.log("not working")
	}
})