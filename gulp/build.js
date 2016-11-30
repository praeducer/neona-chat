(function () {
    'use strict';

    module.exports = function (GLOBAL, gulp) {

        var concat = require('gulp-concat');
        var postcss = require('gulp-postcss');
        var mqpacker = require('css-mqpacker');
        var nano = require('gulp-cssnano');
        var rename = require('gulp-rename');

        return function () {
            console.log('Creating ' + GLOBAL.themeName + '.min.css');
            gulp.src([
                GLOBAL.dirs.css + GLOBAL.themeName + '.css',
                GLOBAL.dirs.css + 'linea.css'])
                .pipe(postcss([mqpacker]))
                .pipe(nano({
                    safe: true
                }))
                .pipe(rename({
                    suffix: '.min'
                }))
                .pipe(gulp.dest(GLOBAL.dirs.assets + 'css'));
        };
    };
})();
