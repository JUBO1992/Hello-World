var gulp = require("gulp"),
    tslint = require("gulp-tslint"),
    clean = require("gulp-clean"),
    ts = require("gulp-typescript"),
    less = require("gulp-less"),
    sourcemaps = require("gulp-sourcemaps"),
    changed = require("gulp-changed"),
    debug = require("gulp-debug"),
    browerSync = require("browser-sync").create();

var paths = {
    src: "./src",
    dest: "./dest"
}
//clean task
gulp.task('clean', function () {
    return gulp.src([paths.dest + "/!(bower_components)"], {
        read: false
    }).pipe(clean());
});

//lint task
gulp.task('lint', function () {
    return gulp.src([paths.src + "/**/*.{tsx,ts}"
    ]).pipe(tslint({
        formatter: "verbose"
    })).pipe(tslint.report());
});

//build tasks
var tsProject = ts.createProject('tsconfig.json');
gulp.task('build-tsx', function () {
    return gulp.src([paths.src + "/**/*.{tsx,ts}"
    ]).pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dest))
        .pipe(debug({ title: "编译:" }));
});

gulp.task('build-less', function () {
    return gulp.src([paths.src + "/**/*.less"
    ]).pipe(less({ paths: [paths.dest] }))
        .pipe(gulp.dest(paths.dest))
        .pipe(debug({ title: "编译:" }));
});

gulp.task('build', ['build-tsx', 'build-less'], function () {
    return gulp.src([paths.src + "/**/*.*", "!" + paths.src + "/**/*.{tsx,ts,less}"
    ]).pipe(gulp.dest(paths.dest))
        .pipe(debug({ title: "拷贝:" }));
});

gulp.task('build-changed-tsx', function () {
    return gulp.src([paths.src + "/**/*.{tsx,ts}"
    ]).pipe(changed(paths.dest, { extension: ".js" }))
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dest))
        .pipe(debug({ title: "编译:" }));
});

gulp.task('build-changed-less', function () {
    return gulp.src([paths.src + "/**/*.less"
    ]).pipe(changed(paths.dest, { extension: ".css" }))
        .pipe(less({ paths: [paths.dest] }))
        .pipe(gulp.dest(paths.dest))
        .pipe(debug({ title: "编译:" }));
});

gulp.task('build-changed', ['build-changed-tsx', 'build-changed-less'], function () {
    return gulp.src([paths.src + "/**/*.*", "!" + paths.src + "/**/*.{tsx,ts,less}"
    ]).pipe(changed(paths.dest))
        .pipe(gulp.dest(paths.dest))
        .pipe(debug({ title: "拷贝:" }));
});

gulp.task("default", ['build']);

//watch task
gulp.task('watch', ['default'], function () {
    browerSync.init({
        server:  paths.dest
    });
    gulp.watch([paths.src + "/**/*.*"], ["build-changed"]);

    //alert separate bower_components folder
    gulp.watch([paths.dest + "/**/*.*", "!" + paths.dest + "/bower_components/**/*.*"
    ]).on('change', browerSync.reload);
})