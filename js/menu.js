var menu_button = document.getElementById('menu')

menu.onclick = function(e) {
	if(document.body.className != 'menu-open') {
		document.body.className = 'menu-open'
		e.stopPropagation()
	}
}
document.body.onclick = function() {
	if(document.body.className == 'menu-open') {
		document.body.className = ''
	} 
}