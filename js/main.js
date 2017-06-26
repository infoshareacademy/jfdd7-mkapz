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


//SMOOTH-SCROLL-BEGIN//
$(document).ready(function () {
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 80
        }, 600);
        return false;
    });
});
//SMOOTH-SCROLL-END//


//FUNCTION_ANIMATION-BEGIN//
$(document).ready(function () {
    $('#animate_1').click(function(){
        $("#animate_1_on").addClass('rotatedown');
    });
});

$(document).ready(function () {
    $('#animate_2').click(function(){
        $("#animate_2_on").addClass('rotatedown');
    });
});

$(document).ready(function () {
    $('#animate_3').click(function(){
        $("#animate_3_on").addClass('rotatedown');
    });
});

$(document).ready(function () {
    $('#animate_4').click(function(){
        $("#animate_4_on").addClass('rotatedown');
    });
});
//FUNCTION_ANIMATION_END//


//SCROLL_FUNCTIONS_BEGIN//

/* Every time the window is scrolled ... */
$(window).scroll( function(){
    $('.showcontent').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){

            $(this).animate({'opacity':'1'},800);

        }

    });

});

//SCROLL_FUNCTIONS_END//

