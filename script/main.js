// Отправка заявки
$(document).ready(function() {
    $('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
        if (document.form.name.value == '' || document.form.phone.value == '' ) {
            valid = false;
            return valid;
        }
        $.ajax({
            type: "POST",
            url: "mail/mail.php",
            data: $(this).serialize()
        }).done(function() {
            // $('.thank-block').fadeIn();
            $(this).find('input').val('');
            $('#form').trigger('reset');
        });
        return false;
    });
});

// Закрыть попап «спасибо»
// $('.exit-block').click(function() { // по клику на крестик
//     $('.thank-block').fadeOut();
// });

// $(document).mouseup(function (e) { // по клику вне попапа
//     var popup = $('.popup');
//     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
//         $('.thank-block').fadeOut();
//     }
// });
