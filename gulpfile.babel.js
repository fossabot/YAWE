import gulp from 'gulp';
import browserify from 'browserify';
import del from 'del';
import source from 'vinyl-source-stream';
import runSequence from 'run-sequence';

import autoprefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import csscomb from 'gulp-csscomb';
import csso from 'gulp-csso';
import imagemin from 'gulp-imagemin';
import sass from 'gulp-sass';
import streamify from 'gulp-streamify';
import uglify from 'gulp-uglify';

// TODO: FIREFOX & Web


gulp.task('generic:chrome', () => {
	return gulp.src('./src/chrome/*')
		.pipe(gulp.dest('dist'));
});

gulp.task('html', () => {
	return gulp.src('./src/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('img', () => {
	return gulp.src('./src/images/*.png')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'));
});


gulp.task('js', ['js:app', 'js:options', 'js:plugins']);

gulp.task('js:options', () => {
	return browserify('./src/js/options.js')
		.bundle()
		.pipe(source('options.js'))//.pipe(streamify(uglify()))
		.pipe(gulp.dest('./dist/js/'));
});


gulp.task('js:app', () => {
	return browserify('./src/js/app.js')
		.bundle()
		.pipe(source('app.js'))//.pipe(streamify(uglify()))
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('js:plugins', () => {
	return gulp.src('vendor/awesomplete/awesomplete.js')
		.pipe(concat('plugins.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'));
});

function scss(browsers) {
	return gulp.src('vendor/bootswatch/**/style.scss')
		.pipe(sass({
				includePaths: ['vendor/bootstrap/', 'src/scss']
			}).on('error', sass.logError))
		.pipe(csscomb())
		.pipe(autoprefixer({
			browsers: browsers,
			cascade: false,
			remove: true
		})) // .pipe(csso())
		.pipe(gulp.dest('dist/bootswatch/'));
}


gulp.task('scss:web', () => {
	return scss(['> 1%', 'last 2 versions', 'Firefox ESR']);
});

gulp.task('scss:firefox', () => {
	return scss(['Firefox ESR']);
});

gulp.task('scss:chrome', () => {
	return scss(['last 2 Chrome versions']);
});

gulp.task('scss:opera', () => {
	return scss(['last 2 Opera versions']);
});
