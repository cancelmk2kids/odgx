jQuery(document).ready(function($) {
    $('.navigation a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }
    
    });

    $('#scrollToTop').on('click', function() {
        $('html, body').animate({
            scrollTop: 0 
        }, 500);
    });
});
