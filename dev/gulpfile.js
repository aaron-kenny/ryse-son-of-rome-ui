//////////////////////////////////////////////////
// FORCELOW GULP WORKFLOW
// MODIFY FOR EACH SPECIFIC PROJECT
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// REQUIRE NPM MODULES
//////////////////////////////////////////////////

var gulp = require("gulp"),
    sass = require("gulp-ruby-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    rename = require("gulp-rename"),
    plumber = require("gulp-plumber"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat");

//////////////////////////////////////////////////
// SETTINGS
//////////////////////////////////////////////////

// Default JavaScript Action
// Value "JSMinify" Will Concatenate AND Minify all JavaScript Files
// Value "JSConcat" Will ONLY Concatenate JavaScript Files
var JSAction = "JSConcat";

// Default Task (Development)
gulp.task("default", ["styles", JSAction, "watch"]);

//////////////////////////////////////////////////
// SASS COMPILE TASK
//////////////////////////////////////////////////

gulp.task("styles", function(){
    return sass("source_scss/styles.scss", {
		// SASS output styles: nested, expanded, compact, compressed
        style: "expanded",
        cacheLocation: "temp/sass-cache"
    })
    .on("error", function(err) {
        console.error("Error!", err.message);
    })
    .pipe(autoprefixer({
        browsers: ["> 1%"]
    }))
    .pipe(rename("style.css"))
	// Place style.css in root of theme folder
    .pipe(gulp.dest("../css"));
});

//////////////////////////////////////////////////
// SCRIPTS CONCAT AND MINIFY
//////////////////////////////////////////////////

gulp.task("JSMinify", function(){
	gulp.src(["source_js/vendor/*.js", "source_js/plugins/*.js", "source_js/*.js"])
	.pipe(plumber())
	.pipe(uglify())
	.pipe(concat("scripts.min.js"))
	.pipe(gulp.dest("../js"));
});

//////////////////////////////////////////////////
// SCRIPTS CONCAT ONLY
//////////////////////////////////////////////////

gulp.task("JSConcat", function(){
	gulp.src(["source_js/vendor/*.js", "source_js/plugins/*.js", "source_js/*.js"])
	.pipe(plumber())
	.pipe(concat("scripts.js"))
	.pipe(gulp.dest("../js"));
});

//////////////////////////////////////////////////
// GULP WATCH TASK
//////////////////////////////////////////////////

gulp.task("watch", function(){
	gulp.watch(["source_scss/**/*.scss"], ["styles"]);
	gulp.watch(["source_js/**/*.js"], [JSAction]);
});
