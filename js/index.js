(function () {
    
    //引入导航栏
    $(".indexNav").load('../nav.html')
    $.ajax({
        'url': './json/banner.json',
        'type': 'get',
        "dataType": "json",
        'success': function (data) {
            $(data).each(function (index, value) {
                //循环添加轮播图
                $('.carousel-inner').append("<div class='carousel-item' data-interval='3500'><a><img src=" + value.img + " class='d-block w-100' alt='二手奢侈品回收'></a></div>")
                // 循环添加轮播图下方圆点
                $('.carousel-indicators').append("<li data-target='#carouselExampleIndicators' data-slide-to=" + index + "></li>")
            })
            // 第一个轮播图添加的类名
            $('.carousel-item').eq(0).addClass('active')
            // 第一个圆点添加的类名
            $('.carousel-indicators li').eq(0).addClass('active')
        }
    })
    //数字增加动画
    // 人数
    var firstMan = 100;
    var lastMan = 167322;
    var ManTime = parseInt(lastMan / 60)
    var manTimer = setInterval(function () {
        firstMan = firstMan + ManTime
        if (firstMan >= lastMan) {
            firstMan = lastMan
            clearInterval(manTimer)
        }
        $('.app-Right-Top .people .jumpNum').html(firstMan)
    }, 50)
    //金额 
    var moneyNum = 500;
    var moneyFinalNum = 8625736;
    var moneyTime = parseInt(moneyFinalNum / 60)
    var timer = setInterval(function () {
        moneyNum = moneyNum + moneyTime
        if (moneyNum >= moneyFinalNum) {
            moneyNum = moneyFinalNum
            clearInterval(timer)
        }
        $('.app-Right-Top .num .jumpNum').html(moneyNum)
    }, 50)
    //直播蒙版
    $('.douyin-women ul li').hover(function () {
        $(this).children(".mengban").css('display', 'block')
    }, function () {
        $(this).children(".mengban").css('display', 'none')

    })
    //跳转文章
    $.ajax({
        'url': 'json/title.json',
        'type': 'get',
        "dataType": "json",
        'success': function (data) {
            $(data).each(function (index, value) {
                $('.news-ul .row').append("<li class='col-lg-6 col-md-6 col-12'><div class='time'><div class='timeTop'>" + value.time + "</div><div class='timeBottom'></div></div><div class='neiRong'><p class='title'>" + value.title + "</p></div></li>")
            })
        }
    })
    $('.news-ul').on('click', 'li', function () {
        sessionStorage.setItem('index', $(this).index())
        // sessionStorage.setItem('index', $(this).index() + 1)

        $(location).attr('href', '../page.html');
    })
    // $('.neiRong .title')
    /*移动广告*/
    // $(".brandUl li").hover(function () {
    //     $(this).find("img").animate({
    //         "left": "-10px"
    //     }, 200)
    // }, function () {
    //     $(this).find("img").animate({
    //         "left": "0px"
    //     }, 100)
    // })
    $(".footer").load('../footer.html')
    //划过蒙版
    $('.video-Left-img').mouseover(function () {
        $(this).children('.hidden-img-wrap').css('display', 'block')
    })
    $('.video-Left-img').mouseout(function () {
        $(this).children('.hidden-img-wrap').css('display', 'none')
    })
})()