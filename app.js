const homeBtn= document.querySelector(".home")
const workBtn= document.querySelector(".work")
const contactBtn = document.querySelector(".contact")
const twitterBtn= document.querySelector(".twitter")

const homeSec= document.querySelector(".home-sec")
const workSec= document.querySelector(".work-sec")
const contactSec= document.querySelector(".contact-sec")

const homeBtnActive= document.querySelector(".fa-home")
const workBtnActive= document.querySelector(".fa-folder")
const contactBtnActive= document.querySelector(".fa-envelope")

homeBtn.addEventListener("click", function(){
    homeSec.style.display= "flex"
    workSec.style.display= "none"
    contactSec.style.display="none"
    // homeBtnActive.style.color= "white"
    // workBtnActive.style.color="rgba(240, 255, 255, 0.692)"
    // contactBtnActive.style.color="rgba(240, 255, 255, 0.692)"

})



workBtn.addEventListener("click", function(){
    homeSec.style.display= "none"
    contactSec.style.display="none"
    workSec.style.display= "flex"
    // workBtnActive.style.color= "white"
    // homeBtnActive.style.color= "rgba(240, 255, 255, 0.692)" 
    // contactBtnActive.style.color= "rgba(240, 255, 255, 0.692)"
})


contactBtn.addEventListener("click", function(){
    homeSec.style.display= "none"
    contactSec.style.display="flex"
    workSec.style.display= "none"
    // homeBtnActive.style.color= "rgba(240, 255, 255, 0.692)"
    // workBtnActive.style.color= "rgba(240, 255, 255, 0.692)"
    // contactBtnActive.style.color= "white"
})