var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var paths = {
    styles: [
        'static/public/scss/*.scss'
    ]
};

gulp.task('sass', function() {
    return gulp.src(paths.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('static/public/css'));
});

gulp.task('build', ['sass']);

gulp.task('watch', ['build'], function() {
    gulp.watch(paths.styles, ['sass']);
});

gulp.task('default', ['watch']);
