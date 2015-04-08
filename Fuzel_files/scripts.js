jQuery(function($) {

  /* Side Menu */
  var side_menu = $('#side-menu');
  var page = $('#page');
  side_menu.on('show.bs.collapse', function(e) {
    if ($(e.target).is('#side-menu')) {
      page.addClass('menu-showing');
    }
  }).on('hide.bs.collapse', function(e) {
    if ($(e.target).is('#side-menu')) {
      page.removeClass('menu-showing');
      window.scrollTo(0, 0);
    }
  });

  $('#page-overlay').click(function() {
    side_menu.collapse('toggle');
  });


});

jQuery(window).scroll(function(){
  var here = jQuery(window).scrollTop();
  var gioihan = jQuery('#header').height();
  if(here >= gioihan){
    jQuery('#header').addClass('fixed');
  }
  else{
    jQuery('#header').removeClass('fixed');
  }
});