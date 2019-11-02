const { src, dest } = require('gulp')
const pug = require('gulp-pug')
var prettify = require('gulp-html-prettify');

module.exports = (output, pugOpts = {}) => {
  return () => (
    src('src/views/*.pug')
      .pipe(pug(pugOpts))
      .pipe(prettify({indent_char: ' ', indent_size: 2}))
      .pipe(dest(output))
  )
}