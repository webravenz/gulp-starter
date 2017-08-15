
let gulp = require('gulp');

// default task, compile assets and launch watch and browsersync
gulp.task('default', ['js', 'sass', 'watch', 'browsersync']);

// prod task, compile assets for prod (no map files, uglify and minify)
gulp.task('prod', ['js-prod', 'sass-prod']);