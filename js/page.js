(function () {
    //引入导航栏
    $(".indexNav").load('../nav.html')
    $(".footer").load('../footer.html')
    // let get = sessionStorage.getItem("index")
    $.ajax({
        // 'url': 'http://192.168.0.7:8001/html/ArticleDetails',
        'url': 'json/page.json',
        'type': 'get',
        'dataType': 'json',
        // data: {
        //     id: get
        // },
        'success': function (data) {

            let get = sessionStorage.getItem("index")
            if (get) {
                $('.page-main').html(data.data1[get].main1)
            }else{
                $('.page-main').html('<h4 style="color:red;margin-top:20px;margin-bottom:5%">请从右侧选择文章</h4>')
            }
            // $('.page-main').html(data.Data[0].ContentText)
        },

    })
    //右侧导航滚动效果
    let chu = $('.right-list').offset().top
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.right-list').offset().top) {
            $('.right-list').css({
                'position': 'fixed',
                'top': 10
            })
        } else if ($(window).scrollTop() < chu) {
            $('.right-list').css({
                'position': 'relative'
            })
        }
        //  else if (($(window).scrollTop() + $('.right-list').innerHeight()) > $('.page-main').innerHeight() + 100) {
        //     $('.right-list').css({
        //         'display': 'none'
        //     })
        // }
    })
    //右侧导航内容
    $.ajax({
        'url': 'json/title.json',
        success: function (data) {
            $(data).each(function (index, value) {
                $('.right-list ul').append(`<li><div>${value.title}</div>
                <p class="ago">2天前</p></li>`)
            })
        }
    })
    //右侧导航点击
    $('.right-list ul').on('click', 'li', function () {
        let Pindex = $(this).index()
        $.ajax({
            'url': 'json/page.json',
            'type': 'get',
            "dataType": "json",
            "success": function (data) {
                $(data).each(function (index, value) {
                    $('.page-main').html(value.data1[Pindex].main1)
                })

            }
        })
    })
    console.log($('title').html())

})()