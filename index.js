/*const projectOne = document.querySelector(".par-project-one");
const projectTwo = document.querySelector(".par-project-two");
const projectThree = document.querySelector(".par-project-three");
const projectFour = document.querySelector(".par-project-four");
const projectFive = document.querySelector(".par-project-five");
const projectSix = document.querySelector(".par-project-six");

const containerElementOne = document.querySelector(".item-project-one");
const containerElementTwo = document.querySelector(".item-project-two");
const containerElementThree = document.querySelector(".item-project-three");
const containerElementFour = document.querySelector(".item-project-four");
const containerElementFive = document.querySelector(".item-project-five");
const containerElementSix = document.querySelector(".item-project-six");



containerElementOne.addEventListener('click', function(){
    projectOne.classList.toggle('par-project-clicked');
    });

containerElementTwo.addEventListener('click', function(){
    projectTwo.classList.toggle('par-project-clicked');
    });

containerElementThree.addEventListener('click', function(){
    projectThree.classList.toggle('par-project-clicked');
    });

containerElementFour.addEventListener('click', function(){
    projectFour.classList.toggle('par-project-clicked');
    });

containerElementFive.addEventListener('click', function(){
    projectFive.classList.toggle('par-project-clicked');
    });

containerElementSix.addEventListener('click', function(){
    projectSix.classList.toggle('par-project-clicked');
    });
    
    function removeFocus(){
      projectOne.classList.remove('par-project-clicked')
    }*/
    
   
    const containerElement = document.querySelectorAll(".item-project");
    
    containerElement.forEach(item=>{
      item.addEventListener( 'click', function(){
      item.querySelector('.par-project').classList.toggle('par-project-clicked');
       })
     
      
    })
  



  

gsap.from('h1' , {delay: 0.5, duration:2.5 , opacity: 0 , scale: 0})
gsap.from('.textCoverOne' , { delay: 2.5 , x:-200, duration:2, opacity: 0})
gsap.from('.textCoverTwo' , {delay: 4 , x:200, duration:2, opacity: 0, ease: "bounce"})
gsap.from('.btnCover' , {delay: 5 , duration:2, opacity: 0 , scale: 0, y:200})
gsap.from('.btnTwoCover' , {delay: 5 , duration:2, opacity: 0 , scale: 0, y:200})
gsap.to('.picture' , {zoom:1.2 , duration:2 ,  yoyo: true})
gsap.to('.sunLogo' , {rotate:360, repeat: -1 , yoyo: true , duration:2})
gsap.to('.picture' , {backgroundSize : '125%' , duration:2 })
gsap.to('.fa-face-smile-beam' , {y:-4, repeat: -1 , yoyo: true , duration:.4})
gsap.from('.nav-item' , {x:-100, stagger:0.5 ,opacity:0 , duration:2})

const TL = gsap.timeline();

TL.from('.textOne' , {  y:200, opacity: 0, scale:0, stagger: 0.1,
           scrollTrigger:{
               trigger: '.par',
               start:'-1300 0' ,
               scrub:true,
           }})
  .from('.textThree' , {y:300,
           scrollTrigger:{
               trigger: '.par',
               start:'-900 0' ,
               scrub:true
           }})



           /* ---- particles.js config ---- */

particlesJS("particles-js", {
   "particles": {
     "number": {
       "value": 250,
       "density": {
         "enable": true,
         "value_area": 800
       }
     },
     "color": {
       "value": "#ffffff"
     },
     "shape": {
       "type": "circle",
       "stroke": {
         "width": 0,
         "color": "#000000"
       },
       "polygon": {
         "nb_sides": 5
       },
       "image": {
         "src": "img/github.svg",
         "width": 100,
         "height": 100
       }
     },
     "opacity": {
       "value": 0.5,
       "random": false,
       "anim": {
         "enable": false,
         "speed": 1,
         "opacity_min": 0.1,
         "sync": false
       }
     },
     "size": {
       "value": 3,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 30,
         "size_min": 0.1,
         "sync": false
       }
     },
     "line_linked": {
       "enable": true,
       "distance": 150,
       "color": "#ffffff",
       "opacity": 0.4,
       "width": 1
     },
     "move": {
       "enable": true,
       "speed": 6,
       "direction": "none",
       "random": false,
       "straight": false,
       "out_mode": "out",
       "bounce": false,
       "attract": {
         "enable": false,
         "rotateX": 600,
         "rotateY": 1200
       }
     }
   },
   "interactivity": {
     "detect_on": "canvas",
     "events": {
       "onhover": {
         "enable": true,
         "mode": "grab"
       },
       "onclick": {
         "enable": true,
         "mode": "push"
       },
       "resize": true
     },
     "modes": {
       "grab": {
         "distance": 140,
         "line_linked": {
           "opacity": 1
         }
       },
       "bubble": {
         "distance": 400,
         "size": 40,
         "duration": 2,
         "opacity": 8,
         "speed": 3
       },
       "repulse": {
         "distance": 200,
         "duration": 0.4
       },
       "push": {
         "particles_nb": 4
       },
       "remove": {
         "particles_nb": 2
       }
     }
   },
   "retina_detect": true
 });
 
