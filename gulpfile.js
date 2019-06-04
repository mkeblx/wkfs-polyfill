var gulp = require('gulp'),
    rename = require('gulp-rename'),
    log = require('fancy-log'),
    size = require('gulp-size'),
    uglify = require('gulp-uglify');

function copy(cb) {
  const s = size({pretty: true, showFiles: true});

  gulp.src('src/index.js')
    .pipe(s)
    .pipe(rename('wkfs.polyfill.js'))
    .pipe(gulp.dest('dist'));

    log('copied to dist/wkfs.polyfill.js');
    cb();
};

function compress(cb) {
  gulp.src('dist/wkfs.polyfill.js')
    .pipe(uglify({
      compress:{
        drop_console: true
      }
    }))
    .pipe(rename('wkfs.polyfill.min.js'))
    .pipe(gulp.dest('dist'));

    log('compressed to dist/wkfs.polyfill.min.js');
    cb();
}

var defaultTasks = gulp.series(copy, compress);

exports.default = defaultTasks;