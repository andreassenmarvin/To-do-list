//Navbar that changes on scroll
var nav = document.getElementById("navbar");
var success = document.getElementById("form-success");
var username = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var submit = document.getElementById("submit");

//Navbar white when 100px above top
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(nav).css("top", 0).css("background-color", "white");
      $(nav).addClass("nav-animation");
    }
    //Navbar transparent when 0 to 100px top
    else if ($(window).scrollTop() < 300) {
      $(nav).css("top", 0).css("background-color", "transparent");
      $(nav).removeClass("nav-animation");
      $(nav).addClass("animation-nav");
    }
  });

  $(success).hide();
  $("#success-btn").hide();
  //form validation
  $(".form form").submit(function (event) {
    event.preventDefault();
    if ($(username).val() === "" && $(email).val() === "" && $(message).val() === "") {
      $(username).css("border", "1px solid red");
      $(email).css("border", "1px solid red");
      $(message).css("border", "1px solid red");
      $(username).focus();
      return false;
    } else if ($(username).val() === "") {
      $(username).css("border", "1px solid red");
      $(email).css("border", "1px solid black");
      $(message).css("border", "1px solid black");
      $(username).focus();
      return false;
    } else if ($(email).val() === "") {
      $(email).css("border", "1px solid red");
      $(username).css("border", "1px solid black");
      $(message).css("border", "1px solid black");
      $(email).focus();
      return false;
    } else if ($(message).val() === "") {
      $(message).css("border", "1px solid red");
      $(username).css("border", "1px solid black");
      $(email).css("border", "1px solid black");
      $(message).focus();
      return false;
    } else {
      $(success).prepend(`Hello ${username.value}!`)
      $(success).fadeIn();
      $("#success-btn").fadeIn();
      $(message).css("border", "1px solid black");
      $(username).css("border", "1px solid black");
      $(email).css("border", "1px solid black");
      return true;
    }
  });

  $("#success-btn").click(function () {
    $(success).fadeOut();
    $("#success-btn").fadeOut();
    return true;
  });

  // Task links toggle
  $(".tshortcut-links").hide();
  $(".tlist-links").hide();
  $(".t-tags-links").hide();
  $("#shortcut").click(function () {
    $("#s-angle-down").toggle();
    $("#s-angle-up").toggle();
    $(".tshortcut-links").slideToggle();
    $("#shortcut").css("background-color", "rgb(243, 243, 243)");
    $("#calendar").css("background-color", "transparent");
    $("#list").css("background-color", "transparent");
    $("#tags").css("background-color", "transparent");
  });

  $("#calendar-frame").hide();
  $("#calendar").click(function () {
    $("#calendar").css("background-color", "rgb(243, 243, 243)");
    $("#shortcut").css("background-color", "transparent");
    $("#list").css("background-color", "transparent");
    $("#tags").css("background-color", "transparent");
    $("#calendar-frame").slideToggle();
  });

  $("#list").click(function () {
    $("#l-angle-down").toggle();
    $("#l-angle-up").toggle();
    $("#list-plus").toggle();
    $(".tlist-links").slideToggle();
    $("#list").css("background-color", "rgb(243, 243, 243)");
    $("#calendar").css("background-color", "transparent");
    $("#shortcut").css("background-color", "transparent");
    $("#tags").css("background-color", "transparent");
  });

  $("#tags").click(function () {
    $("#t-angle-down").toggle();
    $("#t-angle-up").toggle();
    $(".t-tags-links").slideToggle();
    $("#tags").css("background-color", "rgb(243, 243, 243)");
    $("#calendar").css("background-color", "transparent");
    $("#shortcut").css("background-color", "transparent");
    $("#list").css("background-color", "transparent");
  });

  // Add and edit task list category
  $("#list-plus").click(function () {
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
    } else {
      $(".add-tlist-btn").attr("disabled", false);
      $(".add-tlist-btn").attr("id");
      $(".add-tlist-btn").addClass("btn-primary");
      $(".add-tlist-btn").removeClass("input-empty");
      return true;
    }
  });

  $("#add-tlist-links").on("input", function () {
    if ($("#add-tlist-links").val() === null || $("#add-tlist-links").val() === "") {
      $(".add-tlist-btn").attr("disabled", true);
      $(".add-tlist-btn").removeAttr("id");
      $(".add-tlist-btn").removeClass("btn-primary");
      $(".add-tlist-btn").addClass("input-empty");
      $(".add-tlist-links").focus();
      return false;
    } else {
      $(".add-tlist-btn").attr("disabled", false);
      $(".add-tlist-btn").attr("id", "add-tlist-btn");
      $(".add-tlist-btn").addClass("btn-primary");
      $(".add-tlist-btn").removeClass("input-empty");
      return true;
    }
  });

  $(".add-tlist-btn").click(function () {
    var listLinks = document.getElementById("add-tlist-links").value;
    $("#add-tlist1").text(listLinks);
    $("#quick-add-head").text(listLinks);
    $("#add-tlist1").show();
    $("#add-tlist-links").hide();
    $(".add-tlist-btn").hide();
    $("#list-plus").hide();
    $("#list-edit").show();
  });

  $("#list-edit").click(function () {
    $("#add-tlist1").hide();
    $("#add-tlist-links").slideDown();
    $("#add-tlist-btn").slideDown();
    $("#add-tlist-links").focus();
    $("#add-tlist-links").text(listLinks);
  });

  // Tasks modal
  $(".tasks-modal").hide();
  $("#tasks-btn").click(function () {
    $(".tasks-modal").fadeIn();
    $(".body-overlay").fadeIn();
    $(".tmodal-input").focus();

    if ($(".tmodal-input").val() === null || $(".tmodal-input").val() === "") {
      $(".addtask-btn").attr("disabled", true);
      $(".addtask-btn").removeAttr("id");
      $(".addtask-btn").addClass("addtask-error")
      $(".tmodal-input").focus();
      return false;
    }
  });

  $("#task-modal-x").click(function () {
    $(".tasks-modal").slideUp();
    $(".body-overlay").fadeOut();
  });

  $(".body-overlay").click(function () {
    $(".tasks-modal").slideUp();
    $(".body-overlay").fadeOut();
  });

  // Lists modal
  $(".list-modal").hide();
  $("#tmodal-p-category").click(function () {
    $(".list-modal").fadeIn();
    $(".list-modal-overlay").fadeIn();
    $("#p-input").prop("checked", true);
  })

  $("input[type=radio]").change(function () {
    if ($(this).attr("value") === "personal") {
      $(".list-modal").fadeOut();
      $(".list-modal-overlay").fadeOut();
      $("#tmodal-p-category").html("Personal");
      $("#quick-add-head").html("Personal");
      $("#quick-input").focus();
    } else if ($(this).attr("value") === "work") {
      $(".list-modal").fadeOut();
      $(".list-modal-overlay").fadeOut();
      $("#tmodal-p-category").html("Work");
      $("#quick-add-head").html("Work");
      $("#quick-input").focus();
    } else if ($(this).attr("value") === "shop") {
      $(".list-modal").fadeOut();
      $(".list-modal-overlay").fadeOut();
      $("#tmodal-p-category").html("Shopping-list");
      $("#quick-add-head").html("Shopping-list");
      $("#quick-input").focus();
    } else if ($(this).attr("value") === "add") {
      $(".list-modal").fadeOut();
      $(".list-modal-overlay").fadeOut();
      $(".tasks-modal").slideUp();
      $(".body-overlay").fadeOut();
      $("#l-angle-down").toggle();
      $("#l-angle-up").toggle();
      $("#list-plus").toggle();
      $(".tlist-links").slideToggle();
      $("#list").css("background-color", "rgb(243, 243, 243)");
      $("#calendar").css("background-color", "transparent");
      $("#shortcut").css("background-color", "transparent");
      $("#tags").css("background-color", "transparent");
      $("#add-tlist-links").slideDown();
      $("#add-tlist-btn").slideDown();
      $("#add-tlist-links").focus();
    }
  });

  $("#l-modal-x").click(function () {
    $(".list-modal").fadeOut();
    $(".list-modal-overlay").fadeOut();
  });

  $(".list-modal-overlay").click(function () {
    $(".list-modal").fadeOut();
    $(".list-modal-overlay").fadeOut();
  });

  // Task reminder buttons
  $("#r-tomorrow").click(function () {
    $(this).removeClass("remind-btn");
    $(this).addClass("remind-btn-active");
    $("#t-bell").removeClass("remind-bell");
    $("#t-bell").addClass("remind-bell-active");
    $("#n-w-bell").addClass("remind-bell");
    $("#n-w-bell").removeClass("remind-bell-active");
    $("#c-bell").addClass("remind-bell");
    $("#c-bell").removeClass("remind-bell-active");
    $("#s-bell").addClass("remind-bell");
    $("#s-bell").removeClass("remind-bell-active");
    $("#r-n-week").addClass("remind-btn");
    $("#r-n-week").removeClass("remind-btn-active");
    $("#r-custom").addClass("remind-btn");
    $("#r-custom").removeClass("remind-btn-active");
    $("#r-someday").addClass("remind-btn");
    $("#r-someday").removeClass("remind-btn-active");
  });

  $("#r-n-week").click(function () {
    $(this).removeClass("remind-btn");
    $(this).addClass("remind-btn-active");
    $("#n-w-bell").removeClass("remind-bell");
    $("#n-w-bell").addClass("remind-bell-active");
    $("#t-bell").addClass("remind-bell");
    $("#t-bell").removeClass("remind-bell-active");
    $("#c-bell").addClass("remind-bell");
    $("#c-bell").removeClass("remind-bell-active");
    $("#s-bell").addClass("remind-bell");
    $("#s-bell").removeClass("remind-bell-active");
    $("#r-tomorrow").addClass("remind-btn");
    $("#r-tomorrow").removeClass("remind-btn-active");
    $("#r-custom").addClass("remind-btn");
    $("#r-custom").removeClass("remind-btn-active");
    $("#r-someday").addClass("remind-btn");
    $("#r-someday").removeClass("remind-btn-active");
  });

  $("#r-custom").click(function () {
    $(this).removeClass("remind-btn");
    $(this).addClass("remind-btn-active");
    $("#c-bell").removeClass("remind-bell");
    $("#c-bell").addClass("remind-bell-active");
    $("#t-bell").addClass("remind-bell");
    $("#t-bell").removeClass("remind-bell-active");
    $("#n-w-bell").addClass("remind-bell");
    $("#n-w-bell").removeClass("remind-bell-active");
    $("#s-bell").addClass("remind-bell");
    $("#s-bell").removeClass("remind-bell-active");
    $("#r-tomorrow").addClass("remind-btn");
    $("#r-tomorrow").removeClass("remind-btn-active");
    $("#r-n-week").addClass("remind-btn");
    $("#r-n-week").removeClass("remind-btn-active");
    $("#r-someday").addClass("remind-btn");
    $("#r-someday").removeClass("remind-btn-active");
  });

  $("#r-someday").click(function () {
    $(this).removeClass("remind-btn");
    $(this).addClass("remind-btn-active");
    $("#s-bell").removeClass("remind-bell");
    $("#s-bell").addClass("remind-bell-active");
    $("#t-bell").addClass("remind-bell");
    $("#t-bell").removeClass("remind-bell-active");
    $("#n-w-bell").addClass("remind-bell");
    $("#n-w-bell").removeClass("remind-bell-active");
    $("#c-bell").addClass("remind-bell");
    $("#c-bell").removeClass("remind-bell-active");
    $("#r-tomorrow").addClass("remind-btn");
    $("#r-tomorrow").removeClass("remind-btn-active");
    $("#r-n-week").addClass("remind-btn");
    $("#r-n-week").removeClass("remind-btn-active");
    $("#r-custom").addClass("remind-btn");
    $("#r-custom").removeClass("remind-btn-active");
  });

  // Tasks form validation
  $(".task-form").submit(function (event) {
    event.preventDefault();

    if ($(".tmodal-input").val() === null || $(".tmodal-input").val() === "") {
      $(".tmodal-input").removeAttr("id");
      $(".tmodal-input").addClass("tmodal-error");
      $(".tmodal-input").focus();
      $("#addtask-btn").attr("disabled", true);
      return false;
    } else {
      var task = document.getElementById("tmodal-input").value;
      var notes = document.getElementById("tmodal-textarea").value;
      $(".my-tasks").append("<li><input type = checkbox  id=task-add-input>" + task + "<br/>" + notes + "</li>");
      $(".quick-add-form").trigger("reset");
      $(".tasks-modal").slideUp();
      $(".body-overlay").fadeOut();
      $(".task-form").trigger("reset");
    }
  });

  $(".tmodal-input").on("input", function () {
    if ($(".tmodal-input").val() === null || $(".tmodal-input").val() === "") {
      $(".addtask-btn").attr("disabled", true);
      $(".addtask-btn").removeAttr("id");
      $(".addtask-btn").addClass("addtask-error");
      $(".tmodal-input").focus();
      return false;
    } else {
      $(".addtask-btn").attr("disabled", false);
      $(".addtask-btn").attr("id", "addtask-btn");
      $(".addtask-btn").removeClass("addtask-error");
    }
  });


  // Add tasks
  if ($("#quick-input").val() === null || $("#quick-input").val() === "") {
    $("#arrow-circle-up").prop("disabled", true);
    $("#arrow-circle-up").removeClass("arrow-circle-up");
    $("#arrow-circle-up").addClass("arrow-up-error");
  } else {
    $("#arrow-circle-up").prop("disabled", false);
    $("#arrow-circle-up").addClass("arrow-circle-up");
    $("#arrow-circle-up").removeClass("arrow-up-error");
  }

  $("#quick-input").on("click", function () {
    $(".list-modal").fadeIn();
    $(".list-modal-overlay").fadeIn();
  })

  $("#quick-input").on("focus", function () {
    if ($(this).val() === null || $(this).val() === "") {
      $("#arrow-circle-up").prop("disabled", true);
      $("#arrow-circle-up").removeClass("arrow-circle-up");
      $("#arrow-circle-up").addClass("arrow-up-error");
    } else {
      $("#arrow-circle-up").prop("disabled", false);
      $("#arrow-circle-up").addClass("arrow-circle-up");
      $("#arrow-circle-up").removeClass("arrow-up-error");
    }
  })

  $("#quick-input").on("input", function () {
    if ($(this).val() === null || $(this).val() === "") {
      $("#arrow-circle-up").prop("disabled", true);
      $("#arrow-circle-up").removeClass("arrow-circle-up");
      $("#arrow-circle-up").addClass("arrow-up-error");
    } else {
      $("#arrow-circle-up").prop("disabled", false);
      $("#arrow-circle-up").addClass("arrow-circle-up");
      $("#arrow-circle-up").removeClass("arrow-up-error");
    }
  });

  $(".t-tags-links a").click(function () {
    $("#task-top-head").html("Priority").css("color", "blue");
  });

  $("#arrow-circle-up").click(function () {
    var taskQuick = document.getElementById("quick-input").value;
    $(".my-tasks").append("<li><input type = checkbox  id=quick-add-input>" + taskQuick + "</li>");
    $(".quick-add-form").trigger("reset");
  });


});