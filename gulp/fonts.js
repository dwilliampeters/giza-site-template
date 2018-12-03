var gulp = require("gulp");
var gulpif = require("gulp-if");

gulp.task("fonts", function() {
  return gulp
    .src("./fonts/**/*")
    .pipe(gulpif(!global.production, gulp.dest("./_build/assets/fonts")))
    .pipe(gulpif(global.production, gulp.dest("./dist/assets/fonts")));
});
