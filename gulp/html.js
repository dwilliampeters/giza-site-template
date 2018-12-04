"use strict";

var gulp = require("gulp");
var gulpif = require("gulp-if");
var nunjucksRender = require("gulp-nunjucks-render");

gulp.task("html", function() {
  return gulp
    .src([
      "./html/**/*.html",
      "!./html/{components,layouts,shared,macros,data}/**"
    ])
    .pipe(nunjucksRender({ path: ["./html"] }))
    .pipe(gulpif(!global.production, gulp.dest("./_build")))
    .pipe(gulpif(global.production, gulp.dest("./dist")));
});
