!function(scope) {
	'use strict';

	var obj  = {};

	obj.viewport = function () {
		var view = document.querySelectorAll('.viewport');

		for (var i = 0; i < view.length; i++) {
			view[i].style.height = window.innerHeight + 'px';
		}
	}

	obj.init = function () {
		obj.viewport();
	}

	console.log(scope);

	window.addEventListener('resize', function() {
		obj.viewport();
	});

	obj.init();
}(this);

