/*! jquery.jelect.baron.js v1.0.0 | felixexter | MIT License | https://github.com/CSSSR/jelect/ */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function ($) {

	'use strict';

	var
		pluginName = 'jelect',
		Baron = $.noop;

	$.extend(true, $[pluginName], {
		options: {
			classes: {
				optionsHasScroll: pluginName + '-options_has_scroll'
			}
		},
		selectors: {
			scroller: '.js-' + pluginName + '-scroller',
			scrollbar: '.js-' + pluginName + '-scrollbar'
		},
		keyCode: {
			UP:	38,
			DOWN: 40,
			PAGEUP: 33,
			PAGEDOWN: 34,
			HOME: 36,
			END: 35,
			TAB: 9
		}
	});

	$[pluginName].plugins.baron = {
		init: function (jelect) {
			var selectors = $[pluginName].selectors;

			jelect.$jelectOptions.data('baron', jelect.$jelectOptions.baron({
				root: selectors.options,
				scroller: selectors.scroller,
				bar: selectors.scrollbar,
				barOnCls: jelect.options.classes.optionsHasScroll
			}));
		}
	};

	$(window.document).on('keydown ' + pluginName + '.baron.keydown', function (event) {
		var
			jelect = $[pluginName],
			selectors = jelect.selectors,
			keyCode = jelect.keyCode,
			$options = $(selectors.options).filter(':visible'),
			$scroller = $options.find(selectors.scroller),
			$container = $scroller.closest(selectors.container),
			jelectData = $container.data(pluginName),
			baronData = $options.data('baron'),
			classes,
			$option,
			$optionActive,
			$optionFocused,
			$optionCurrent,
			$optionPrev,
			$optionNext;

		if (jelectData && baronData) {
			$option = $scroller.find(selectors.option);
			classes = jelectData.options.classes;

			$optionFocused = $option.filter(':focus');
			$optionActive = $option.filter('.' + classes.optionActive);

			$optionCurrent = $optionFocused.length ? $optionFocused : $optionActive;

			switch (event.keyCode) {
				case keyCode.PAGEUP:
				case keyCode.UP: {
					$optionPrev = $optionCurrent.prev(selectors.option);

					if ($optionPrev.length) {
						$optionPrev.trigger('focus');
						$scroller.scrollTop($optionPrev.position().top + $scroller.scrollTop());

						event.preventDefault();
					}

					break;
				}

				case keyCode.PAGEDOWN:
				case keyCode.DOWN: {
					$optionNext = $optionCurrent.next(selectors.option);

					if ($optionNext.length) {
						$optionNext.trigger('focus');
						$scroller.scrollTop($optionNext.position().top + $scroller.scrollTop());

						event.preventDefault();
					}

					break;
				}

				case keyCode.TAB: {
					event.preventDefault();
				}
			}
		}
	});

}));
