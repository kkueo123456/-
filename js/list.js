(function () {
    //引入导航栏
    $(".indexNav").load('../nav.html')
    $(".footer").load('../footer.html')
    //    头部划过蒙版
    $('.mb-wrap').hover(function () {
        $(this).children('.list-mengban').animate({
            "opacity": 1
        }, "fast")
    }, function () {
        $(this).children('.list-mengban').animate({
            "opacity": 0
        }, "fast")

    })
    var user = navigator.userAgent
    var Agents = ["Android", "iPhone",
        "SymbianOS",
        "iPad", "iPod"
    ];

    $('.cs').click(function () {
        // for (let i = 0; i < Agents.length; i++) {
        //     console.log(user.indexOf(Agents[i]))
        //     if (user.indexOf(Agents[i]) > 0) {
        //         $(location).attr('href', 'http://www.baidu.com')
        //     } else {
        //         $(location).attr('href', 'http://www.taobao.com')
        //     }
        // }
    
        let a = Agents.map(function (value) {
            return user.indexOf(value)
        })
        let b = a.filter(function (value) {
            return value > 0
        })
        if (b != ''){
            $(location).attr('href', 'http://www.baidu.com')
        }else{
            $(location).attr('href', 'http://www.taobao.com')
        }
    })
})()