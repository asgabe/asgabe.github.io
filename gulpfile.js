var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');

var paths = {
	less: 'src/assets/less/*.less'
};

gulp.task('less', function() {
	return gulp.src('src/assets/less/source.less')
		.pipe(less({
			paths: ['src/assets/less'],
			compress: false,
		}))
		.pipe(gulp.dest('src/public/css/'));
});

gulp.task('watch', function() {
	gulp.watch(paths.less, ['less']);
});

gulp.task('default', ['less', 'watch']);