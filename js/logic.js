// referenced: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// https://javascript.info/onscroll
// https://stackoverflow.com/questions/4884839/how-do-i-get-an-element-to-scroll-into-view-using-jquery
// https://api.jquery.com/offset/

// display the scrollUpbtn after the user has scrolled
window.addEventListener('scroll', function(){
  $('#scrollUpbtn').css("display", "block");
});

// scroll to the top, activated when the scrollUpbtn is clicked
function toTop() {
  document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  $('html, body').animate({scrollTop: 0})
}

// scroll to a particular section
function scrollFunction(string){
  if(string=='confirm'){
    console.log('confirm');
    $('.confirmation-container').css("display", "block");
    var offset = $('.confirmation-container').offset();
    console.log(offset.top);
    $('html, body').animate({scrollTop: offset.top})
  } else if(string=="form"){
    console.log('form');
    var offset = $('.contact-sales-container').offset();
    console.log(offset.top);
    $('html, body').animate({scrollTop: offset.top})
  }
};

// mobile navigation toggle
var nav = 0; // off as default

function changeNav(){
  if(nav == 0 ){
    if($(window).width() <= 560){
  $('.nav-link-section a').css("display", "block");
} else {
  $('.nav-link-section a').css("display", "inline");
  }
  nav = 1;
  // $('mobile-nav').css("order","2");
  // $('nav-link-section').css("order","3");
} else if(nav == 1){
  $('.nav-link-section a').css("display", "none");
  nav = 0
  }
}

// media queries
$(window).resize(function(){
  if($(window).width() >= 560){
    $('.nav-link-section a').css("display", "inline");
  } else if($(window).width() <= 580){
    $('.nav-link-section a').css("display", "block");}
  if($(window).width() >=960){
    nav = 0;
  }
});




// When the user selects a subscription tier, the radio buttons on the form are selected automatically
function fillRadio(string){
  if(string == 'trial') {

    console.log("trial");
    $('input:radio[id=trialRad]').attr('checked', true);
    $('input:radio[id=monthlyRad]').attr('checked', false);
    $('input:radio[id=annualRad]').attr('checked', false);

  } else if(string == 'monthly') {

    console.log("monthly")
    $('input:radio[id=trialRad]').attr('checked', false);
    $('input:radio[id=monthlyRad]').attr('checked', true);
    $('input:radio[id=annualRad]').attr('checked', false);

  } else if(string == 'annual'){

    console.log("annual");
    $('input:radio[id=trialRad]').attr('checked', false);
    $('input:radio[id=monthlyRad]').attr('checked', false);
    $('input:radio[id=annualRad]').attr('checked', true);

  }
}

jQuery(document).ready()
