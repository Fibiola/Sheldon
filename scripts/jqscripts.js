$(document).ready(function() {
    $('.rock, .paper, .lizard, .scissors, .spock').hover(function() {
        $(this).toggleClass('hover');
     $('.button').hover(function() {
        $(this).toggleClass('hoverButton');
    });
});
});