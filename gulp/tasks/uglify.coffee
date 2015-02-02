gulp   = require 'gulp'
uglify = require 'gulp-uglify'
rename = require 'gulp-rename'
paths  = require '../paths'

gulp.task 'uglify', ->
	return gulp.src [
			'jquery.jelect.js'
			'jquery.jelect.baron.js'
		]
		.pipe uglify preserveComments: 'some'
		.pipe rename suffix: '.min'
		.pipe gulp.dest './'
		.pipe gulp.dest paths.scriptsLibs
