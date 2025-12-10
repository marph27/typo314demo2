$(document).ready(function() {

  $('.pancake').click(function() {
    $('.mainnav').delay(100).fadeToggle();
    $('.pancake').toggleClass("active");      
    $('body').toggleClass("no-scroll");      
  });
  
});