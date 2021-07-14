var ourValueIcon = document.querySelector("#our-value .img");
var service = document.getElementById("service");
var portfolio = document.getElementById("portfolio");

window.addEventListener("scroll", function() {
    if( window.pageYOffset + screen.availHeight > ourValueIcon.offsetTop ) {
        ourValueIcon.classList.add("slide-up");
    }
    if( window.pageYOffset + screen.availHeight > service.offsetTop ) {
        service.classList.add("slide-up");
    }
    if( window.pageYOffset + screen.availHeight > portfolio.offsetTop ) {
        portfolio.classList.add("slide-up");
    }
    
})