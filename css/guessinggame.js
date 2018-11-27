$(document).ready(function() {
    // run function on initial page load
    coinFlip();
});
 
function coinFlip() {
    var answer = Math.floor(Math.random() * 2) ? 'heads' : 'tails';
    console.log(answer);
    $('#button').click(function() {
        var box = $('input').val();
        console.log(box);
        if (answer == box) {
            $('h1').text(answer + ' is right!');
            $('input').val('');
            $('.click').text('Flip Again?');
            $('#button').click(function() {
                location.reload(true);
            });
        
        } else {
            $('h1').text(box + ' is wrong');
            $('input').val('');
            $('.click').text('Flip Again?');
            $('#button').click(function() {
                location.reload(true);
            });
        }
    });
}