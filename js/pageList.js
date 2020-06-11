(function () {
    //引入导航栏
    $(".indexNav").load('../nav.html')
    $(".footer").load('../footer.html')
    //文章主体分页功能
    $.ajax({
        url: "json/page.json",
        type: "get",
        success: function (data) {
            let listData = data.data1
            let page = 1
            let len = Math.ceil(listData.length / 6) //下面分页标签的个数
            for (var i = 1; i <= len; i++) {
                console.log(i)
                $('.pagenum').append(`<span>${i}</span>`)
            }
            $('.pagenum span').eq(0).addClass('active2')
            $('.pagenum').on('click', 'span', function () {
                page = $(this).html()
                changePage()
                $(this).addClass('active2').siblings().removeClass('active2')
            })
            changePage()

            function changePage() {
                let str = ""
                let end = (page * 6) < listData.length ? (page * 6) : listData.length
                for (var l = (page - 1) * 6; l < end; l++) {
                    str += `<li><div class='pageMain-img col-4'><img src='${listData[l].img}' alt='' class='img-responsive'></div><div class='pageMain-text col-8'><h5>${listData[l].title}</h5><div class='time'>${listData[l].time}</div></div></li>`
                }
                $('.pageMain-body ul').html(str)
            }
        }
    })

    //点击跳转
    $('.pageMain-body ul').on('click', 'li', function () {
        let listIndex = $(this).index()
        let index = sessionStorage.setItem('index', listIndex)
        $(location).attr('href', '../page.html');
    })

})()