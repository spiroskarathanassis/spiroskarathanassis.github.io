function displayMenu() {
	var menu = document.getElementById('menuBoxes');
	
	var display = menu.style.display;
	if(display == "none") {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}
}
