// referenced: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

function toTop() {
  document.documentElement.scrollTop = 0;
}

function dropDown(){
  $('#about-nav').css("display","block");
}

function showConfirmation(){
  $('.account-form-container').css("display", "none");
  $('.confirmation-container').css("display", "block");
}

function hideConfirmation(){
  $('.confirmation-container').css("display", "none");
}

function select(){
  // if Trial selected, automatically select corresponding radio button
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
