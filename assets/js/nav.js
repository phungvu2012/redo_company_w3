var navBarIcon = document.querySelector("#header-site .bar-icon");
var header = document.getElementById("header-site");
var heightHeader = header.clientHeight;

navBarIcon.addEventListener("click", function() {
    var isClosed = header.clientHeight === heightHeader;
    if(isClosed) {
        header.style.height = "auto";
        console.log("pass")
    }
    else {
        header.style.height = heightHeader + "px";
        console.log("fail", heightHeader)
    }
})