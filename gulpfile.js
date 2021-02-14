const {
  src,
  dest,
  task,
  series,
  watch,
  parallel
} = require("gulp");
const clean = require("gulp-clean");
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reloadBrws = browserSync.reload;
const sassGlob = require('gulp-sass-glob');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');

const env = process.env.NODE_ENV;

sass.compiler = require("node-sass");

task("clean", () => {
  return src('dist/', {
    read: false
  }).pipe(clean());
});

task("copy:img", () => {
  return src('src/img/**/*')
    .pipe(dest('dist/img'))
    .pipe(reloadBrws({
      stream: true
    }));
});
task("copy:images", () => {
  return src('src/images/*')
    .pipe(dest('dist/images'))
});
task("copy:video", () => {
  return src('src/video/**/*')
    .pipe(dest('dist/video'))
    .pipe(reloadBrws({
      stream: true
    }));
});

task("copy:html", () => {
  return src('src/index.html')
    .pipe(dest('dist'))
    .pipe(reloadBrws({
      stream: true
    }));
});


const styles = [
  'node_modules/normalize.css/normalize.css',
  'node_modules/bxslider-import/dist/jquery.bxslider.css',
  'node_modules/fancybox/dist/css/jquery.fancybox.css',
  'src/styles/main.scss'
]

task("styles", () => {
  return src(styles)
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat('main.min.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(env === 'dev', autoprefixer({
      overrideBrowserslist: ["last 2 versions"],
      cascade: false
    })))
    .pipe(gulpif(env === 'prod', gcmq()))
    .pipe(gulpif(env === 'prod', cleanCSS()))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(dest('dist'))
    .pipe(reloadBrws({
      stream: true
    }));
});

const scripts = [
  "node_modules/jquery/dist/jquery.js",
  "node_modules/bxslider-import/dist/jquery.bxslider.min.js",
  "node_modules/fancybox/dist/js/jquery.fancybox.js",
  "node_modules/jquery-touchswipe/jquery.touchSwipe.js",
  "src/scripts/*.js"
]

task("scripts", () => {
  return src(scripts)
    .pipe(gulpif(env === 'dev', sourcemaps.init()))
    .pipe(concat('main.min.js'))
    .pipe(gulpif(env === 'prod', uglify()))
    .pipe(gulpif(env === 'dev', sourcemaps.write()))
    .pipe(dest('dist'))
    .pipe(reloadBrws({
      stream: true
    }));
})

task("server", () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    open: false
  });
});

watch("src/**/*", series("styles"));
watch("src/*.html", series("copy:html"));
watch("src/scripts/*.js", series("scripts"));

task("default", series("clean", parallel("copy:img", "copy:images", "copy:video", "copy:html", "styles", "scripts"), "server"));