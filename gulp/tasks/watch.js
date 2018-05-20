var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('html', function(){
	console.log("vediamo se questo funziona in html");
});



gulp.task('watch', function() {

	browserSync.init({

		server: {
			baseDir: "app"
		}

	});

	watch('./app/index.html', function() {

		gulp.start('html');
	});

	watch('./app/assets/stylesheets/**/*.css', function() {

		gulp.start('cssInject');
	});
});

gulp.task('cssInject',['styles'], function(){

return	gulp.src('./app/temp/stylesheets/style.css').
	pipe(browserSync.stream());
});