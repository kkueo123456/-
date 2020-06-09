(function () {
    //引入导航栏
    $(".indexNav").load('../nav.html')
    $(".footer").load('../footer.html')
    //文章主体
    $.ajax({
        url: "json/page.json",
        type: "get",
        success: function (data) {
            let listData = data.data1
            $(listData).each(function (index, value) {
                $('.pageMain-body ul').append(`<li>
                <div class='pageMain-img col-4'><img src='${value.img}' alt='' class='img-responsive'></div>
                <div class='pageMain-text col-8'>
                    <h5>${value.title}</h5>
                    <div class='time'>${value.time}</div>
                </div>
            </li>`)
            })
        }
    })
    //点击跳转
    $('.pageMain-body ul').on('click', 'li', function () {
        let listIndex = $(this).index()
        let index = sessionStorage.setItem('index',listIndex)
        $(location).attr('href', '../page.html');
    })
})()