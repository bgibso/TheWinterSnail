$(document).ready(function() {
    
    interactions();
    variables();
 
    
    $(window).resize(function() {
   
    });
 
    
    $(window).scroll(function() {
 
    });
});

function interactions() {
    $('.jqClick').click(function(){
        $('.ow').toggleClass('moveITL');
        console.log('clicked');
    });
    
}
