'use strict';

/*** Variables ***/
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browsersync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var cssnano = require('gulp-cssnano');
var svgsprite = require('gulp-svg-sprite');
var buffer = require('vinyl-buffer');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


/*** All directories ***/
const dirs = {
    root: '.',
    src: 'src',
    dist: 'dist'
}

const scss_paths = {
    src: `${dirs.src}/sass/`,
    dist: `${dirs.dist}/css/`,
    files: `${dirs.src}/sass/main.scss`
}

const js_paths = {
    src: `${dirs.src}/js/`,
    dist: `${dirs.dist}/js/`,
    files: `${dirs.dist}/js/index.js`
}

const img_paths = {
    src: `${dirs.src}/icons/`,
    dist: `${dirs.dist}/img/`
}

/*** All tasks ***/

/**Copy fonts**/
function copy_fonts() {
    return gulp.src([
        `${dirs.src}/fonts/**/*`
    ], {
        base: 'src'
    }).pipe(gulp.dest('dist/'));
}

/**Copy json**/
function copy_json() {
    return gulp.src([
        `${dirs.src}/json/*`
    ], {
        base: 'src'
    }).pipe(gulp.dest('dist/'));
}


/**Scss**/

function compile_styles() {
    return gulp.src(scss_paths.src + '*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest(scss_paths.dist));
}

/**Icon sprites**/

function icon_sprite() {
    // Generate our spritesheet
    var spritedata = gulp.src(img_paths.src + 'sprites/*.png').pipe(spritesmith({
        imgName: 'generated-sprite.png',
        cssName: '_generated-sprite.scss',
        imgPath: '../img/sprites/generated-sprite.png',
    }));

    // Pipe image stream through image optimizer and onto disk
    var imgstream = spritedata.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
        .pipe(buffer())
        .pipe(imagemin())
        .pipe(gulp.dest(img_paths.dist + 'sprites/'));

    // Pipe CSS stream through CSS optimizer and onto disk
    var cssstream = spritedata.css
        .pipe(gulp.dest(scss_paths.src + 'helper/'));

    // Return a merged stream to handle both `end` events
    return merge(imgstream, cssstream);
}

/**Compress Images**/
function compress_images() {
    return gulp
        .src([img_paths.src + '*', img_paths.src + '**/*', '!' + img_paths.src + '/sprites/**'])
        .pipe(imagemin())
        .pipe(gulp.dest(img_paths.dist))
}

/** Js Scripts **/
function compile_scripts() {
    return gulp
        .src(js_paths.src + '*.js', {
            sourcemaps: true
        })
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest(js_paths.dist));
}

/**Important tasks**/
function watch() {
    gulp.watch(dirs.src + '/sass/**/*.scss', compile_styles);
    gulp.watch(dirs.src + '/js/**/*.js', compile_scripts);
}

var build = gulp.parallel(watch, compress_images, copy_fonts, copy_json);


gulp.task('compile-script', compile_scripts);
gulp.task('compress-images', compress_images);
gulp.task('sprite', icon_sprite);
gulp.task('copy-fonts', copy_fonts);
gulp.task('copy-json', copy_json);
gulp.task('dev', compile_styles);
gulp.task('default', build);
