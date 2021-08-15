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

    // Task links toggle
    $(".tshortcut-links").hide();
    $(".tlist-links").hide();
    $(".t-tags-links").hide();
    $("#shortcut").click(function(){
      $("#s-angle-down").toggle();
      $("#s-angle-up").toggle();
      $(".tshortcut-links").slideToggle();
      $("#shortcut").css("background-color", "rgb(243, 243, 243)");
      $("#calendar").css("background-color", "transparent");
      $("#list").css("background-color", "transparent");
      $("#tags").css("background-color", "transparent");
    });

    $("#calendar").click(function(){
      $("#calendar").css("background-color", "rgb(243, 243, 243)");
      $("#shortcut").css("background-color", "transparent");
      $("#list").css("background-color", "transparent");
      $("#tags").css("background-color", "transparent");
    });

    $("#list").click(function(){
      $("#l-angle-down").toggle();
      $("#l-angle-up").toggle();
      $("#list-plus").show();
      $(".tlist-links").slideToggle();
      $("#list").css("background-color", "rgb(243, 243, 243)");
      $("#calendar").css("background-color", "transparent");
      $("#shortcut").css("background-color", "transparent");
      $("#tags").css("background-color", "transparent");
    });

    $("#tags").click(function(){
      $("#t-angle-down").toggle();
      $("#t-angle-up").toggle();
      $(".t-tags-links").slideToggle();
      $("#tags").css("background-color", "rgb(243, 243, 243)");
      $("#calendar").css("background-color", "transparent");
      $("#shortcut").css("background-color", "transparent");
      $("#list").css("background-color", "transparent");
    });
    
    $("#list-plus").click(function(){
      $("#add-tlist-links").slideDown();
      $("#add-tlist-btn").slideDown();
      $("#add-tlist-links").focus();

        if ($("#add-tlist-links").val() === null || $("#add-tlist-links").val() === "") {
          $(".add-tlist-btn").attr("disabled", true);
          $(".add-tlist-btn").removeAttr("id");
          $(".add-tlist-btn").removeClass("btn-primary");
          $(".add-tlist-btn").addClass("input-empty");
          $(".add-tlist-links").focus();
          return false;
        }
  
        else {
          $(".add-tlist-btn").attr("disabled", false);
          $(".add-tlist-btn").attr("id");
          $(".add-tlist-btn").addClass("btn-primary");
          $(".add-tlist-btn").removeClass("input-empty");
          return true;
        }
    })

    $("#add-tlist-links").on("input", function() {
      if ($("#add-tlist-links").val() === null || $("#add-tlist-links").val() === "") {
        $(".add-tlist-btn").attr("disabled", true);
        $(".add-tlist-btn").removeAttr("id");
        $(".add-tlist-btn").removeClass("btn-primary");
        $(".add-tlist-btn").addClass("input-empty");
        $(".add-tlist-links").focus();
        return false;
      }

      else {
        $(".add-tlist-btn").attr("disabled", false);
        $(".add-tlist-btn").attr("id", "add-tlist-btn");
        $(".add-tlist-btn").addClass("btn-primary");
        $(".add-tlist-btn").removeClass("input-empty");
        return true;
      }
    })

    $(".add-tlist-btn").click(function(){
    var listLinks = document.getElementById("add-tlist-links").value;

      $("#add-tlist1").text(listLinks);
      $("#add-tlist1").show();
      $("#add-tlist-links").hide();
      $(".add-tlist-btn").hide();
      $("#list-plus").hide();
      $("#list-edit").show();
    })

    $("#list-edit").click(function(){
      $("#add-tlist1").hide();
      $("#add-tlist-links").slideDown();
      $("#add-tlist-btn").slideDown();
      $("#add-tlist-links").focus();
      $("#add-tlist-links").text(listLinks);
    })
})
