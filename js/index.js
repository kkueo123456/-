(function () {
    //引入导航栏
    $(".indexNav").load('../nav.html')
    $.ajax({
        'url': 'json/banner.json',
        'type': 'get',
        // "dataType": "jsonp",
        'success': function (data) {
            $(data).each(function (index, value) {
                //循环添加轮播图
                $('.carousel-inner').append(`<div class="carousel-item"  data-interval='3500'>
                 <a href="#"> <img src="${value.img}" class="d-block w-100"
                    alt="...">
                    </a> 
            </div>`)
                // 循环添加轮播图下方圆点
                $('.carousel-indicators').append(`<li data-target="#carouselExampleIndicators" data-slide-to="${index}"></li>`)
            })
            // 第一个轮播图添加的类名
            $('.carousel-item').eq(0).addClass('active')
            // 第一个圆点添加的类名
            $('.carousel-indicators li').eq(0).addClass('active')


        }
    })
    //数字增加动画
    // 人数
    let firstMan=100
    let lastMan=167322
    let ManTime=parseInt(lastMan/50)
    var manTimer=setInterval(function(){
        firstMan=firstMan+ManTime
        if(firstMan>=lastMan){
            firstMan=lastMan
            clearInterval(manTimer)
        }
        $('.app-Right-Top .people').html(firstMan+'人')
    },50)
    //金额 
    let moneyNum = 500
    let moneyFinalNum=8625736
    let moneyTime=parseInt(moneyFinalNum/50)
    var timer = setInterval(function () {
          moneyNum=moneyNum+moneyTime
          if(moneyNum>=moneyFinalNum){
              moneyNum=moneyFinalNum
              clearInterval(timer)
          }
          $('.app-Right-Top .num').html(moneyNum+'￥')
    }, 50)
    //直播蒙版
    $('.douyin-women ul li').hover(function () {
        $(this).children(".mengban").css('display', 'block')
    }, function () {
        $(this).children(".mengban").css('display', 'none')

    })
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