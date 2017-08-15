let config = require('./config.js'),
		browserify = require('browserify'),
		gulp = require('gulp'),
		sourcemaps = require('gulp-sourcemaps'),
		source = require('vinyl-source-stream'),
		buffer = require('vinyl-buffer'),
		browserSync = require('browser-sync'),
		uglify = require('gulp-uglify');

gulp.task('js', function () {
	return browserify(config.jsMain, {debug: true, extensions: ['es6']})
		.transform("babelify", {presets: ["es2015"]})
		.bundle()
		.on('error', function(err) {
			console.log(err.message);
			this.emit('end');
		})
		.pipe(source(config.jsBuildName))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.jsBuildFolder))
		.pipe(browserSync.reload({stream: true}));
});


gulp.task('js-prod', function () {
	return browserify(config.jsMain, {debug: false, extensions: ['es6']})
		.transform("babelify", {presets: ["es2015"]})
		.bundle()
		.pipe(source(config.jsBuildName))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest(config.jsBuildFolder));
});