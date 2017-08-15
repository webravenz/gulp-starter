module.exports = {
	// globals
	browserSync: { // browsersync options (proxy, server, ...)
		proxy: 'http://project.dev'
	},
	reloadFiles: ['./**/*.html', './**/*.php'], // files that reload page when saved

	// js
	jsMain: './js/app.js', // main js file
	jsFiles: './js/**/*.js', // all js files to watch
	jsBuildFolder: './public/assets/js/', // compile js file in this folder
	jsBuildName: 'app.js', // name of js compiles file

	// css
	sassMain: './scss/style.scss', // main scss file
	sassFiles: './scss/**/*.scss', // all sass files to watch
	sassBuildFolder: './public/assets/css/', // compile css file in this folder
	sassBrowsers: ['last 2 versions'] // browser compatibility for autoprefixer
};