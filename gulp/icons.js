var gulp = require("gulp");
var svgstore = require("gulp-svgstore");

gulp.task("icons", function() {
  return gulp
    .src("./icons/*.svg")
    .pipe(svgstore())
    .pipe(gulpif(!global.production, gulp.dest("./_build/assets/images")))
    .pipe(gulpif(global.production, gulp.dest("./dist/assets/images")));
});
