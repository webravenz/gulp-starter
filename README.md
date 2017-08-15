# gulp-starter
my default gulp tasks

## configuration

edit `gulp-tasks/config.js`, each value is explained with a comment.

## available tasks

- `sass` : compile sass files for development
- `sass-prod` : compile sass files for production (no sourcemap, compressed output)
- `js`: compile js files for developement
- `js-prod`: compile js files for production (no sourcemap, uglified)
- `prod`: shortuct to compile js + sass for production
- `default` : default task (just launch `gulp` command) compile sass and js for development, launch watch and browsersync
