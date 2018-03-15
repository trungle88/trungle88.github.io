$(document).ready(function(){
	$(".rslides").responsiveSlides({
	  auto: true,             // Boolean: Animate automatically, true or false
	  speed: 500,            // Integer: Speed of the transition, in milliseconds
	  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
	  pager: false,           // Boolean: Show pager, true or false
	  nav: false,             // Boolean: Show navigation, true or false
	  random: false,          // Boolean: Randomize the order of the slides, true or false
	  pause: false,           // Boolean: Pause on hover, true or false
	  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
	  prevText: "Previous",   // String: Text for the "previous" button
	  nextText: "Next",       // String: Text for the "next" button
	  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
	  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
	  manualControls: "",     // Selector: Declare custom pager navigation
	  namespace: "rslides",   // String: Change the default namespace used
	  before: function(){},   // Function: Before callback
	  after: function(){}     // Function: After callback
	});
});
// Back to top
$(document).ready(function(){
	$(window).scroll(function(){
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn();
        }else{
            $('.back-to-top').fadeOut();
        }
    });
	$(".back-to-top").click(function () {
	   $("html, body").animate({scrollTop: 0}, 1000);
	});
});


// validate form

$(document).ready(function(){
	$('#register').on('submit', function(){
		var isValid = true;
		if($('#username').val().match(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/)== null){
			$('#username').next('.error').text('Name is invalid');
			isValid = false;
		}else{
			$('#username').next('.error').text('');
		}

		if($('#email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)== null){
			$('#email').next('.error').text('Email is invalid');
			isValid = false;
		}else{
			$('#email').next('.error').text('');
		}

		if($('#phone').val().match(/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/)== null){
			$('#phone').next('.error').text('Phone is invalid');
			isValid = false;
		}else{
			$('#phone').next('.error').text('');
		}

		if($('#password').val().match(/^([a-zA-Z0-9@*#]{8,100})$/)== null){
			$('#password').next('.error').text('password is invalid');
			isValid = false;
		}else{
			$('#password').next('.error').text('');
		}

		if($('#date').val().match(/^((\d{2}(([02468][048])|([13579][26]))[\-\/\s]?((((0?[13578])|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|([1-2][0-9])))))|(\d{2}(([02468][1235679])|([13579][01345789]))[\-\/\s]?((((0?[13578])|(1[02]))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\-\/\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\-\/\s]?((0?[1-9])|(1[0-9])|(2[0-8]))))))(\s(((0?[1-9])|(1[0-2]))\:([0-5][0-9])((\s)|(\:([0-5][0-9])\s))([AM|PM|am|pm]{2,2})))?$/)== null){
			$('#date').next('.error').text('date is invalid');
			isValid = false;
		}else{
			$('#date').next('.error').text('');
		}
		return isValid;
	});
});



