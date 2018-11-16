$(document).ready(function() {
    
    interactions();
    variables();
 
    
    $(window).resize(function() {
   
    });
 

    $(window).scroll(function() {
 
    });
});

function interactions() {
    $('.blue').click(function(){
        $('.ow').toggleClass('moveITL');
        console.log('clicked');
    });
    $('.ow').click(function(){
        $('.batman').toggleClass('moveITL');
        console.log('clicked');
    });
    $('.batman').click(function(){
        $('.skyrim').toggleClass('moveITL');
        console.log('clicked');
    });
    $('.skyrim').click(function(){
        $('.bros').toggleClass('moveITL');
        console.log('clicked');
    });
    $('.bros').click(function(){
        $('.Halo').toggleClass('moveITL');
        console.log('clicked');
    });
    $('.Halo').click(function(){
        $('.blue').toggleClass('moveITL');
        console.log('clicked');
    });
    
 
function variables() {
    var h1H = $('h1').height();
    var wH = $(window).height();
    console.log(h1H);
}
