$(document).ready(function() {
    $('.rock, .paper, .lizard, .scissors, .spock').hover(function() {
        $(this).toggleClass('cool');
    });
});