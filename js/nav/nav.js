(function () {
    $(document).ready(function () {
        $('.navRight ul li a').each(function () {
            // console.log($(this)[0].href)
            // console.log(window.location)
            if ($(this)[0].href == window.location) {
                $(this).addClass('active').siblings().removeClass("active")
            }
        })
    })
    // 滚动改变导航颜色
    $(window).scroll(function () {
        if ($(window).scrollTop() > 48) {
            $('.indexNav').css({
                'background': 'rgba(0, 0, 0, 0.7)',
                'border':'none'
            })
            $('.navLeft .navLeft-logo').css('color', 'white')
            $('.navRight ul li a').css('color', '#ccc')

        } else {
            $('.indexNav').css('background', 'rgb(12,12,12)')
            $('.navLeft .navLeft-logo').css('color', 'white')
            $('.navRight ul li a').css('color', '#ccc')

        }
    })
})()