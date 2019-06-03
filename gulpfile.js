var gulp = require('gulp'),
    rename = require('gulp-rename'),
    log = require('fancy-log');

function defaultTask(cb) {
  gulp.src('./src/index.js')
    .pipe(rename('wkfs.polyfill.js'))
    .pipe(gulp.dest('./dist/'));
    log('copied to dist/wkfs.polyfill.js');
    cb();
};

exports.default = defaultTask;