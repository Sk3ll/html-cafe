$(function () {
    if($(window).width() < 575) {
        $('.slider').slick({
            lazyLoad: 'ondemand',
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    } else if($(window).width() < 767) {
        $('.slider').slick({
            lazyLoad: 'ondemand',
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
        });
    } else {
        $('.slider').slick({
            lazyLoad: 'ondemand',
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    }
    
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    console.log($(window).width())
});
