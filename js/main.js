
//PARALAKSA W ZAJAWCE//
$(window).scroll(function () {
    var hands2=$(".hands2")
    var offset=$(this).scrollTop();
    hands2.css("bottom",-offset/2);
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
$(window).scroll( function(){
    $('.showcontent').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},500);
        }
    });
});
//SCROLL_FUNCTIONS_END//



//GRA//
$(document).ready(function(){

    var personPos = 385;
    var score = 0;
    var negative = 0;
    $('#oknogry').mouseenter(function() {
        // $("#gameover").hide();
        $('#curtain-left').animate({
                width: '0px'
            },{
                duration: 3000
            }
        ).hide(5000);
        $("#curtain-right").animate({
                width: '0px'
            },{
                duration: 3000
            }
        ).hide(5000);
    });

    $("#game_button").click(function () {
        var intervalId = setInterval(function () {
            if (Math.random() > 0.3) {
                $('#oknogry').append(
                    $('<div><img src="../jfdd7-mkapz/img/rose.png" class="image"/></div>').attr(
                        'class', 'fallingobject'
                    ).css({
                        left: Math.random() * 700
                    }).animate({
                            top: '355px'
                        }, Math.max(3000, Math.random() * 5000), 'linear',
                        function () {
                            var person = $("#person").position().left;
                            var fallingobject = $(".fallingobject").last().position().left;
                            console.log("Person: " + person);
                            console.log("Object: " + fallingobject);
                            if (Math.abs(person - fallingobject) <= 30) {
                                score++;
                            } else {
                                negative++;
                                console.log(negative);
                                if (negative > 2) {
                                    $("#gameover").show();
                                    clearInterval(intervalId);
                                }
                            }
                            $("#score").html(score);
                            $(this).remove();
                        }
                    ));
            } else {
                $('#oknogry').append(
                    $('<div><img src="../jfdd7-mkapz/img/beer.png" class="image"/></div>').attr(
                        'class', 'fallingobject2'
                    ).css({
                        left: Math.random() * 700
                    }).animate({
                            top: '355px'
                        }, Math.max(3000, Math.random() * 5000),
                        function () {
                            var person = $("#person").position().left;
                            var fallingobject2 = $(".fallingobject2").last().position().left;
                            if (Math.abs(person - fallingobject2) <= 30) {
                                score--;
                            }

                            $("#score").html(score);
                            $(this).remove();
                        }
                    )
                );
            }
        }, 5000);
    });

    $("#game_button").click(function () {
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
                personPos = Math.max(0, personPos - 50)
                $('#person').addClass('animate').animate({left: personPos}, 'fast', function () {
                    $('#person').removeClass('animate');
                    }
                );
                break;
            // Right Arrow Pressed
            case 39:
                personPos = Math.min(760, personPos + 50)
                $('#person').addClass('animate').animate({left: personPos}, 'fast', function () {
                    $('#person').removeClass('animate');
                    }
                );
                break;
        }
    });
});

//przekierowanie do gry
$('#formularz').submit(function(event){
    event.preventDefault();
    $('.game').addClass('game-on');
    $('.sekcja4').hide(500);
     $('html, body').animate({
             scrollTop: $('.game').offset().top
         },2000);
    });
