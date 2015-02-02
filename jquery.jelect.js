/*! jquery.jelect.js v1.0.0 | felixexter | MIT License | https://github.com/CSSSR/jelect/ */
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
		Jelect,
		pluginName = 'jelect';

	$[pluginName] = {
		version: '1.0.0',
		options: {
			classes: {
				containerActive: pluginName + '_state_active',
				currentActive: pluginName + '-current_state_active',
				optionsActive: pluginName + '-options_state_active',
				optionActive: pluginName + '-option_state_active'
			},
			plugins: []
		},
		plugins: {},
		selectors: {
			container: '.js-' + pluginName,
			input: '.js-' + pluginName + '-input',
			current: '.js-' + pluginName + '-current',
			options: '.js-' + pluginName + '-options',
			option: '.js-' + pluginName + '-option'
		},
		keyCode: {
			ENTER: 13,
			ESC: 27
		}
	};

	Jelect = function ($jelect, options) {
		var
			defaults = $[pluginName],
			selectors = defaults.selectors,
			jelect = {
				$jelect: $jelect,
				$jelectCurrent: $jelect.find(selectors.current),
				$jelectOptions: $jelect.find(selectors.options),
				$jelectInput: $jelect.find(selectors.input),
				options: $.extend(true, {}, defaults.options, options || {})
			};

		$.extend(true, this, jelect);

		this.init();
	};

	Jelect.prototype.init = function () {
		var
			_this = this,
			jelect = $[pluginName],
			selectors = jelect.selectors,
			classes = _this.options.classes,
			initVal = _this.val();

		_this.trigger('init');

		// Set init value
		_this.$jelect.val(initVal);

		// Open a dropdown
		_this.$jelectCurrent.on('click ' + pluginName + '.clickCurrent', function () {
			var
				// Select all active containers without current
				$container = $(selectors.container).filter('.' + classes.containerActive).not(_this.$jelect),

				// Select all active options container without current
				$options = $(selectors.options).filter('.' + classes.optionsActive).not(_this.$jelectOptions),

				canRunTrigger = (
					!_this.$jelect.hasClass(classes.containerActive) &&
					!_this.$jelectOptions.hasClass(classes.optionsActive)
				);

			if (canRunTrigger) {
				_this.trigger('beforeOpen');
			}

			// Close all without current
			if ($container.length && $options.length) {
				$container.removeClass(classes.containerActive);
				$options.removeClass(classes.optionsActive);
			}

			// Open or close current
			_this.$jelect.toggleClass(classes.containerActive);
			_this.$jelectOptions.toggleClass(classes.optionsActive);

			if (canRunTrigger) {
				_this.$jelectCurrent.trigger('focus');

				_this.trigger('afterOpen');
			}
		});

		// Select an option
		_this.$jelectOptions.on('click ' + pluginName + '.changeOption', selectors.option, function () {
			var
				$this = $(this),
				currentVal = $this.data('val'),
				currentText = $this.text();

			// Activate a selected option
			$this
				.addClass(classes.optionActive)
				.siblings(selectors.option)
				.removeClass(classes.optionActive);

			// Hide a dropdown
			_this.$jelectOptions.removeClass(classes.optionsActive);

			// Deactivate a Jelect container and fire trigger `jelect.change`
			_this.$jelect
				.val(currentVal)
				.removeClass(classes.containerActive)
				.trigger('jelect.change');

			// Set a current text
			_this.$jelectCurrent
				.text(currentText)
				.attr('data-val', currentVal)
				.trigger('focus');

			// Change the value of input and fire trigger `change`
			_this.$jelectInput
				.val(currentVal)
				.trigger('change');

			_this.trigger('change');
		});

	};

	Jelect.prototype.trigger = function (trigger) {
		var
			_this = this;

		$.each(_this.options.plugins || [], function (i, plugin) {
			plugin = $[pluginName].plugins[plugin];

			if (plugin && plugin[trigger]) {
				plugin[trigger]({
					$jelect: _this.$jelect,
					$jelectCurrent: _this.$jelectCurrent,
					$jelectOptions: _this.$jelectOptions,
					$jelectInput: _this.$jelectInput,
					options: _this.options,
					text: _this.text(),
					val: _this.val()
				});
			}
		});
	};

	Jelect.prototype.text = function () {
		return this.$jelectCurrent.text().trim();
	};

	Jelect.prototype.val = function () {
		return this.$jelect.val();
	};

	// Hide dropdowns when click outside
	$(window.document)
		.on('click ' + pluginName + '.clickOutside', function (event) {
			var
				jelect = $[pluginName],
				selectors = jelect.selectors,
				jelectData,
				classes,
				$target = $(event.target),
				$options = $(selectors.options);

			if (
				!$target.is(selectors.container) &&
				!$target.closest(selectors.container).length
			) {
				jelectData = $options.closest(selectors.container).data('jelect');

				if (!jelectData) {
					return;
				}

				classes = jelectData.options.classes;

				if ($options.hasClass(classes.optionsActive)) {
					$options
						.removeClass(classes.optionsActive)
						.closest(selectors.container)
						.removeClass(classes.containerActive);

					jelectData.trigger('clickOutside');
				}
			}
		})
		.on('keydown ' + pluginName + '.keydown', function (event) {
			var
				$target = $(event.target),
				jelect = $[pluginName],
				keyCode = jelect.keyCode,
				eventKeyCode = event.keyCode,
				selectors = jelect.selectors,
				jelectData,
				classes,
				$options;

			if ($target.is(selectors.current)) {
				jelectData = $target.closest(selectors.container).data(pluginName);
				classes = jelectData.options.classes;
				$options = $target.siblings(selectors.options).filter(':visible');

				switch (eventKeyCode) {
					case keyCode.ENTER: {
						$target.trigger(pluginName + '.clickCurrent');

						event.preventDefault();

						break;
					}

					case keyCode.ESC: {
						if ($options.length) {
							$target.trigger(pluginName + '.clickCurrent');
						}

						$target.trigger('blur');

						break;
					}
				}
			} else if ($target.is(selectors.option)) {
				jelectData = $target.closest(selectors.container).data(pluginName);
				classes = jelectData.options.classes;

				if (eventKeyCode === keyCode.ENTER) {
					$target.trigger(pluginName + '.changeOption');
				}
			}
		});

	$.fn[pluginName] = function (options) {
		var
			_this = this,
			args = arguments;

		// Is the first parameter an object (options), or was omitted,
		// instantiate a new instance of the plugin.
		if (options === undefined || typeof options === 'object') {
			return _this.each(function (i, element) {

				// Only allow the plugin to be instantiated once,
				// so we check that the element has no plugin instantiation yet
				if (!$.data(element, pluginName)) {

					// if it has no instance, create a new one,
					// pass options to our plugin constructor,
					// and store the plugin instance
					// in the elements jQuery data object.
					$.data(element, pluginName, new Jelect($(element), options));
				}
			});

		// If the first parameter is a string and it doesn't start
		// with an underscore or "contains" the `init`-function,
		// treat this as a call to a public method.
		} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

			// Cache the method call
			// to make it possible
			// to return a value
			var returns;

			_this.each(function (i, element) {
				var instance = $.data(element, pluginName);

				// Tests that there's already a plugin-instance
				// and checks that the requested public method exists
				if (instance instanceof Jelect && typeof instance[options] === 'function') {

					// Call the method of our plugin instance,
					// and pass it the supplied arguments.
					returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
				}

				// Allow instances to be destroyed via the 'destroy' method
				if (options === 'destroy') {
					$.data(this, pluginName, null);
				}
			});

			// If the earlier cached method
			// gives a value back return the value,
			// otherwise return this to preserve chainability.
			return returns !== undefined ? returns : _this;
		}
	};

}));
