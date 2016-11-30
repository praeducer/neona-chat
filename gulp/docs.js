(function () {
    'use strict';

    module.exports = function (GLOBAL, gulp) {

        var markdownpdf = require('gulp-markdown-pdf');

        return function () {
            gulp.src(GLOBAL.dirs.docs + '*.md')
                .pipe(markdownpdf())
                .pipe(gulp.dest('documentation'));
        };
    };
})();
