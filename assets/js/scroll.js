var ourValueIcon = document.querySelector("#our-value .img");
var service = document.getElementById("service");
var portfolio = document.getElementById("portfolio");
var about = document.getElementById("about");
var pricing = document.getElementById("pricing");
var contact = document.getElementById("contact");
// var navItems = document.querySelectorAll("#nav-menu .nav-list li");
var navItemsLink = document.querySelectorAll("#nav-menu .nav-list li a");

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

    if( window.pageYOffset > contact.offsetTop ) {
        activeItems("#contact");
        console.log(contact.offsetTop, window.pageYOffset)
    }
    else if( window.pageYOffset + 50 > pricing.offsetTop ) {
        activeItems("#pricing");
    }
    else if( window.pageYOffset + 50 > portfolio.offsetTop ) {
        activeItems("#portfolio");;
    }
    else if( window.pageYOffset + 50 > service.offsetTop ) {
        activeItems("#service");
    }
    else if( window.pageYOffset + 50 > about.offsetTop ) {
        activeItems("#about");
    }
    
})

function activeItems(id) {
    console.log("hello")
    for(let i = 0; i < navItemsLink.length; i++) {
        if(navItemsLink[i].getAttribute("href") === id) {
            navItemsLink[i].classList.add("active");
        }
        else navItemsLink[i].classList = "";
    }
}

activeItems();