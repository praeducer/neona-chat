(function () {
    'use strict';

    module.exports = function (GLOBAL, gulp) {

        var imagemin = require('gulp-imagemin');
        var pngquant = require('imagemin-pngquant');

        return function () {
            gulp.src(GLOBAL.dirs.assets + 'images/**/*')
                .pipe(imagemin({
                    progressive: true,
                    use: [pngquant()]
                }))
                .pipe(gulp.dest(GLOBAL.dirs.assets + 'images'));
        };
    };
})();
