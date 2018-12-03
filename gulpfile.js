var gulp = require("gulp");
var browser = require("browser-sync");
var requireDir = require("require-dir");
var port = process.env.SERVER_PORT || 3000;

requireDir("./gulp");

gulp.task("build", ["clean", "sass", "html", "javascript", "images", "fonts"]);

gulp.task("serve", ["build"], function() {
  browser.init({ server: "./_build", port: port, open: false });
});

gulp.task("watch", function() {
  gulp.watch("./html/**/*", ["html", browser.reload]);
  gulp.watch("./scss/**/*", ["sass", browser.reload]);
  gulp.watch("./js/**/*", ["javascript", browser.reload]);
  gulp.watch("./images/**/*", ["images", browser.reload]);
  gulp.watch("./fonts/*", ["fonts", browser.reload]);
});

gulp.task("default", ["serve", "watch"]);

gulp.task("dist", ["dist"]);
