$(window).scroll(function () {
    var hands2=$(".hands2")
    var offset=$(this).scrollTop();
    hands2.css("background-position-y",offset/2);
    var hands=$(".hands")
    hands.css("background-position-y",offset/1.8);
// })
// $(window).scroll(function () {
//     var offset=$(this).scrollTop()
    var hands1=$(".hands1");
    hands1.css("background-position-y", offset/1.8);
});


// SMOOTH//
$(document).ready(function () {
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top-80
        }, 800);
        return false;
    });
});


$( "#przekierowanie-zainteresowania" ).click(function() {
    $( "#opisdlugi" ).animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 5000, function() {
        // Animation complete.
    });
});