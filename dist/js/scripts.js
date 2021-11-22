$(function() {
    svg4everybody();

    var $prevIcon = '<button class="slick-arrow slick-prev">' +
        '<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M12.284 23.3L19.2902 16.3C19.4904 16.1 19.6905 16 19.9907 16C20.291 16 20.4911 16.1 20.6913 16.3C21.0916 16.7 21.0916 17.3 20.6913 17.7L15.3864 23L34.9992 23C35.5997 23 36 23.4 36 24C36 24.6 35.5997 25 34.9992 25L15.3864 25L20.6913 30.3C21.0916 30.7 21.0916 31.3 20.6913 31.7C20.291 32.1 19.6905 32.1 19.2902 31.7L12.284 24.7C11.9109 24.3272 11.8998 23.684 12.284 23.3Z"/>' +
        '</svg>' +
    '</button>',
        $nextIcon = '<button class="slick-arrow slick-next">' +
            '<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M35.716 24.7L28.7098 31.7C28.5096 31.9 28.3095 32 28.0093 32C27.709 32 27.5089 31.9 27.3087 31.7C26.9084 31.3 26.9084 30.7 27.3087 30.3L32.6136 25H13.0008C12.4003 25 12 24.6 12 24C12 23.4 12.4003 23 13.0008 23H32.6136L27.3087 17.7C26.9084 17.3 26.9084 16.7 27.3087 16.3C27.709 15.9 28.3095 15.9 28.7098 16.3L35.716 23.3C36.0891 23.6728 36.1002 24.316 35.716 24.7Z"/>' +
            '</svg>' +
        '</button>';

	$('.js-services-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
        prevArrow: $prevIcon,
        nextArrow: $nextIcon,
		dots: false,
		cssEase: 'ease',
		speed: 500,
        infinite: false,
		responsive: [{
            breakpoint: 1405,
            settings: {
                variableWidth: true,
            }
		}, {
            breakpoint: 768,
            settings: 'unslick',
        }],
	});

	$('.js-works-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
        prevArrow: $prevIcon,
        nextArrow: $nextIcon,
		dots: true,
		cssEase: 'ease',
		speed: 500,
        infinite: false,
		responsive: [{
            breakpoint: 1664,
            settings: {
                dots: false,
                variableWidth: true,
            }
		}, {
            breakpoint: 768,
            settings: 'unslick',
        }],
	});

	var isMobile = false,
		justSwitched = false;

	function detectDevice() {
		var temp = isMobile;
		isMobile = !!Modernizr.mq('(max-width: 767px)');
		justSwitched = temp !== isMobile;
	}

    function startApp() {
		detectDevice();
		if ( justSwitched ) {
		}
    }

    startApp();

    var lastWidth = $(window).width();
    $(window).on('resize orientationchange', _.debounce(function() {
        if ( $(window).width() !== lastWidth ) {
            startApp();
            lastWidth = $(window).width();
            $('.js-services-slider, .js-works-slider').slick('resize');
        }
    }, 100));

    var actionItems = [{
        url: './img/male-1.png',
        sex: 'male',
    }, {
        url: './img/male-2.png',
        sex: 'male',
    }, {
        url: './img/male-3.png',
        sex: 'male',
    }, {
        url: './img/female-1.png',
        sex: 'female',
    }, {
        url: './img/female-2.png',
        sex: 'female',
    }, {
        url: './img/female-3.png',
        sex: 'female',
    }];

    var $action = $('.js-action');
    if ($action.length > 0) {
        var random = Math.floor(Math.random() * actionItems.length);

        $action.attr('data-sex', actionItems[random].sex);
        $action
            .find('.js-action-icon')
            .attr('src', actionItems[random].url);
        $action.addClass('is-visible');
    }
});
