$('#menuButton').click(function() {
	document.getElementById('menuBoxes').classList.toggle("show");
});

window.onclick = function(event) {
	if(!event.target.matches('.menu-modal')) {
		var menuElements = document.getElementById('menuBoxes');
		var i;
		for (i=0; i<menuElements.length; i++) {
			var openMenu = menuElements[i];
			if(openMenu.classList.contains('show')) {
				openMenu.classList.remove('show');
			}
		}
	}
}
