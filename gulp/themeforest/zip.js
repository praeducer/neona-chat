(function () {
    'use strict';

    module.exports = function (GLOBAL, gulp) {

        var zip = require('gulp-zip');
        var rename = require('gulp-rename');

        return function () {
            return gulp.src(GLOBAL.dirs.themeforest + '/build/**/*')
                .pipe(zip(GLOBAL.themeName + '.build.zip'))
                .pipe(rename(GLOBAL.themeName + '.build.' + Date.now() + '.zip'))
                .pipe(gulp.dest(GLOBAL.dirs.themeforest));
        };
    };
})();
