/* Menu Hoverable Appear */
$(document).ready(function(){
	$('#menuButton').hover(function() {
		$('#menuBoxes').show();
	}, function() {
		$('#menuBoxes').hide();
	});
	$('#menuBoxes').hover(function() {
		$('#menuBoxes').show();
	}, function() {
		$('#menuBoxes').hide();
	});
});
