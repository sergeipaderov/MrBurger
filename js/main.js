$(function () {

	var sections = $('.section'),
		display = $('.maincontent'),
		inScroll = false;

	var scrollToSection = function (sectionEq) {
		var position;

		if (inScroll || sectionEq < 0) return; // eq(-1) берет элемент с конца коллекции

		inScroll = true;

		position = (sections.eq(sectionEq).index() * -100) + '%';

		sections.eq(sectionEq).addClass('active')
			.siblings()
			.removeClass('active');

		display.css({
			'transform' : 'translate3d(0, ' + position + ', 0)'
		});

		setTimeout(function () {
			inScroll = false;

			$('.fixed-menu__item').eq(sectionEq)
				.addClass('active')
				.siblings()
				.removeClass('active');

		}, 1300);
	}

	$('.down-arrow').on('click', function(e){
		e.preventDefault();

		scrollToSection(1);
	});

	$('.fixed-menu__link, .order-link').on('click', function(e){
		e.preventDefault();

		var href = parseInt($(this).attr('href'));

		scrollToSection(href);

	});

	$(document).on({
		wheel : function (e) {
			var deltaY = e.originalEvent.deltaY;
			var activeSection = sections.filter('.active');
			var reqSection;

			if (deltaY > 0) { //скроллим вниз
				reqSection = activeSection.next().index();
			}

			if (deltaY < 0) { //скроллим вверх
				reqSection = activeSection.prev().index();
			}

			scrollToSection(reqSection);
		},

		keydown : function (e) {

			var activeSection = sections.filter('.active');

			if ($(e.target).is('textarea')) return;

			switch (e.keyCode) {
				case 38 : //кнопка вверх
					scrollToSection( activeSection.prev().index());
					break;

				case 40 : // кнопка вниз
					scrollToSection(activeSection.next().index());
					break;
			}
		}
	});
});