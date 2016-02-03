$(document).ready(function() {

  // detect scroll (for header)
  function fixedHeader() {
    if(!$(window).scrollTop() == 0) {
      $('.header').addClass('is-fixed');
    } else {
      $('.header').removeClass('is-fixed');
    }
  }
  fixedHeader();
  $(window).scroll(function(){
    fixedHeader();
  });

});