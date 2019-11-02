const { src, dest } = require('gulp')
var sass = require('gulp-sass'); 
sass.compiler = require('node-sass');

module.exports = output => {
  return () => src('src/assets/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(output));
}