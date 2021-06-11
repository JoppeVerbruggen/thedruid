/*========================================
				Preloader
========================================*/

$(window).on('load',function(){
	$('#status').delay(4000).fadeOut();
	$('#preloader').delay(4250).fadeOut();

    if(!window.location.href.includes('about','aboutme','media','contact','bts')){
        setTimeout(function() {
            $('html').addClass('verticalScrollFalse').removeClass('verticalScrollTrue');
        }, 4250);
    }
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
