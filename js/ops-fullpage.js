$(function () {
	$('.maincontent').fullpage({
		verticalCentered : false
	});

	$('.down-arrow').on('click', function(e){
	    e.preventDefault();

		$.fn.fullpage.moveSectionDown();
	});
	
	$('.fixed-menu__link').on('click', function(e){
	    e.preventDefault();

		var $this = $(this),
			href = parseInt($this.attr('href')) + 1;

		$.fn.fullpage.moveTo(href);

		$this.closest('li').addClass('active')
			.siblings()
			.removeClass('active');
	    
	});
});