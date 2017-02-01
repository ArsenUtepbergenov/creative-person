var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

var paths = {
    styles: [
        'static/public/scss/*.scss'
    ],
    scripts: [
        'static/public/js/*.jsx'
    ]
};

gulp.task('sass', function() {
    return gulp.src(paths.styles)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('static/public/css'));
});

gulp.task('jsx', function() {
    return browserify({
            entries: 'static/public/js/index.jsx',
            extensions: ['.jsx'],
            debug: true
        })
        .transform('babelify', {
            presets: ['es2015', 'react']
        })
        .bundle()
        .pipe(source('scripts.js'))
        .pipe(gulp.dest('static/public/js'));
});

gulp.task('build', ['sass', 'jsx']);

gulp.task('watch', ['build'], function() {
    gulp.watch(paths.styles, ['sass']);
    gulp.watch(paths.scripts, ['jsx']);
});

gulp.task('default', ['watch']);
