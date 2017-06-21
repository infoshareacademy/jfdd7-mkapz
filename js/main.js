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