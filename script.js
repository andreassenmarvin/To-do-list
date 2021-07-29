//Navbar that changes on scroll
var nav = document.getElementById("navbar");
var success = document.getElementById("form-success");
var username = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var submit = document.getElementById("submit");
//Navbar white when 100px above top
$(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100){
            $(nav).css("top", 0).css("background-color", "white");
            $(nav).addClass("nav-animation");
        }
        //Navbar transparent when 0 to 100px top
        else if ($(window).scrollTop() < 300){
            $(nav).css("top", 0).css("background-color", "transparent");
            $(nav).removeClass("nav-animation");
            $(nav).addClass("animation-nav");
        }
    })

    $(success).hide();
    $("#success-btn").hide();
    //form validation
    $(".form form").submit(function(event){
        event.preventDefault();
      if ($(username).val() === "" && $(email).val() === "" && $(message).val() === ""){
          $(username).css("border", "1px solid red");
          $(email).css("border", "1px solid red");
          $(message).css("border", "1px solid red");
          $(username).focus();
          return false;
      }  
      else if($(username).val() === "" ){
        $(username).css("border", "1px solid red");
        $(email).css("border", "1px solid black");
        $(message).css("border", "1px solid black");
        $(username).focus();
        return false;
      }
      else if($(email).val() === "" ){
        $(email).css("border", "1px solid red");
        $(username).css("border", "1px solid black");
        $(message).css("border", "1px solid black");
        $(email).focus();
        return false;
      }
      else if($(message).val() === "" ){
        $(message).css("border", "1px solid red");
        $(username).css("border", "1px solid black");
        $(email).css("border", "1px solid black");
        $(message).focus();
        return false;
      }
      else {
        $(success).prepend(`Hello ${username.value}!`)
        $(success ).fadeIn();
        $("#success-btn").fadeIn();
        $(message).css("border", "1px solid black");
        $(username).css("border", "1px solid black");
        $(email).css("border", "1px solid black");
          return true;
      }
    })
    
    $("#success-btn").click(function(){
        $(success).fadeOut();
        $("#success-btn").fadeOut();
        return true;
    });

})