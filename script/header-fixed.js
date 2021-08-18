window.onscroll = function showHeader() {
    var header = document.querySelector('.headerMenu');
    var headerNumber = document.querySelector('.phone');
    var headerIcon = document.querySelector('.phone-icon');
    var BuyNumber = document.querySelector('.buy-number');
    var BtnConsulting = document.querySelector('.btn-consulting-mobile');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var BtnConsultingPc = document.querySelector('.btn-consulting-pc');

    if (window.pageYOffset > 200) {
        header.classList.add('headerMenu-fixed');
        headerNumber.classList.add('phone-fixed');
        headerIcon.classList.add('phone-icon-fix');
        BuyNumber.classList.add('buy-number-fixed');
        BtnConsulting.classList.add('btn-consulting-mobile-fixed');
        BtnConsultingPc.classList.add('btn-consulting-pc-fixed');

    } else {
        header.classList.add('headerMenu-fixed');
        headerNumber.classList.add('phone-fixed');
        headerIcon.classList.add('phone-icon-fix');
        BuyNumber.classList.add('buy-number-fixed');
        BtnConsulting.classList.add('btn-consulting-mobile-fixed');
        BtnConsultingPc.classList.add('btn-consulting-pc-fixed');

    }
    console.log(scrollTop)
}
