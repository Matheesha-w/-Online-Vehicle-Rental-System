var btn = document.getElementsByClassName("slid__btn");
var slide = document.getElementById("slide");

btn[0].onclick = function() {
    slide.style.transform = "translateX(0px)";

    for( i = 0; i < 4; i++ ) {
        btn[i].classList.remove("slid-active");
    }
    this.classList.add("slid-active"); 
}

btn[1].onclick = function() {
    slide.style.transform = "translateX(-800px)";

    for( i = 0; i < 4; i++ ) {
        btn[i].classList.remove("slid-active");
    }
    this.classList.add("slid-active");
}

btn[2].onclick = function() {
    slide.style.transform = "translateX(-1600px)";

    for( i = 0; i < 4; i++ ) {
        btn[i].classList.remove("slid-active");
    }
    this.classList.add("slid-active");
}

btn[3].onclick = function() {
    slide.style.transform = "translateX(-2400px)";

    for( i = 0; i < 4; i++ ) {
        btn[i].classList.remove("slid-active");
    }
    this.classList.add("slid-active");
}