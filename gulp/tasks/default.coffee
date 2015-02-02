gulp  = require 'gulp'

gulp.task 'all', ['del'], ->
	return gulp.start(
			'imagemin'
			'stylus'
			'jade'
			'copy'
			'jscs'
			'jshint'
			'uglify'
		)

gulp.task 'default', ['all', 'browserSync']
