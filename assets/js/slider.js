var pre = document.getElementById("pre");
var next = document.getElementById("next");
var slideList = document.querySelector("#portfolio .slider-list");
var slideItems = document.querySelectorAll("#portfolio .slider-list li")

var counter = 1;
var percent = 100 / slideItems.length; 

console.log(percent);

slideNumber(counter);

function slideNumber(n = counter) {
    slideList.style.transform = "translateX(-" + (n * percent) + "%)";
}

function nextSlide() {
    console.log(counter);
    if (counter >= slideItems.length - 1) return;
    counter++;
    slideList.style.transition = "transform 0.5s ease-in-out";
    slideNumber(counter);
}

function preSlide() {
    if (counter <= 0) return;
    counter--;
    slideList.style.transition = "transform 0.5s ease-in-out";
    slideNumber(counter);
}

next.addEventListener("click", nextSlide);
pre.addEventListener("click", preSlide);



function autoSlide() {
    setInterval(nextSlide, 5000);
}

slideList.addEventListener("transitionend", () => {
    if(slideItems[counter].id === "clone-end") {
        slideList.style.transition = "none";
        counter = slideItems.length - 2;
        slideNumber(counter);
    }
    if(slideItems[counter].id === "clone-start") {
        console.log("start");
        slideList.style.transition = "none";
        counter = 1;
        slideNumber(counter);
    }
});

autoSlide();