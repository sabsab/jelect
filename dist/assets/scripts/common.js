$(function () {

	'use strict';

	$.jelect.plugins.custom = {
		init: function () {
			console.log('custom plugin init event');
		},
		beforeOpen: function () {
			console.log('custom plugin beforeOpen event');
		},
		afterOpen: function () {
			console.log('custom plugin afterOpen event');
		},
		change: function () {
			console.log('custom plugin change event');
		},
		clickOutside: function () {
			console.log('custom plugin clickOutside event');
		}
	};

	$('#jelectTool1').jelect({
		plugins: [
			'baron',
			'custom'
		]
	});

	$('#jelectTool2, #jelectTool3').jelect();

	// $('#jelectTool').on('jelect.change', function (event, data) {
	// 	console.log(data.text, data.val);
	// });

});
