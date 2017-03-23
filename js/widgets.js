// slider
$(function () {
	var burgerCarousel = $('.burgers-slider').owlCarousel({
		items : 1,
		nav : true,
		navContainer: $('.burger-slider__controls'),
		navText: ['', ''],
		loop: true
	});

	$('.burger-slider__btn_next').on('click', function(e) {
		e.preventDefault();
		burgerCarousel.trigger('next.owl.carousel');
	});

	$('.burger-slider__btn_prev').on('click', function(e) {
		e.preventDefault();
		burgerCarousel.trigger('prev.owl.carousel');
	});
});

//accordion
$(function () {
	$('.team-acco__trigger').on('click', function(e){
	    e.preventDefault();
	    
	    var $this = $(this),
		    item = $this.closest('.team-acco__item'),
		    container = $this.closest('.team-acco'),
		    items = container.find('.team-acco__item'),
		    content = item.find('.team-acco__content'),
		    otherContent = container.find('.team-acco__content');
		
		if (!item.hasClass('active')) {

			items.removeClass('active');
			item.addClass('active');
			otherContent.slideUp();
			content.slideDown();

		} else {

			item.removeClass('active');
			content.slideUp();

		}
	});
});

//horizontal accordion
$(function(){
	$('.menu-acco__trigger').on('click', function(e){
	    e.preventDefault();

		var $this = $(this),
			container = $this.closest('.menu-acco'),
			item = $this.closest('.menu-acco__item'),
			items = container.find('.menu-acco__item'),
			activeItem = items.filter('.active'),
			content = item.find('.menu-acco__content'),
			activeContent = activeItem.find('.menu-acco__content');

		if (!item.hasClass('active')) {

			items.removeClass('active');
			item.addClass('active');

			activeContent.animate({
				'width' : '0px'
			});

			content.animate({
				'width' : '550px'
			});

		} else {

			item.removeClass('active');
			content.animate({
				'width' : '0px'
			});

		}
	});

	// клик вне аккордеона
	$(document).on('click', function (e) {
		var $this = $(e.target);

		if (!$this.closest('.menu-acco').length) {
			$('.menu-acco__content').animate({
				'width' : '0px'
			});

			$('.menu-acco__item').removeClass('active');
		}
	});
});

//input mask
$(function(){
	$('.phone-mask').inputmask('+7 (999) 999 99 99');
});

//fancybox
$(function () {
	$('.review__view').fancybox({
		type: 'inline',
		maxWidth : 460,
		fitToView : false,
		padding : 0
	});
	
	$('.full-review__close').on('click', function(e){
	    e.preventDefault();
		$.fancybox.close();
	});
});