/**  Scripts For "jQuery Streetfighter"
 *
 * @autor NadavRimon
 */

$(document).ready(function() {

    //ryu container: mouseenter & mouseleave
    $('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    });

});