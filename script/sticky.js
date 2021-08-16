var headerMenu = $('.headerMenu'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 100 && scrolled > scrollPrev ) {
        headerMenu.addClass('out');
    } else {
        headerMenu.removeClass('out');
    }
    scrollPrev = scrolled;
});
