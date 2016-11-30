(function () {
    'use strict';

    module.exports = function (GLOBAL, gulp) {

        var sass = require('gulp-sass');
        var sourcemaps = require('gulp-sourcemaps');

        return function () {
            gulp.src(GLOBAL.dirs.sass + GLOBAL.themeName + '.scss')
                .pipe(sourcemaps.init())
                .pipe(sass({outputStyle: 'expanded'})
                    .on('error', sass.logError))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(GLOBAL.dirs.css))
        }
    }
})();
