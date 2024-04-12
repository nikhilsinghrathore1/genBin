console.log("working");
let tl = gsap.timeline();
gsap.registerPlugin();
tl.from(".p1-left h1, #line",{
               opacity:0,
               y:100,
               // stagger:0.4,
               duration:0.9,
})
tl.from(".below-h1",{
               opacity:0,
               y:100,
               stagger:0.5,
               duration:0.9
},"name")
tl.from(".button-flex",{
               opacity:0,
               y:100,
               // stagger:0.2,
               duaration:0.9
},"name")
tl.from("#layer1,#layer2,#layer3,#layer4",{
               opacity:0,
               duration:0.9,
               // stagger:0.2'
               x:100,
},)
gsap.from(".benefits,.benefit-para",{
               opacity:0,
               stagger:0.4,
               duration:0.6,
               y:100,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 400px",
               }
})
gsap.from(".btm-lft-top h1,.btm-rght-top h1,#p2-center-img",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 250px"
               }
})
gsap.from(".btm-lft-top p,.btm-rght-top p",{
               opacity:0,
               y:100,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 180px"

               }
})
gsap.from(".btm-lft-bottom h1,.btm-rght-bottom h1",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 80px"
               }
})
gsap.from(".btm-lft-bottom p,.btm-rght-bottom p",{
               opacity:0,
               y:100,
               duration:0.8,
               scrollTrigger:{
                              trigger:"#page2",
                              scroller:"body",
                              start:"top 20px"

               }
})

gsap.from(".cont-top",{
               duration:0.8,
               opacity:0,
               y:100,
               scrollTrigger:{
                              trigger:"#page3",
                              scroller:"body",
                              start:"top 330px"
               }
})

gsap.from(".card1,.card2,.card3",{
               opacity:0,
               y:200,
               duration:0.7,
               // stagger:0.3,
               scrollTrigger:{
                              trigger:"#page3",
                              scroller:"body",
                              // markers:true,
                              start:"top 80px"
               }
})

let lftTOP = document.querySelector(".btm-lft-top");
let rghtTOP = document.querySelector(".btm-rght-top");
let lftBTM = document.querySelector(".btm-lft-bottom");
let rghtBTM = document.querySelector(".btm-rght-bottom");

lftTOP.addEventListener("mousemove",()=>{
               lftTOP.style.scale = "1.2"
               rghtTOP.style.opacity = "0.2"
               rghtTOP.style.scale = "0.8"
               rghtBTM.style.opacity = "0.2"
               rghtBTM.style.scale = "0.8"
               lftBTM.style.opacity = "0.2"
               lftBTM.style.scale = "0.8"
})
lftTOP.addEventListener("mouseout",()=>{
               lftTOP.style.scale = "1"
               rghtTOP.style.opacity = "1"
               rghtTOP.style.scale = "1"
               rghtBTM.style.opacity = "1"
               rghtBTM.style.scale = "1"
               lftBTM.style.opacity = "1"
               lftBTM.style.scale = "1"
})
lftBTM.addEventListener("mousemove",()=>{
               lftBTM.style.scale = "1.2"
               rghtTOP.style.opacity = "0.2"
               rghtTOP.style.scale = "0.8"
               rghtBTM.style.opacity = "0.2"
               rghtBTM.style.scale = "0.8"
               lftTOP.style.opacity = "0.2"
               lftTOP.style.scale = "0.8"
})
lftBTM.addEventListener("mouseout",()=>{
               lftBTM.style.scale = "1"
               rghtTOP.style.opacity = "1"
               rghtTOP.style.scale = "1"
               rghtBTM.style.opacity = "1"
               rghtBTM.style.scale = "1"
               lftTOP.style.opacity = "1"
               lftTOP.style.scale = "1"
})
rghtBTM.addEventListener("mousemove",()=>{
               rghtBTM.style.scale = "1.2"
               rghtTOP.style.opacity = "0.2"
               rghtTOP.style.scale = "0.8"
               lftBTM.style.opacity = "0.2"
               lftBTM.style.scale = "0.8"
               lftTOP.style.opacity = "0.2"
               lftTOP.style.scale = "0.8"
})
rghtBTM.addEventListener("mouseout",()=>{
               rghtBTM.style.scale = "1"
               rghtTOP.style.opacity = "1"
               rghtTOP.style.scale = "1"
               lftBTM.style.opacity = "1"
               lftBTM.style.scale = "1"
               lftTOP.style.opacity = "1"
               lftTOP.style.scale = "1"
})
rghtTOP.addEventListener("mousemove",()=>{
               rghtTOP.style.scale = "1.2"
               rghtBTM.style.opacity = "0.2"
               rghtBTM.style.scale = "0.8"
               lftBTM.style.opacity = "0.2"
               lftBTM.style.scale = "0.8"
               lftTOP.style.opacity = "0.2"
               lftTOP.style.scale = "0.8"
})
rghtTOP.addEventListener("mouseout",()=>{
               rghtTOP.style.scale = "1"
               rghtBTM.style.opacity = "1"
               rghtBTM.style.scale = "1"
               lftBTM.style.opacity = "1"
               lftBTM.style.scale = "1"
               lftTOP.style.opacity = "1"
               lftTOP.style.scale = "1"
})