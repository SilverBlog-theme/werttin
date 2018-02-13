const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const header = require("gulp-header");

gulp.task('pack-css', () => {
    return gulp.src('source/index.css')
        .pipe(cleanCSS({
            compatibility: {
                colors: {
                    opacity: true
                }
            }}))
        .pipe(gulp.dest('static'));
});

gulp.task('pack-js', () => {
    return gulp.src('source/index.js')
        .pipe(minify({
            ext: {
                min: '.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('static'));
});

gulp.task('default', ['pack-js', 'pack-css']);