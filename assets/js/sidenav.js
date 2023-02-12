
function openNav() {
	document.getElementById("mainSidenav").style.width = "250px";
	document.getElementById("fadeBlack").style.opacity = "0.5";
	document.getElementById("fadeBlack").style['pointer-events'] = 'auto';
	document.getElementById("html").style['overflow-y'] = 'hidden';
}

function closeNav() {
	document.getElementById("mainSidenav").style.width = "0";
	document.getElementById("fadeBlack").style.opacity = "0.0";
	document.getElementById("fadeBlack").style['pointer-events'] = 'none';
	document.getElementById("html").style['overflow-y'] = 'auto';
}