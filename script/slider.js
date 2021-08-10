let left = document.getElementById('left');
let right = document.getElementById('right');
let text = document.getElementById('text');
let img = document.getElementById('img');
let days = document.querySelectorAll('.Day')
let days_content = [
    [
        'Прилет (время зависит от выбранного рейса) Трансфер из аэропорта в отель Заселение в отеле на выбор (3, 4, 5 звезд) в Азиатской части Стамбула, район Кадикей (Мода) рядом с набережной Мраморного моря Рекомендуемый маршрут для самостоятельной прогулки и посещения ресторана Связь с организатором в мессенджере',
        './assets/img/img1.png'
    ],
    [
        'Трансфер из отеля в клинику + прохождение медосмотра (чек-ап), время прохождения с 9.30 до 15.00, сопровождение русско-, англо-, украино- говорящего переводчика + рекомендуемый маршрут для самостоятельной прогулки и посещения ресторанов. 📱связь с организатором в мессенджере или в индивидуальном порядке – сопровождение 💃чек-ап включает в себя 1 вид обследования: расширенный женский 🧑‍⚕️отдельно можно заказать консультации других нужных специалистов и другие виды обследований',
        './assets/img/img2.png'
    ],
    [
        '🎁День шоппинг-релакса с гидом – немного истории, неспешные прогулки по старинным улицам Стамбула, бокал крафтового турецкого вина. Вы увидите Стамбульские Елисейские поля, где расположены бутики премиальных турецких дизайнеров. 📱сопровождение организатора',
        './assets/img/img3.png'
    ],
    [
        '🛫трансфер из отеля в аэропорт+отлет 📱связь с организатором в мессенджере',
        './assets/img/img4.png'
    ]
]

let current_slide = 0;

for (let i = 0; i < days.length; i++){
    days[i].addEventListener('click', function (){
        days[current_slide].classList.remove('selected')
        current_slide = i;
        days[current_slide].classList.add('selected')
        text.innerHTML = days_content[current_slide][0]
        img.src = days_content[current_slide][1]
        if (current_slide === 3){
            right.src = './assets/img/arrow-black-right.svg';
        }else {
            right.src = './assets/img/arrow-right.svg';
        }
        if (current_slide === 0){
            left.src = './assets/img/arrow-left.svg';
        }else {
            left.src = './assets/img/arrow-black-left.svg';
        }
    })
}


right.onclick = function () {
    if (current_slide !== 3) {
        days[current_slide].classList.remove('selected')
        current_slide++
        days[current_slide].classList.add('selected')
        text.innerHTML = days_content[current_slide][0]
        img.src = days_content[current_slide][1]
        if (current_slide === 3){
            right.src = './assets/img/arrow-black-right.svg';
        }else {
            right.src = './assets/img/arrow-right.svg';
            left.src = './assets/img/arrow-black-left.svg';
        }
    }
}

left.onclick = function () {
    if (current_slide !== 0) {
        days[current_slide].classList.remove('selected')
        current_slide--
        days[current_slide].classList.add('selected')
        text.innerHTML = days_content[current_slide][0]
        img.src = days_content[current_slide][1]
        if (current_slide === 0){
            left.src = './assets/img/arrow-left.svg';
            right.src = './assets/img/arrow-right.svg';
        }else {
            left.src = './assets/img/arrow-black-left.svg';
        }
    }
}
