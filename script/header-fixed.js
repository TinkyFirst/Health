window.onscroll = function showHeader() {
    var header = document.querySelector('.headerMenu');
    var headerNumber = document.querySelector('.phone');
    var headerIcon = document.querySelector('.phone-icon');
    var BuyNumber = document.querySelector('.buy-number');
    var BtnConsulting = document.querySelector('.btn-consulting-mobile');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var BtnConsultingPc = document.querySelector('.btn-consulting-pc');
    var PhoneHeader = document.querySelector('.phone-header')

    if (window.pageYOffset > 1000) {
        header.classList.add('headerMenu-fixed');
        headerNumber.classList.add('phone-fixed');
        headerIcon.classList.add('phone-icon-fix');
        BuyNumber.classList.add('buy-number-fixed');
        BtnConsulting.classList.add('btn-consulting-mobile-fixed');
        BtnConsultingPc.classList.add('btn-consulting-pc-fixed');
        PhoneHeader.classList.add('phone-header-fixed');


    } else {
        header.classList.remove('headerMenu-fixed');
        headerNumber.classList.remove('phone-fixed');
        headerIcon.classList.remove('phone-icon-fix');
        BuyNumber.classList.remove('buy-number-fixed');
        BtnConsulting.classList.remove('btn-consulting-mobile-fixed');
        BtnConsultingPc.classList.remove('btn-consulting-pc-fixed');

    }
    console.log(scrollTop)
}
