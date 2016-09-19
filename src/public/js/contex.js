
var els = {
	view: null,
	func: null
}

var init = {
	viewport: function() {
		els.view = document.querySelectorAll('.viewport');

		for (var i = 0; i < els.view.length; i++) {
			els.view[i].style.height = window.innerHeight + 'px';
		}
	}
}

init.viewport();



window.addEventListener('resize', function() {
	init.viewport();
});

