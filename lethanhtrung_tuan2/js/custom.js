jQuery(document).ready(function($){
	$('.primary-nav-triggle').on('click', function(){
		$('.menu-icon').toggleClass('is-clicked'); 
		$('.header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.primary-nav').hasClass('is-visible') ) {
			$('.primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});
});


$(document).ready(function(){
	$('.slider-best-seller').bxSlider({
		minSlides: 1,
  		maxSlides: 1,
  		slideMargin: 35,
  		autoheight: false,
		auto: true,
  		autoControls: true,
  		controls : true,
  		stopAutoOnClick: true,
  		pager: true,
  		slideWidth: 200,
	});
});