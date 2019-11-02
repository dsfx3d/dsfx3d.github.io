const { watch, series } = require('gulp')
const pugOpts = require('./pugrc')
const pugy = require('./.gulp/transpile-pug')
const sassy = require('./.gulp/transpile-scss')

const dev = () => (
  watch('src/**/*', series(pugy('dist/', pugOpts), sassy('dist/static')))
)

exports.dev = dev
exports.build = series(pugy('dist/', pugOpts), sassy('dist/static'))