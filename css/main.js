$(document).ready(function() {
	demoFunction();

	$(window).resize(function(){

	});

	$(window).scroll(function() {

	});
});

function demoFunction(){
	$('p').click(function(){
		$('p').toggleClass('bigger');
		$('body').addClass('bgColor');
	});
}