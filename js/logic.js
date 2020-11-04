// referenced: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// https://javascript.info/onscroll
// https://stackoverflow.com/questions/4884839/how-do-i-get-an-element-to-scroll-into-view-using-jquery
// https://api.jquery.com/offset/

"use strict";

// display the scrollUpbtn after the user has scrolled
window.addEventListener('scroll', function () {
  $('#scrollUpbtn').css("display", "block");
});

// scroll to the top, activated when the scrollUpbtn is clicked
function toTop() {
  $('html, body').animate({scrollTop: 0});
}

// scroll to a particular section
function scrollFunction(string) {
  if (string === 'confirm') {
    // console.log('confirm');
    $('.confirmation-container').css("display", "block");
    var offset = $('.confirmation-container').offset();
    // console.log(offset.top);
    $('html, body').animate({scrollTop: offset.top});
  } else if (string === 'form') {
    // console.log('form');
    var offset = $('.contact-sales-container').offset();
    // console.log(offset.top);
    $('html, body').animate({scrollTop: offset.top});
  }
}

// Change Mobile Nav on button click
var nav = 0; // off as default

function changeNav() {
  if (nav === 0){
    if ($(window).width() <= 960){
      $('.nav-link-section').css("display", "block");
      $('.nav-link-section a').css("display", "block");
      nav = 1;
    }

  } else if (nav === 1){
    $('.nav-link-section a').css("display", "none");
    currentDisplay = "none";
    nav = 0;
  }
}

// Media queries to change mobile navigation if resized
$(window).resize(function() {
  if ($(window).width() <= 960) {
    $('.mobile-nav').css("display", "inline-block");
    $('.nav-link-section a').css("display", "none");
    nav = 0;
  } else if ($(window).width() >= 960) {
    $('.mobile-nav').css("display", "none");
    $('.nav-link-section a').css("display", "inline");
    nav = 0;
  }
});


// When the user selects a subscription tier, the radio buttons on the form are selected automatically
function fillRadio(string) {
  if (string === 'trial') {

    console.log("trial");
    $('input:radio[id=trialRad]').attr('checked', true);
    $('input:radio[id=monthlyRad]').attr('checked', false);
    $('input:radio[id=annualRad]').attr('checked', false);

  } else if (string === 'monthly') {

    console.log("monthly");
    $('input:radio[id=trialRad]').attr('checked', false);
    $('input:radio[id=monthlyRad]').attr('checked', true);
    $('input:radio[id=annualRad]').attr('checked', false);

  } else if (string === 'annual') {

    console.log("annual");
    $('input:radio[id=trialRad]').attr('checked', false);
    $('input:radio[id=monthlyRad]').attr('checked', false);
    $('input:radio[id=annualRad]').attr('checked', true);

  }
}

function validateForm(string) {

  var firstName = document.forms.Form.firstname.value;
  var lastName = document.forms.Form.lastname.value;
  var email = document.forms.Form.email.value;
  // var phone = document.forms.Form.phone.value;
  // var message = document.forms.Form.contactmessage.value;

  if (string === "contact") {
    if(firstName === "" || lastName ==="" || email ==="") {
      // alert("Please fill in all starred (*) fields.")
      return false;
    } else {
      scrollFunction('confirm');
    }
  }

  if (string === "account") {
    var confirmEmail = document.forms.Form.confirmemail.value;
    if(firstName === "" || lastName ==="" || email ==="" || confirmEmail === "") {
      return false;
    } else {
      scrollFunction('confirm');
    }
  }
  if (string === "subscription") {
    var radio = document.forms.Form.radio.value;
    if(firstName === "" || lastName ==="" || email ==="" || phone ==="") {
      return false;
    } else {
      scrollFunction('confirm');
    }
  }

}

jQuery(document).ready();
