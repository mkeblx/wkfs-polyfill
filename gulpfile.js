var gulp = require('gulp'),
    rename = require('gulp-rename'),
    log = require('fancy-log'),
    size = require('gulp-size'),
    uglify = require('gulp-uglify');

function copy() {
  const s = size({pretty: true, showFiles: true});

  return gulp.src('src/index.js')
    .pipe(s)
    .pipe(rename('wkfs.polyfill.js'))
    .pipe(gulp.dest('dist'))
    .on('end', function(){
      log('copied to dist/wkfs.polyfill.js');
    });
};

function compress() {
  const s = size({pretty: true, showFiles: true});

  return gulp.src('dist/wkfs.polyfill.js')
    .pipe(uglify({
      compress:{
        drop_console: true
      }
    }))
    .pipe(rename('wkfs.polyfill.min.js'))
    .pipe(s)
    .pipe(gulp.dest('dist'))
    .on('end', function(){
      log('compressed to dist/wkfs.polyfill.min.js');
      });
}

var defaultTasks = gulp.series(copy, compress);

exports.default = defaultTasks;