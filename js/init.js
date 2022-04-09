(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider();
    $('.scrollspy').scrollSpy();
    $(document).scroll(function () {
		  var $nav = $(".pushpin-demo-nav");
		  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
		});

  }); // end of document ready
})(jQuery); // end of jQuery name space
