(function () {
    'use strict';

    var gm = require('gulp-gm');

    module.exports = function (GLOBAL, gulp) {
        return function () {
            gulp.src([
                GLOBAL.dirs.assets + 'images/*',
                GLOBAL.dirs.assets + 'images/**/*'
            ])
                .pipe(gm(function (gmfile) {
                    console.log('source', gmfile.source);
                    return gmfile.blur(250, 10);
                }))
                .pipe(gulp.dest(GLOBAL.dirs.themeforest + 'build/assets/images/'));
        };
    };
})();
