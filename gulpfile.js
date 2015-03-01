var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
          }))
        .pipe(gulp.dest('./css'));
});

gulp.task('autoprefixer', function () {
  return gulp.src('./css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass', 'autoprefixer']);
