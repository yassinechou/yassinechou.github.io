$(document).ready(function(){
    /* menu programes....*/
    $("ul li").click(function(){
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
    })
    $(".fa-bars").click(function(){
        $("ul").toggleClass("active");
    })
    /*containe down programes */
    $(".act1").click(function() {
        $(".contain1").toggleClass("active1");
        $(".act1").removeClass("fa-angle-down");
    })
    $(".act2").click(function() {
        $(".contain2").toggleClass("active2");
        $(".act2").removeClass("fa-angle-down");
    })
    $(".act3").click(function() {
        $(".contain3").toggleClass("active3");
        $(".act3").removeClass("fa-angle-down");
    })
    /*containe up */
    $(".actup1").click(function() {
        $(".contain1").toggleClass("active1");
        $(".actip1").removeClass("fa-chevron-up");
        $(".act1").toggleClass("fa-angle-down");
    })
    $(".actup2").click(function() {
        $(".contain2").toggleClass("active2");
        $(".actip2").removeClass("fa-chevron-up");
        $(".act2").toggleClass("fa-angle-down");
    })
    $(".actup3").click(function() {
        $(".contain3").toggleClass("active3");
        $(".actip3").removeClass("fa-chevron-up");
        $(".act3").toggleClass("fa-angle-down");
    })
});
/****Video LifeStyle */
let displayVideo =  document.getElementById("video");
function display(vid) {
    displayVideo.src = vid;
}
/******Admissio slide text */
const textslide = document.querySelector(".circle .text p");
textslide.innerHTML = textslide.innerText.split("").map(
    (char,i) =>
    `<span style="transform:rotate(${i * 12}deg)">${char}</span>`
).join("")

