jQuery(function ($) {

    'use strict';

    // Scrollto
    $(".nav-list .list-item").each( function (i,e){
        let css = '#part-' + (i+1)
        $(this).on('click', function () {
            $("html").animate({
                scrollTop: $(css).offset().top
            }, 800);
            return false;
        });
    });

    // zoom in image
    $("img").on('click', function () {
        $("#image-window").css('display', 'block');
        console.log(this.src)
        $("#image-window img").attr('src', this.src);
        return false;
    });

    // close image window
    $("#close-btn").on('click', function () {
        $("#image-window").css('display', 'none');
        return false;
    });
    
});