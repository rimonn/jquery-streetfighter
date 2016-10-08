/**  Scripts For "jQuery Streetfighter"
 *
 * @autor NadavRimon
 */

$(document).ready(function() {

    //handle ryu according to mouse events
    $('.ryu').mouseenter(function() {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-action').hide();
        $('.ryu-still').show();
    })
    .mousedown(function() {
        playHadouken();
        $('.ryu-action').hide();
        $('.ryu-throwing').show();

        $('.hadouken').finish().show()
            .animate(
                {'left': '1020px'},
                500,
                function() {
                    $('.hadouken').hide();
                    $('.hadouken').css('left', '588px');
                }
            );
    })
    .mouseup(function() {
        $('.ryu-action').hide();
        $('.ryu-ready').show();
    });
});

$(document).keydown(function(event) {
    //when clicking 'X'
    if (event.which === 88){
        $('.ryu-action').hide();
        $('.ryu-cool').show();
    }
});

$(document).keyup(function(event) {
    //when releasing 'X'
    if (event.which === 88){
        $('.ryu-action').hide();
        $('.ryu-still').show();
    }
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}