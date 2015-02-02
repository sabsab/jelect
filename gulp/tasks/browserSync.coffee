browserSync = require 'browser-sync'
gulp        = require 'gulp'

gulp.task 'browserSync', ['watch'], ->
	setTimeout(
		->
			browserSync
				files: ['dist/**/*']
				open: false
				port: 9000
				server:
					baseDir: ['dist']
		2000
	)
