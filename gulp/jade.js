(function () {
    'use strict';

    module.exports = function (GLOBAL, gulp) {

        var jade = require('gulp-jade');
        var beautify = require('gulp-jsbeautifier');

        return function () {
            gulp.src([
                '!' + GLOBAL.dirs.jade + 'base.jade',
                GLOBAL.dirs.jade + '*.jade',
                GLOBAL.dirs.jade + '**/*.jade',
                '!' + GLOBAL.dirs.jade + 'sections/*',
                '!' + GLOBAL.dirs.jade + 'layout/*',
                '!' + GLOBAL.dirs.jade + 'projects/*',
                '!' + GLOBAL.dirs.jade + 'posts/*'
            ])
                .pipe(jade())
                .pipe(beautify({
                    html: {
                        indent_char: ' ',
                        indent_size: 4,
                        selector_separator_newline: true,
                        preserveNewlines: false,
                        indent_inner_html: true,
                        unformatted: ['span'],
                        extra_liners: ['section', 'footer'],
                        wrap_line_length: 0
                    }
                }))
                .pipe(gulp.dest('./'));
        };
    };
})();
