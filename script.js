// use a $ to call jQuery functions
// things embedded in $(document).ready() tells the page to 
// wait until the page is finished loading before running the functions inside
// the callback, function (), calls an anonymous function, which can store other functions
$(document).ready(function(){
//call html elements and classes through $('')
//items in the .click function only activates through a mouseclick
	$('.box2').click(function(){
		$('.box2').animate({
			opacity:'.3'
		});
	});	
	//the 2000 in fadeOut means fade out over 2 seconds
	$('.box1').fadeOut(2000);
	$('.box1').fadeIn(1000);
	$('.box3').animate({
		height: '350px'
	},2000);
	$('.box4').click(function(){
		alert("Hello");
	});
});