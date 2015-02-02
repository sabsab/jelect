// (function (window) {
// 	'use strict';

// 	// Setting favicon, title and message on the console
// 	// in debug mode on the local server
// 	if (/localhost|127\.0\.0\.1/.test(window.location.hostname)) {
// 		var
// 			document = window.document,
// 			favicon = document.createElement('link'),
// 			title = document.getElementsByTagName('title')[0],
// 			titleText = 'DEBUG — ' + title.textContent;

// 		favicon.rel = 'icon';
// 		favicon.href = '/debug.ico';
// 		document.head.appendChild(favicon);

// 		title.textContent = titleText;

// 		console.info(titleText);
// 	}
// })(window);
