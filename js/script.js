/*========================================
				Preloader
========================================*/

$(window).on('load',function(){
	$('#status').delay(4000).fadeOut();
	$('#preloader').delay(4250).fadeOut();
	setTimeout(function() {
       		$('html').addClass('lightbg').removeClass('darkbg'); /* verberg scrollbar */
    	}, 4250);
});

/*========================================
				  Magnifier
========================================*/

$(function() {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
        	enabled: true  /*knoppen links rechts*/
        }
    });
});
