let config = require('./config.js'),
	gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('watch', function () {
	// save a js file, compile js
	gulp.watch(config.jsFiles, ['js']);

	// save scss file, compile scss
	gulp.watch(config.sassFiles, ['sass']);

	// save html or php file, reload the page
	gulp.watch(config.reloadFiles, function () {
		return gulp.src('')
			.pipe(browserSync.reload({stream: true}))
	});
});