$(document).ready(function(){
//    bar-menu 
    $(".fa-bars").click(function() {
        $("ul").toggleClass("active")
    })
    $(".fa-times").click(function() {
        $("ul").toggleClass("active")
    })
    $("ul li").click(function() {
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
    })

})   
// Image Slide 
let slideShow = document.getElementById("slideImage");
let slides = slideShow.getElementsByTagName("img");
let in1 = 0;

function nextSlide() {
    slides[in1].classList.remove("active");
    in1 = (in1 + 1) % slides.length;
    slides[in1].classList.add("active");
}
function prevSlide() {
    slides[in1].classList.remove("active");
    in1 = (in1 - 1  + slidesText.length) % slides.length;
    slides[in1].classList.add("active");
}

// Text Slide 
let slideshowText = document.getElementById("slideText");
let slidesText = slideshowText.getElementsByTagName("div");
let i = 0;

function nextText() {
    slidesText[i].classList.remove("active");
    i = (i + 1) % slidesText.length;
    slidesText[i].classList.add("active");
}
function prevText() {
    slidesText[i].classList.remove("active");
    i = (i - 1  + slidesText.length) % slidesText.length;
    slidesText[i].classList.add("active");
}