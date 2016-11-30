(function () {
    'use strict';

    module.exports = function (GLOBAL, gulp) {

        var mainBowerFiles = require('gulp-main-bower-files');

        return function () {
            gulp.src('./bower.json')
                .pipe(mainBowerFiles())
                .pipe(gulp.dest(GLOBAL.dirs.libs));
        };
    };
})();
