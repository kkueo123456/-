(function () {
    //引入导航栏
    $(".indexNav").load('../nav.html')
    $(".footer").load('../footer.html')
    var page = 1
    //文章主体分页功能
    changePage()
    changePageNum()

    function changePageNum() {
        $.ajax({
            url: "http://192.168.0.249:8001/html/ActicleList",
            type: "get",
            dataType: "json",
            success: function (data) {
                //判断页码个数
                var len = Math.ceil(data.Data[0].AllCountNum / 8) > 15 ? 15 : Math.ceil(data.Data[0].AllCountNum / 8)
                //形成分页栏
                var str2 = ''
                for (var i = page; i <= len; i++) {
                    str2 += `<span>${i}</span>`
                }
                $('.pagenum2').html(str2)
                // 首个页码增加样式
                $('.pagenum2 span').eq(0).addClass('active2')
                //页码点击时的操作 
                $('.pagenum2').on('click', 'span', function () {
                    page = $(this).html()
                    changePage()
                    console.log(this)
                    $(this).addClass('active2').siblings().removeClass('active2')
                })

            }
        })
    }

    function changePage() {
        $.ajax({
            url: "http://192.168.0.249:8001/html/ActicleList",
            type: "get",
            data: {
                page: page
            },
            dataType: "json",
            success: function (data) {
                var listData = data.Data[0].List
                let str = ""
                $(listData).each(function (index, value) {
                    str += `<li><div class='pageMain-img col-4'><img src='${value.FirstImg}' alt='' class='img-responsive'></div><div class='pageMain-text col-8'><h5>${value.Title}</h5><div class='time'></div></div></li>`
                })
                $('.pageMain-body ul').html(str)
                //点击跳转
                $('.pageMain-body ul').on('click', 'li', function () {
                    let listIndex = $(this).index()
                    let index = sessionStorage.setItem('index', listData[listIndex].Id)
                    $(location).attr('href', '../page.html?id=' + listData[listIndex].Id);
                })
                if (listData == "") {
                    alert("翻过页了，没有这么多页，请跳转回第一页")
                    $('.pageMain-body ul').html('<h4 style="color:red;margin-top:20px;margin-bottom:5%;text-align:center">请跳转回去</h4>')
                }
            }
        })
    }
    $('.pageMain-body .jumpStart').click(function () {
        page = $('.pageJump').val()
        changePage()
        changePageNum()
        $('.pageJump').val("")
    })
    //上一页
    $('.reducePage').click(function () {
        page--
        if (page <= 0) {
            alert('已经是第一页了')
            return
        }
        changePage()
        changePageNum()

    })
    //下一页
    $('.addPage').click(function () {
        page++
        changePage()
        changePageNum()

    })

})()