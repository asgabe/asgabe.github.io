var gulp  = require('gulp');
var less  = require('gulp-less');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');

var paths = {
	less: 'src/assets/stylesheet/*.less'
};

gulp.task('watch', function() {
	gulp.watch(paths.less, ['less']);
});

gulp.task('less', function() {
	gulp.src('src/assets/stylesheet/source.less')
		.pipe(less({
			paths: ['src/assets/stylesheet'],
			compress: true,
		}))
		.pipe(gulp.dest('src/public/stylesheet/'));
});

gulp.task('webserver', function() {
	return gulp.src('./')
		.pipe(webserver({
			host: '0.0.0.0',
			port: '8000',
			directoryListing: true,
			livereload: false
		}));
});

gulp.task('default', ['less', 'watch', 'webserver']);