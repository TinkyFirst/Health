let left = document.querySelector('svg.arrow-left');
let right = document.querySelector('svg.arrow-right');
let text = document.getElementById('text');
let img = document.getElementById('img');
let days = document.querySelectorAll('.Day');
let day = document.getElementById('day-tour')
let day_number = [
    [
        'День 1'
    ],
    [
        'День 2'
    ],
    [
        'День 3'
    ],
    [
        'День 4'
    ]
]
let days_content = [
    [
       
        [`<li>Прилет (время зависит от выбранного рейса)</li>`,
            `<li>Трансфер из аэропорта в отель</li>`,
            `<li>Заселение в отеле на выбор (3, 4, 5 звезд) в Азиатской части Стамбула, район Кадикей (Мода) рядом с набережной Мраморного моря</li>`,
            `<li>Рекомендуемый маршрут для самостоятельной прогулки и посещения ресторана</li>`,
            `<li>Связь с организатором в мессенджере</li>`
        ],
        `./assets/img/day1tour2.png`
    ],
    [
        [`<li>Трансфер из отеля в клинику + прохождение медосмотра (чек-ап), время прохождения с 9.30 до 15.00, сопровождение русско-, англо-, украино- говорящего переводчика + рекомендуемый маршрут для самостоятельной прогулки и посещения ресторанов.</li>`,
            `<li>Связь с организатором в мессенджере или в индивидуальном порядке – сопровождение</li>`,
            '<li>Чек-ап включает в себя 1 вид обследования: расширенный женский</li>',
            '<li>Отдельно можно заказать консультации других нужных специалистов и другие виды обследований</li>'
        ],
        `./assets/img/img2.png`
    ],
    [
        [`<li>День шоппинг-релакса с гидом – немного истории, неспешные прогулки по старинным улицам Стамбула, бокал крафтового турецкого вина. Вы увидите Стамбульские Елисейские поля, где расположены бутики премиальных турецких дизайнеров.</li>`,
            `<li> Сопровождение организатора</li>`
        ],
        `./assets/img/img4.png`
    ],
    [
        [`<li>Трансфер из отеля в аэропорт+отлет</li>`,
            `<li>Связь с организатором в мессенджере</li>`],
        `./assets/img/img3.png`
    ]
]
left.querySelector('path').classList.add('svh-arrow-noActive');

let current_slide = 0;
for (let i = 0; i < days.length; i++) {
   
    right.addEventListener('mouseover',() =>{
        if (i== 0) {
            right.querySelector('path').classList.add('svh-arrow-color');
        }
    });
    days[i].addEventListener('click', function () {
       
        img.classList.remove('check-up-img');
        days[current_slide].classList.remove('selected')
        current_slide = i;
        days[current_slide].classList.add('selected')
        day.innerHTML = day_number[current_slide][0]
        day.classList.remove("slider-name");
        text.querySelectorAll('li').forEach((item, a) => {
            
            item.remove();
            if (a == 0) {
                mas_text = days_content[i][0];
                mas_text.forEach(item => {
                    text.insertAdjacentHTML('beforeend', item);
                });
            }

        });
        img.src = days_content[current_slide][1]
        // добавляю  класс для картинки и для текста что бы анимация для всех появлялась
        setInterval(() => {
            img.classList.add('check-up-img');
            day.classList.add("slider-name");
        }, 0);
        // добавляю классы ждя стрелок и удаляю их
        if (current_slide !== 3) {
            right.querySelector('path').classList.remove('svh-arrow-noActive');
            right.querySelector('path').classList.add('svh-arrow-color');
        } else {
            right.querySelector('path').classList.remove('svh-arrow-color');
            right.querySelector('path').classList.add('svh-arrow-noActive');

        }
        if (current_slide === 0) {
            left.querySelector('path').classList.add('svh-arrow-noActive');
            left.querySelector('path').classList.remove('svh-arrow-color');
        } else {
            left.querySelector('path').classList.add('svh-arrow-color');
            left.querySelector('path').classList.remove('svh-arrow-noActive');
        }
    })
}


right.onclick = function () {
    if (current_slide !== 3) {
        img.classList.remove('check-up-img');
        days[current_slide].classList.remove('selected')
        current_slide++
        days[current_slide].classList.add('selected')
        day.classList.remove("slider-name");
        day.innerHTML = day_number[current_slide][0]
        text.querySelectorAll('li').forEach((item, a) => {
            item.remove();
            if (a == 0) {
                mas_text = days_content[current_slide][0];
                mas_text.forEach(item => {
                    text.insertAdjacentHTML('beforeend', item);
                });
            }

        });
        img.src = days_content[current_slide][1]
        setInterval(() => {
            img.classList.add('check-up-img');
            day.classList.add("slider-name");
        }, 0);

    }
    if (current_slide !== 3) {
        left.querySelector('path').classList.add('svh-arrow-color');
        left.querySelector('path').classList.remove('svh-arrow-noActive');
        right.querySelector('path').classList.remove('svh-arrow-noActive');
        right.querySelector('path').classList.add('svh-arrow-color');
    } else {
        right.querySelector('path').classList.remove('svh-arrow-color');
        right.querySelector('path').classList.add('svh-arrow-noActive');
    }
}

left.onclick = function () {
    if (current_slide !== 0) {
        img.classList.remove('check-up-img');
        days[current_slide].classList.remove('selected')
        current_slide--
        days[current_slide].classList.add('selected')
        day.classList.remove("slider-name");
        day.innerHTML = day_number[current_slide][0]
        text.querySelectorAll('li').forEach((item, a) => {
            item.remove();
            if (a == 0) {
                mas_text = days_content[current_slide][0];
                mas_text.forEach(item => {
                    text.insertAdjacentHTML('beforeend', item);
                });
            }
        });
        img.src = days_content[current_slide][1]
        setInterval(() => {
            img.classList.add('check-up-img');
            day.classList.add("slider-name");
        }, 0);
        if (current_slide !== 0) {
            right.querySelector('path').classList.remove('svh-arrow-noActive');
            right.querySelector('path').classList.add('svh-arrow-color');
            left.querySelector('path').classList.add('svh-arrow-color');
            left.querySelector('path').classList.remove('svh-arrow-noActive');
        } else {
            left.querySelector('path').classList.add('svh-arrow-noActive');
            left.querySelector('path').classList.remove('svh-arrow-color');
        }
    }
}
