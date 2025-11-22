// navbar animation
var nav = gsap.timeline();

nav.to("nav",{
    opacity:1,
    y:0,
    duration:0.5,
    delay:1.3
})

nav.from("nav .logo",{
    opacity:0,
    y:-30,
    duration:0.9,
})
nav.from(".nav-items li",{
    y:-30,
    opacity:0,
    duration:0.7,
    stagger:0.3
})

gsap.from(".mob-nav",{
    opacity:0,
    y:-30,
    duration:0.9,
    delay:2.5
})

// AboutMe animation

gsap.from(".about h2",{
    x:-80,
    duration:1.25,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2",
        start:"top 50%"
    }
})
gsap.from(".about p",{
    x:40,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2",
        start:"top 20%"
    }
})

// skills animation
gsap.from(".skillsclass",{
    opacity:0,
    duration:1.5,
    stagger:0.3,
    scrollTrigger:{
        trigger:".skillsclass",
        scroller:"body",
        start:"top 70%"
    }
})

// Projects section

gsap.from(".card", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 50%"
    }
  });

function BgColor(){
    let bgColor = window.getComputedStyle(document.body).color;
    if(bgColor === 'black'){
    document.body.classList.toggle('blue-bg');
    }else{
    document.body.classList.toggle('gray-bg');
    let iconscol = document.getElementsByClassName("fa-brands");
    iconscol.classList.toggle("col-toggle");
}}


function toggle(){
    let icon = document.querySelector(".fa-solid");
    let footer = document.querySelector("footer");
    if(icon){
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    footer.classList.toggle('footer-bgcol');
    BgColor();
}}

// Function to check screen width and toggle tools visibility
function toggleToolsVisibility() {
  const toolsElement = document.getElementById('framew');
  if (window.innerWidth <= 732) {
    toolsElement.style.display = 'none';
}else{
      toolsElement.style.display = 'grid';

  }
}

// Run the function when the page loads
window.addEventListener('DOMContentLoaded', toggleToolsVisibility);

// Run the function when the window is resized
window.addEventListener('resize', toggleToolsVisibility);