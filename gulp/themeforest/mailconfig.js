(function () {
    'use strict';

    module.exports = function (GLOBAL, gulp) {

        var replace = require('gulp-replace');

        return function () {
            return gulp.src(['mailer/config.php'])
                .pipe(replace(/(\$my_email = )'(.+)'/, '$1\'my@email.com\''))
                .pipe(replace(/('username' => )'(.+)'/, '$1\'user@gmail.com\''))
                .pipe(replace(/('password' => )'(.+)'/, '$1\'password12345\''))
                .pipe(gulp.dest(GLOBAL.dirs.themeforest + 'build/mailer'));
        };
    };
})();
