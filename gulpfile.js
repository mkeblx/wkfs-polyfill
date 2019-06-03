var gulp = require('gulp'),
    rename = require('gulp-rename'),
    log = require('fancy-log'),
    size = require('gulp-size');

function defaultTask(cb) {
  const s = size({pretty: true, showFiles: true});

  gulp.src('./src/index.js')
    .pipe(s)
    .pipe(rename('wkfs.polyfill.js'))
    .pipe(gulp.dest('./dist/'))
    log('copied to dist/wkfs.polyfill.js');
    cb();
};

exports.default = defaultTask;