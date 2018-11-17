module.exports = {
	// globals
	browserSync: { // browsersync options (proxy, server, ...)
		proxy: 'http://project.dev' // project local url
	},
	reloadFiles: ['./**/*.html', './**/*.php'], // files that reload page when saved

	// js
	jsMain: './src/js/main.js', // main js file, set false to disable js compilation
	jsFiles: './src/js/**/*.js', // all js files to watch
	jsBuildFolder: './js/', // compile js file in this folder
	jsBuildName: 'app', // name of js compiled file

	// css
	sassMain: './src/scss/style.scss', // main scss file
	sassFiles: './src/scss/**/*.scss', // all sass files to watch
	sassBuildFolder: './css/', // compile css file in this folder
	sassBuildName: 'app', // name of css compiled file
	sassBrowsers: ['last 2 versions'] // browser compatibility for autoprefixer
};