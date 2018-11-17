
let config = require('./config.js'),
		gulp = require('gulp'),
		sourcemaps = require('gulp-sourcemaps'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		browserSync = require('browser-sync'),
		rename = require('gulp-rename');

// sass compilation, with sourcemaps
gulp.task('sass', function () {
	return gulp.src(config.sassMain)
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: ['node_modules']
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: config.sassBrowsers
		}))
		.pipe(sourcemaps.write())
		.pipe(rename(config.sassBuildName+'.css'))
		.pipe(gulp.dest(config.sassBuildFolder))
		.pipe(browserSync.reload({stream: true}));
});

// sass prod compilation : no sourcemaps
gulp.task('sass-prod', function () {
	return gulp.src(config.sassMain)
		.pipe(sass({
			outputStyle: 'compressed',
			includePaths: ['node_modules']
		}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: config.sassBrowsers
		}))
		.pipe(rename(config.sassBuildName+'.min.css'))
		.pipe(gulp.dest(config.sassBuildFolder));
});