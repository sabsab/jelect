gulp    = require 'gulp'
stylish = require 'jshint-stylish'
jshint  = require 'gulp-jshint'

gulp.task 'jshint', ->
	return gulp.src [
			'jquery.jelect.js'
			'jquery.jelect.arrows.js'
			'app/scripts/**/*.js'
			'!app/scripts/libs/**/*'
		]
		.pipe jshint()
		.pipe jshint.reporter 'jshint-stylish'
