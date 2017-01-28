var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('static/public/scss/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static/public/css'));
});

gulp.task('build', function() {
    return browserify({
            entries: 'static/public/js/index.jsx',
            extensions: ['.jsx'],
            debug: true
        })
        .transform('babelify', {
            presets: ['es2015', 'react']
        })
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('static/public/js'));
});

gulp.task('watch', ['build', 'sass'], function() {
    gulp.watch('static/public/js/*.jsx', ['build']);
    gulp.watch('static/public/scss/index.scss', ['sass']);
});

gulp.task('default', ['watch']);
