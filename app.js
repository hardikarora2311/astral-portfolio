const homeBtn= document.querySelector(".home")
const workBtn= document.querySelector(".work")
const contactBtn = document.querySelector(".contact")
const twitterBtn= document.querySelector(".twitter")

const homeSec= document.querySelector(".home-sec")
const workSec= document.querySelector(".work-sec")
const contactSec= document.querySelector(".contact-sec")

homeBtn.addEventListener("click", function(){
    homeSec.style.display= "flex"
    workSec.style.display= "none"
})



workBtn.addEventListener("click", function(){
    homeSec.style.display= "none"
    // contactSec.style.display="none"
    workSec.style.display= "flex"
})