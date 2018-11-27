$(document).ready(function() {
	interactions();

	$(window).resize(function(){

	});

	$(window).scroll(function() {

	});
});

function interactions() {
	$('#jqClick').click(function(){
		$('.number5').addClass('moveIT');
		console.log('clicked');
	});
}