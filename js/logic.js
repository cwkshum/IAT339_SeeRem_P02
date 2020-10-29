// referenced: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// https://javascript.info/onscroll
window.addEventListener('scroll', function(){
  $('#scrollUpbtn').css("display", "block");
});

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showConfirmation(){
  $('.account-form-container').css("display", "none");
  $('.confirmation-container').css("display", "block");
}

function hideConfirmation(){
  $('.confirmation-container').css("display", "none");
}

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






// function scrollTo(id){
//   if ($(id).length) {
//     var getOffset = $(id).offset().top;
//     var targetDistance = 20;
//     $('html,body').animate({
//       scrollTop: getOffset - targetDistance
//     }, 500);
//   }
// }

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


// setup = function() {
//
// }

jQuery(document).ready()

// from index.html
// <!-- <button onclick="showMore()" class="more-btn" type="button">Learn More</button> -->
//
// <!-- <div class="new">
//   <p>New Text</p>
//   <button onclick="hideMore()" class="close-new">Show Less</button>
// </div> -->
