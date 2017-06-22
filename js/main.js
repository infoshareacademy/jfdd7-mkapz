/**
 * Created by lukaszjeziorski on 08.06.17.
 */
/*slider*/

//
$(document).ready(function(){
    $('ul li a').click(function(){
        $('ul li').removeClass("aktywnemenu");
        $(this).parent().addClass("aktywnemenu");
    });
});

