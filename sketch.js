var numrows = 10;
var numcols = 10;

$(document).ready(
	

	function (){
		drawSquares();		
	
		
		// This will be called if the shake button is pressed
		$("#shake").click(function(){
			$("#main").effect("bounce", {times:2, direction:"down"}, "slow", function(){
				$("body").fadeOut("slow", function(){
					drawSquares();	
				});
			});
			
		});
	

	}
);


// Define and draw out the div squares and how the hovering will work.
function drawSquares(){		

	$('#main').empty();
	$('body').fadeIn();
	// draw them out a row at a time
	for (var rows = 0; rows < numrows; rows++){
		$('#main').append("<div class='rowstart'></div>");
		for (var cols = 0; cols < numcols; cols++){
			$('#main').append("<div class='pixel'></div>");
		}			
	}
		
	var pixelHeight = parseInt($("#main").css("height")) / numrows - 1;
	var pixelWidth = parseInt($("#main").css("width")) / numcols - 1;

	// Setting the pixel height / width needed to be done after the pixels were drawn, it didn't work if done before.		
	$('.pixel').css("height", pixelHeight);
	$('.pixel').css('width', pixelWidth);


	// when hovered over, change the highlighting of the current pixel
	$('.pixel').hover(
		function(){
			$(this).addClass('highlighted')				
		}
	);
}

// Prompt for the edge, and then draws out a new grid of that dimension.
function reset()
{
	var oldValue = numcols;
	numcols = numrows = parseInt(prompt('Enter the number of pixels (1-100):'));	

	if ( !isNaN(numcols) && numcols > 0 && numcols <= 100)
	{
		// it is OK
	}
	else
	{
		alert("You must enter an integer between 0 and 100.");	
		numcols = oldValue;
		numrows = oldValue;
	}

	drawSquares();	
}


