window.onscroll = function showHeader() {
    var header = document.querySelector('.headerMenu');
    var headerNumber = document.querySelector('.phone');
    var headerIcon = document.querySelector('.phone-icon');
    var headerNumber = document.querySelector('.phone');
    var BuyNumber = document.querySelector('.buy-number');
    var BtnConsulting = document.querySelector('.btn-consulting-mobile')

    if (window.pageYOffset > 500) {
        header.classList.add('headerMenu-fixed, header-text-fix');
        headerNumber.classList.add('phone-fixed');
        headerIcon.classList.add('phone-icon-fix');
        BuyNumber.classList.add('buy-number-fixed');
        BtnConsulting.classList.add('btn-consulting-mobile-fixed');

    } else {
        header.classList.add('headerMenu-fixed');
        headerNumber.classList.add('phone-fixed');
        headerIcon.classList.add('phone-icon-fix');
        BuyNumber.classList.add('buy-number-fixed');
        BtnConsulting.classList.add('btn-consulting-mobile-fixed');

    }
}

