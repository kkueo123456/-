(function () {
    $(document).ready(function () {
        $('.navRight ul li a').each(function () {
            // console.log($(this)[0].href)
            // console.log(window.location)
            if ($(this)[0].href == window.location) {
                $(this).addClass('active').siblings().removeClass("active")
                console.log($(this))

            }
        })
    })

})()