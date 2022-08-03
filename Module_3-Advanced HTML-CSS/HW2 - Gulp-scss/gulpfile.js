const {src, dest, watch, parallel, series} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
// import imagemin from 'gulp-imagemin';
const clean = require('gulp-clean');
const rename = require("gulp-rename");
const del = require('del')

function serve() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });
}

function cleandist() {
    return del('dist')
}

function images() {
    return src('src/images/**/*')
    .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 75, progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
    .pipe(dest('dist/images'))
}

function html() {
    return src('src/index.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

function styles() {
    return src('src/styles/style.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    // .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(rename('style.min.css'))
    .pipe(autoprefixer({
        overrideBrowserslist:['last 2 version'],
        grid: true,
    }))
    .pipe(dest('dist/styles/'))
    .pipe(browserSync.stream())
}

function scripts() {
    return src(['src/scripts/*.js'])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(dest('dist/scripts'))
    .pipe(browserSync.stream())
}

function watching() {
    watch(['src/*.html'], html)
    watch(['src/styles/**/*.scss'], styles)
    watch(['src/scripts/**/*.js', '!src/scripts/script.min.js'], scripts) 
}

exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.cleandist = cleandist;

exports.watching = watching;
exports.serve = serve;


exports.build = series(cleandist, images, parallel(html,  styles, scripts));
exports.default = parallel(serve, watching);






