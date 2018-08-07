var gulp = require("gulp");
var server = require("gulp-webserver");
var loader = require("gulp-load-plugins");
var url = require("url");
var path = require("path");
var fs = require("fs");
gulp.task("sever", function() {
    gulp.src("./src/")
        .pipe(server({
            port: 9595,
            open: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (req.url === "/favicon.ico") {
                    return;
                }
                pathname = pathname === "/" ? "index.html" : pathname;
                res.end(fs.readFileSync(path.join(__dirname, "src", pathname)));
            }
        }))
})