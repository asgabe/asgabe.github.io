var gulp  = require('gulp');
var less  = require('gulp-less');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');

var paths = {
	less: 'src/assets/less/*.less'
};

gulp.task('watch', function() {
	gulp.watch(paths.less, ['less']);
});

gulp.task('less', function() {
	return gulp.src('src/assets/less/source.less')
		.pipe(less({
			paths: ['src/assets/less'],
			compress: false,
		}))
		.pipe(gulp.dest('src/public/css/'));
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