(function() {
	function sizeOfViewPort() {
		var viewport = document.querySelectorAll('.viewport');
		var h = window.innerHeight;

		for (var i = 0; i < viewport.length; i++) {
			viewport[i].style.height = h + 'px';
		}
	};

	function scrollCurrent() {
		var scroll = document.body;
		console.log(scroll);
		if (scroll >= 0 && scroll < 811) {
			console.log(scroll);
			window.history.pushState('localhost:3000', '#home');
		} else if(scroll > 810) {
			console.log(scroll, '#about');
		}
	}


	sizeOfViewPort();

	window.addEventListener('resize', function(){
		sizeOfViewPort();
	});
})();