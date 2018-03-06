var gulp = require('gulp')

var stylus = require('gulp-stylus')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var connect = require('gulp-connect')

gulp.task('default', function() {
    gulp.run(['connect','watch'])
})

gulp.task('connect', function() {
    connect.server({
        root: './',    
        port:9097,
        livereload: true
    });
});

// 编译stylus
gulp.task('stylus', function() {
    // 读取css文件
    gulp.src('./stylus/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css'))
        .pipe(connect.reload());
})

// 合并压缩 JS
gulp.task('scripts', function() {
    gulp.src('./js/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./dist'))
      .pipe(connect.reload());
  });

// 监听
gulp.task('watch', function() {
    gulp.watch('./stylus/*.styl', ['stylus'])
    gulp.watch('./js/*.js',['scripts'])
})
