
// var WW = $(window).width()
// var WH = $(window).height()



// i want to place the platform to start on the page near the bottom





$(document).on('ready', function() {
  

	$(document).keydown(function(e) {
	 switch(e.which) {
	        case 37: // left
	        $('.platform').animate({left: "-=50px"}, 'fast');
	        console.log('left')
	        break;

	        case 39: // right
	        console.log('right')
	        $('.platform').animate({left: "+=50px"}, 'fast');
	        break;

	        default: return; // exit this handler for other keys
	    }
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	});




});