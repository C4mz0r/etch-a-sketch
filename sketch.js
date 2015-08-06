var numrows = 10;
var numcols = 10;

$(document).ready(
	
	function(){

		alert('drawing');

		// determine how many rows / columns of pixels we will have
		//var numrows = 10;
		//var numcols = 10;
	
		// draw them out a row at a time
		for (var rows = 0; rows < numrows; rows++){
			$('#main').append("<div class='rowstart'></div>");
			for (var cols = 0; cols < numcols; cols++){
				$('#main').append("<div class='pixel'></div>");
			}			
		}

		// determine how big each "pixel" should be on screen by finding out the total dimensions from the parent container.
		// I found that I needed to subtract 1px off of each square to make it fit perfectly into the box, otherwise it would render the last box of each row on to the next line.  
		// I think it may have to do with the fact that I have 1px border on each item and I've already done a 1px shift left (and down), leaving me with 1px on the right of each box. 
		// Anyway, this seems to do the trick.
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


);

function reset()
{
	numcols = numrows = prompt('Enter the number of pixels along each edge');
	console.log(numcols);
	//location.reload();
	$('body').empty();
	jQuery.ready();
	
	
}

function b()
{
	alert('hi');
}
