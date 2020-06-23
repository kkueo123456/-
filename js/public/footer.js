(function () {
    $('.douyin').hover(function () {
        console.log($(this))
        $(this).children('.weCheat-img').css('display', 'block')
    }, function () {
        $(this).children('.weCheat-img').css('display', 'none')
    })

})()