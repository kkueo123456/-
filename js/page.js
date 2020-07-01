(function () {
    //引入导航栏
    $(".indexNav").load('../nav.html')
    $(".footer").load('../footer.html')
    let get = window.location.search
    let id = get.substring(4)
    $.ajax({
        'url': 'http://192.168.0.249:8001/html/ArticleDetails',
        'type': 'get',
        'dataType': 'json',
        data: {
            id: id
        },
        'success': function (data) {
            console.log(data)
            //设置时间
            let Time = data.Data[0].ShowDateTime
            let reg = /[^0-9]/ig //表示匹配^非 0-9的全部字符，全局不区分大小写
            let getTime = Time.replace(reg, "")
            let showTime = new Date(parseInt(getTime)).toLocaleString()
            //如果id存在做的操作
            if (id) {
                //文章内容
                $('.page-main').html(data.Data[0].ContentText)
                //发布时间
                $('.pageTit .pageTime').html(showTime)
                // 阅读量
                $('.pageTit .pageview').html(data.Data[0].Pageviews)
                // 标题
                $(".pageTit .tit").html(data.Data[0].Title)
                //上一篇
                $('.siblings .previous').html(data.Data[1].Title)
                //下一篇
                $('.siblings .next').html(data.Data[2].Title)
                //点击上下篇跳转
                $('.siblings p').click(function () {
                    var index = $(this).index() + 1
                    if (data.Data[index].Id != 0) {
                        $(location).attr('href', '../page.html?id=' + data.Data[index].Id);
                    }
                })
            } else {
                $('.page-main').html('<h4 style="color:red;margin-top:20px;margin-bottom:5%">请从右侧选择文章</h4>')
            }
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
    })
    //右侧导航内容
    $.ajax({
        url: "http://192.168.0.249:8001/html/ActicleList",
        type: "get",
        dataType: "json",
        success: function (data) {
            var listData = data.Data[0].List
            let str = ""
            $(listData).each(function (index, value) {
                str += `<li><div>${value.Title}</div></li>`
            })
            $('.right-list ul').append(str)
            $('.right-list ul').on('click', 'li', function () {
                let listIndex = $(this).index()
                $(location).attr('href', '../page.html?id=' + listData[listIndex].Id);
            })

        }
    })



})()