// one page scroll
$(function() {

	var sections = $('.section'),
			display = $('.maincontent');
			inScroll = false;

	var scrollToSection = function(sectionEq) {
			var position = 0;

			if (!inScroll) {

				inScroll = true;

				position = (sections.eq(sectionEq).index() * -100) + '%';

				sections.eq(sectionEq).addClass('active')
						.siblings().removeClass('active');

				display.css({
					'transform' : 'translate3d(0, ' + position + ', 0)'
				});

				setTimeout(function functionName() {
					inScroll = false;

					$('.fixed-menu__item').eq(sectionEq).addClass('active')
						.siblings().removeClass('active');
				}, 1300)
			}
	}

	$('.wrapper').on("wheel", function(e) {

		var deltaY = e.originalEvent.deltaY;
				activeSection = sections.filter('.active'),
				nextSection = activeSection.next(),
				prevSection = activeSection.prev();

		if (deltaY > 0) {
				if (nextSection.length) {
				scrollToSection(nextSection.index());
			}
		}	else if (deltaY < 0) {
				if (prevSection.length) {
				scrollToSection(prevSection.index());
			}
		}
	});

	$(".down-arrow").on('click', function(e) {
		e.preventDefault();

		scrollToSection(1);
	});

	$('.fixed-menu__link, .nav__link, .order-link').on('click', function(e) {
			e.preventDefault();

			var href = parseInt($(this).attr('href'));

			scrollToSection(href);
	});

	$(document).on('keydown', function(e) {

		var activeSection = sections.filter('.active'),
				nextSection = activeSection.next(),
				prevSection = activeSection.prev();

		if (e.keyCode == 40) {
			if (nextSection.length) {
			scrollToSection(nextSection.index());
			}

		} else if (e.keyCode == 38) {
			if (prevSection.length) {
			scrollToSection(prevSection.index());
			}
		}
	});

});


/* ----- slider ----- */

$(function () {

	var burgerCarousel = $('.burgers-slider').owlCarousel ({
		items: 1,
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


/* ----- vertical acco ----- */

$(function () {

	$('.team-acco__trigger').on('click', function(e) {
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

/* ----- horizontal acco ----- */

	$(function () {
		$('.menu-acco__trigger').on('click', function (e) {
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

				content.animate ({
					'width' : '550px'
				});


			} else {
				item.removeClass('active');
				content.animate ({
					'width' : '0px'
				});
			}
		});

		$(document).on('click', function (e) {
			var $this = $(e.target);

			if (!$this.closest('.menu-acco').length) {
				$('.menu-acco__content').animate ({
					'width' : '0px'
				});

				$('.menu-acco__item').removeClass('active');
			}
	});
});


/* ----- input mask --- */

$(function () {
	$('.phone-mask').inputmask('+7 (999) 999 99 99');
});


/* ----- fancybox ----- */

$(function () {
	$('.review__view').fancybox({
		type: 'inline',
		maxWidth: 460,
		fitToView : false,
		padding: 0
	});

	$('.full-review__close').on('click', function(e) {
		e.preventDefault();
		$.fancybox.close();
	});
});


/* ----- yandex-maps API ----- */

$(function() {
	ymaps.ready(init);
    var myMap;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [59.91815363876071, 30.30557799999997],
            zoom: 11,
            controls: []
        });


        /*var coords = [
        	[59.94554327989287, 30.38935262114668],
        	[59.91142323563909, 30.50024587065841],
        	[59.88693161784606, 30.319658102103713],
        	[59,97033574821672, 30.315194906302924],
        ],

        myCollection = new ymaps.GeoObjectCollection({}, {
            draggable: false,
            preset: 'islands#redIcon',
            iconLayout: 'default#image',
            iconImageHref: './img/icons/map-marker.svg',
        	iconImageSize: [46, 57],
       		iconImageOffset: [-26, -52]

    	});

    	for (var i = 0; i < coords.length; i++) {
    	myCollection.add(new ymaps.Placemark(coords[i]));
		}
		*/



		var myPlacemark = new ymaps.Placemark([59.91815363876071, 30.30557799999997], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/icons/map-marker.svg',
        iconImageSize: [46, 57],
        iconImageOffset: [-26, -52]
    });

        myMap.geoObjects.add(myPlacemark);

        myMap.behaviors.disable('scrollZoom');
    }
});
