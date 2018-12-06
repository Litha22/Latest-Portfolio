$(document).ready(function() {
    var aparece = function() {
      $('.fadein').each(function(i) {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* Se o objecto está totalmente dentro do screen... faz fade */
        if (bottom_of_window > bottom_of_object) {
          $(this).animate({ 'opacity': '1', 'padding-top': '180px' }, 1000, "easeInOutExpo");
        }
      });
    }
    aparece();
    $(window).scroll(function() {
      aparece();
    });
  })