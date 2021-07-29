//Navbar that displays on scroll
var nav = document.getElementById("navbar")

var scrollWindow = $(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300){
            $(nav).css("top", 0).css("background-color", "white");
            $(nav).addClass("nav-animation");
        }
        else if ($(window).scrollTop() < 300){
            $(nav).css("top", 0).css("background-color", "transparent");
            $(nav).removeClass("nav-animation");
            $(nav).addClass("animation-nav");
        }
        else {
            
        }
    })
})

scrollWindow()