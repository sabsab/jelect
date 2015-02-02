gulp = require 'gulp'
jscs = require 'gulp-jscs'

gulp.task 'jscs', ->
	return gulp.src [
			'jquery.jelect.js'
			'jquery.jelect.arrows.js'
			'app/scripts/**/*.js'
			'!app/scripts/libs/**/*'
		]
		.pipe jscs()
