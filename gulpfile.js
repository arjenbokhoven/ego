const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");

// Compile into CSS
function style() {
  // 1 where is my scss file?
  return (
    gulp
      .src("app/scss/**/*.scss")
      // 2 pass that file through sass compiler
      .pipe(sass().on('error', sass.logError))
      // 3 where do i save the compiled css?
      .pipe(gulp.dest("app/css"))
      // 4 stream changes to all browsers
      .pipe(browserSync.stream())
  );
}
function watch() {
  browserSync.init({
    server: {
      baseDir: "./app"
    }
  });
  gulp.watch("app/scss/**/*.scss", style);
  gulp.watch("app/*.html").on("change", browserSync.reload);
  gulp.watch("app/js/**/*.js").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;
