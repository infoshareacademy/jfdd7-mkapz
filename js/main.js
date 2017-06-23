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
            scrollTop: $( $(this).attr('href') ).offset().top-85
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

//GRA//
$(document).ready(function(){

    var personPos = 385;
    $('#oknogry').mouseenter(function() {
        $('#curtain-left').animate({
                left: '-400px'
            },{
                duration: 3000
            }
        );
        $("#curtain-right").animate({
                left: '785px'
            },{
                duration: 3000
            }
        );
    });

    $("#game_button").click(function () {
        $("#curtain-left").fadeOut('slow');
        $("#curtain-right").fadeOut('slow');
        $("#gametooltip").fadeOut('slow');
        $("#person").animate({
            left: personPos
        },{
            duration: 1000
        });
    });
    $(document).keydown(function(key) {
        if ($('#person').hasClass('animate')){
            return
        }

        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                personPos = Math.max(50, personPos - 30)
                $('#person').addClass('animate').animate({left: personPos}, 'fast', function () {
                    $('#person').removeClass('animate');
                    }
                );
                break;
            // Right Arrow Pressed
            case 39:
                personPos = Math.min(700, personPos + 30)
                $('#person').addClass('animate').animate({left: personPos}, 'fast', function () {
                    $('#person').removeClass('animate');
                    }
                );
                break;
        }
    });
});