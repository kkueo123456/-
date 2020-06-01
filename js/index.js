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
    /*移动广告*/
    $(".brandUl li").hover(function () {
        $(this).find("img").animate({
            "left": "-30px"
        }, 200)
    }, function () {
        $(this).find("img").animate({
            "left": "0px"
        }, 100)
    })
    $(".footer").load('../footer.html')
    //划过蒙版
    $('.video-Left-img').mouseover(function () {
        $(this).children('.hidden-img-wrap').css('display', 'block')
    })
    $('.video-Left-img').mouseout(function () {
        $(this).children('.hidden-img-wrap').css('display', 'none')
    })
})()