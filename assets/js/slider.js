var pre = document.getElementById("pre");
var next = document.getElementById("next");
var slideList = document.querySelector("#portfolio .slider-list");
var slideItems = document.querySelectorAll("#portfolio .slider-list li")
var toogle = document.querySelectorAll(".toogle i");


var counter = 1;
var percent = 100 / slideItems.length; 

// console.log(percent);

slideNumber(counter);
chooseSlide();

function slideNumber(n = counter) {
    removeActiveIcon();
    if (counter === 0) toogle[toogle.length - 1].classList.add("slide-active");
    else if (counter === slideItems.length - 1) toogle[0].classList.add("slide-active");
    else toogle[counter-1].classList.add("slide-active");
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
        // console.log("start");
        slideList.style.transition = "none";
        counter = 1;
        slideNumber(counter);
    }
});
function chooseSlide() {
    for(let i = 0; i < toogle.length; i++) {
        console.log(toogle[i]);
        toogle[i].addEventListener("click", function() {
            counter = i + 1;
            slideList.style.transition = "transform 0.5s ease-in-out";
            slideNumber(counter);
        });
    }
}

function removeActiveIcon() {
    for(let i = 0; i < toogle.length; i++) {
        toogle[i].classList.remove("slide-active");
    }
}

autoSlide();