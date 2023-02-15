
$('.accept-btn').click(function () {

    $('.dark-bg').addClass('active');
    $('.pass-check-window').css('zIndex', '1000');
    $('.accept-btn').addClass('pressed');



    $(document).mouseup(function (e) {
        const item = $('.pass-check-window'),
        itemChildren = item.children(),
        itemLabel = $('.form__label'),
        itemLabelChildren = itemLabel.children();

        if (!item.is(e.target) && !itemChildren.is(e.target) && !itemLabelChildren.is(e.target)) {
            $('.dark-bg').removeClass('active');
            $('.pass-check-window').css('zIndex', '1');
            $('.accept-btn').removeClass('pressed');
        }
    })
})





$('.ckeck-btn').click(function () {
    if ($('.form__input').val() == '3578965421') {
        $('.congratulation').addClass('active');
        $('.daisies-img').addClass('active');
        
        
        
        function typing(element) {
            let fullText = element.html(),
                inputText = '',
                letterCount = 0,
                interval = setInterval(function () {
                    inputText += fullText[letterCount]
                    element.html(inputText)
                    letterCount++
        
                    if (inputText === fullText) {
                        clearInterval(interval)
                    }
                }, 150);
        }
        myTimeout = setTimeout(typing($('.congratulation-text')), 5000)
        clearTimeout(myTimeout);
        

        
    } else if($('.form__input').val() == '') {
        $('.form__input').val('так не прокатит...');        
        $('.warnEmpty').addClass('active');
    } else {
        $('.form__input').val('неа, неправильно');        
        $('.warning').addClass('active');
    }
})
$('.form__input').click(function () {
    $('.form__input').val() == '';
    $('.warnEmpty').removeClass('active');       
    $('.warning').removeClass('active');
})

