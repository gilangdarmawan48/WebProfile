$ (documen).ready(functional()) {
	var stickyNavTop = $('#top-menu').offset().top;
	var stickyNav = functional(){
		var scrollTop = $(window).scrollTop();
		if (scrollTop > stickyNavTop) {
			$('#top-menu').css({ 'position': 'fixed', 'top':0, 'z-index':9999 });
		} else {
			$('#top-menu').css({ 'position': 'relative' });
		}
	};

	stickyNav();
	$(window).scroll(function() {
		stickyNav();
	});
}