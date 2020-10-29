// referenced: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// https://javascript.info/onscroll

// display the scrollUpbtn after the user has scrolled
window.addEventListener('scroll', function(){
  $('#scrollUpbtn').css("display", "block");
});

// scroll to the top, activated when the scrollUpbtn is clicked
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// mobile navigation toggle
var nav = 0; // off as default

function changeNav(){
  if(nav == 0){
  $('.nav-link-section a').css("display", "inline");
  nav = 1;
  // $('mobile-nav').css("order","2");
  // $('nav-link-section').css("order","3");
} else if(nav == 1){
  $('.nav-link-section a').css("display", "none");
  nav = 0
  }
}

// if nav == 0 and media query match
//   $('.nav-link-section a').css("display", "block");





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
