$(window).scroll(function () {
    var hands2=$(".hands2")
    var offset=$(this).scrollTop()
    hands2.css("background-position-y",offset/2)
})

