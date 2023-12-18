jQuery(function ($) {

    'use strict';

    // Scrollto
    $(".nav-list .list-item").each( function (i,e){
        let css = '#part-' + (i+1)
        $(this).on('click', function () {
            console.log(css)
            $("html").animate({
                scrollTop: $(css).offset().top
            }, 800);
            return false;
        });
    });

    
});