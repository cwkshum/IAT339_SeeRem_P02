// referenced: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

function toTop() {
  document.documentElement.scrollTop = 0;
}

function dropDown(){
  $('#about-nav').css("display","block")
}

function showMore(){
  $('.new').css("display", "block")
}

function hideMore(){
  $('.new').css("display", "none")
}

// setup = function() {
//
// }

jQuery(document).ready()
