var headerMenu = $('.headerMenu'),
    scrollPrev = 300;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 200 && scrolled > scrollPrev ) {
        headerMenu.addClass('out');
    } else {
        headerMenu.removeClass('out');
    }
    scrollPrev = scrolled;
});
