let config = require('./config.js'),
	gulp = require('gulp'),
	browserSync = require('browser-sync');

gulp.task('browsersync', function () {
	return browserSync(config.browserSync);
});