gulp = require 'gulp'

gulp.task 'watch', ->
	global.isWatching = true

	gulp.watch [
			'app/images/**/*.{png,jpg,gif}'
			'!app/images/sprite/**/*'
		],
		['imagemin']

	gulp.watch 'app/styles/**/*.styl', ['stylus']

	gulp.watch 'app/templates/pages/*.jade', ->
		global.jadeChanged = true
		gulp.start 'jade'

	gulp.watch [
			'app/templates/**/*.jade'
			'!app/templates/pages/**/*'
		],
		->
			global.jadeChanged = false
			gulp.start 'jade'

	gulp.watch 'app/resources/**/*', ['copy:resources']

	gulp.watch([
			'jquery.jelect.js'
			'jquery.jelect.baron.js'
			'app/scripts/**/*.js'
		], [
			'copy:scripts'
			'jscs'
			'jshint'
			'uglify'
		])
