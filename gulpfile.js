/**
 * Created by mr_mac1 on 16/5/25.
 */
var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch', function () {    // 这里的watch，是自定义的，写成live或者别的也行

    gulp.task('css', function() {
        gulp.src('public/stylesheets/*')
            .pipe(livereload({ start: true }))
    });

    gulp.task('watch', function() {
        livereload.listen();
        gulp.watch('public/stylesheets/*', ['css'])
    })

});