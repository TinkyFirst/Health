const modal = document.getElementById("fistBlock");
const modalSecond = document.getElementById("secondBlock");
var input = document.querySelector("#phone");
// поиск всех кнопок
const btnModal = document.getElementById("firstBlockOpen"),
    headerModal = document.querySelector('a.buy-number'),
    footerModal = document.querySelector('button.callback'),
    freeСonsultationHeader_PC = document.querySelector('.btn-consulting-pc'),
    freeСonsultationFooter = document.querySelector('.btn-footer'),
    freeСonsultationHeader_Mobile = document.querySelector('.btn-consulting-mobile'),
    bthModal_2 = document.querySelector('button.Btn-section');
    btnChoice = document.querySelector('.btn-choice');
     var header = document.querySelector('.headerMenu');
    var headerNumber = document.querySelector('.phone');
    var headerIcon = document.querySelector('.phone-icon');
    var BuyNumber = document.querySelector('.buy-number');
    var BtnConsulting = document.querySelector('.btn-consulting-mobile');
    var BtnConsultingPc = document.querySelector('.btn-consulting-pc');
    var PhoneHeader = document.querySelector('.phone-header')
    var Line = document.querySelector('.line')
    
const exit = document.getElementById("closeBtn");
const exitSecond = document.getElementById("closeBtnSecond");
const submitExit = document.getElementById("submitBtn");
console.log(bthModal_2);


function openModal() {
    document.body.style.overflow = "hidden";
    modalSecond.style.display = "block";
}

function openModal() {
    // добавляю стили для убирание скролла
    document.body.style.overflow = "hidden";
    // Первоначальный текст модального окна
    document.querySelector('.first-block-description').textContent = 'Введите Ваше имя и номер телефона в поле ниже, и наш менеджер свяжется с вами в ближайшее время';
    document.querySelector('h1.first-block-name').textContent = 'Оставьте заявку';
     document.querySelector('.input-bottom-block').textContent = 'Оставить заявку';
    // добавление класс для затемнения
    document.querySelector(".modal_to_order").classList.add('modal_content');

    modal.style.display = "block";
    header.classList.remove('headerMenu-fixed');
        headerNumber.classList.remove('phone-fixed');
        headerIcon.classList.remove('phone-icon-fix');
        BuyNumber.classList.remove('buy-number-fixed');
        BtnConsulting.classList.remove('btn-consulting-mobile-fixed');
        BtnConsultingPc.classList.remove('btn-consulting-pc-fixed');
        Line.classList.remove('line-fix');
}
exitSecond.onclick = function () {
        document.querySelector(".modal_to_thanks").classList.remove('modal_content');
        modalSecond.style.display = "none";
         document.body.removeAttribute('style');
        
}
exit.onclick = function () {
    // добавляю скролл
    document.body.removeAttribute('style');
    // удаляю затемнение
    document.querySelector(".modal_to_order").classList.remove('modal_content');

    
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// отправка номера телефона с кодом страны
submitExit.addEventListener('click', () => {
// ищу код страны
    let regionNumberPhone = document.querySelector('.iti__selected-dial-code');
    // добавляю код страны к обыному номеру
    let phone_number = `${regionNumberPhone.textContent}${input.value}`;
    // интуп = номеру телефона с кодом странны
    input.value = phone_number;
});

submitExit.onclick = function () {
    // тоже самое что и в exit
   
    document.querySelector(".modal_to_order").classList.remove('modal_content');
    modal.style.display = "none";
    modalSecond.style.display = "block";
    document.querySelector(".modal_to_thanks").classList.add('modal_content');
    document.body.style.overflow = "hidden";
    header.classList.remove('headerMenu-fixed');
        headerNumber.classList.remove('phone-fixed');
        headerIcon.classList.remove('phone-icon-fix');
        BuyNumber.classList.remove('buy-number-fixed');
        BtnConsulting.classList.remove('btn-consulting-mobile-fixed');
        BtnConsultingPc.classList.remove('btn-consulting-pc-fixed');
        Line.classList.remove('line-fix');

};
// активация формы на кнопки
btnModal.addEventListener('click', () =>{
    // функция открытия модального окна
    openModal();
    // сбрасывание значение инпута
    input.value='';
});
btnChoice.addEventListener('click', () =>{
    // функция открытия модального окна
    openModal();
    // сбрасывание значение инпута
    input.value='';
    document.querySelector('btn-choice').textContent = 'оставьте заявку';
    document.querySelector('.input-bottom-block').textContent = 'Оставить заявку';
});

headerModal.addEventListener("click", () => {
    openModal();
    input.value='';
    // название определенной кнопки
    document.querySelector('h1.first-block-name').textContent = 'закажите звонок';
    document.querySelector('.input-bottom-block').textContent = 'Заказать звонок';
});
footerModal.addEventListener('click', () => {
    openModal();
    input.value='';
    document.querySelector('h1.first-block-name').textContent = 'закажите звонок';
    document.querySelector('.input-bottom-block').textContent = 'Заказать звонок';
});
freeСonsultationHeader_PC.addEventListener('click', () => {
    openModal();
    input.value='';
    document.querySelector('.first-block-description').textContent = 'Мы всегда рады помочь Вам сделать правильный выбор. Введите Ваше имя и номер телефона в поле ниже, и наш менеджер ответит на все Ваши вопросы абсолютно бесплатно';
    document.querySelector('h1.first-block-name').textContent = 'получите бесплатную консультацию';
    document.querySelector('.input-bottom-block').textContent = 'Получить консультацию';

});
freeСonsultationHeader_Mobile.addEventListener('click', () => {
    openModal();
    input.value='';
    document.querySelector('.first-block-description').textContent = 'Мы всегда рады помочь Вам сделать правильный выбор. Введите Ваше имя и номер телефона в поле ниже, и наш менеджер ответит на все Ваши вопросы абсолютно бесплатно';
    document.querySelector('h1.first-block-name').textContent = 'получите бесплатную консультацию';
    document.querySelector('.input-bottom-block').textContent = 'Получить консультацию';
});
freeСonsultationFooter.addEventListener('click', () => {
    openModal();
    input.value='';
    document.querySelector('h1.first-block-name').textContent = 'получите бесплатную консультацию';
    document.querySelector('.first-block-description').textContent = 'Мы всегда рады помочь Вам сделать правильный выбор. Введите Ваше имя и номер телефона в поле ниже, и наш менеджер ответит на все Ваши вопросы абсолютно бесплатно';
    document.querySelector('.input-bottom-block').textContent = 'Получить консультацию';

});
bthModal_2.addEventListener('click', ()=>{
    input.value='';
    openModal();
});
