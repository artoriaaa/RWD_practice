
jQuery(document).ready(function($) {

	$('.showmenu').click(function(event) {
		event.preventDefault();
		$('body').toggleClass('open');
	});


});