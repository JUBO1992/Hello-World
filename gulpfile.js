var gulp = require("gulp"),
    tslint = require("gulp-tslint"),
    clean = require("gulp-clean"),
    ts = require("gulp-typescript"),
    less = require("gulp-less"),
    sourcemaps = require("gulp-sourcemaps"),
    changed = require("gulp-changed"),
    debug = require("gulp-debug"),
    browerSync = require("browser-sync").create();

//clean task
gulp.task('clean', function() {
    return gulp.src([
        'dist/*.js',
        'dist/*.html',
        'dist/common'
    ], { read: false }).pipe(clean());
});

//lint task
gulp.task('lint', function() {
    return gulp.src([
        'src/**/*.tsx'
    ]).pipe(tslint({
        formatter: "verbose"
    })).pipe(tslint.report());
});

//build tasks
var tsProject = ts.createProject('tsconfig.json');
gulp.task('build-tsx', function() {
    return gulp.src([
            'src/**/*.tsx',
            'src/**/*.ts'
        ]).pipe(ts(tsProject))
        .pipe(gulp.dest("dist/"))
        .pipe(debug({ title: "编译:" }));
});

gulp.task('build-changed-tsx', function() {
    return gulp.src([
            'src/**/*.tsx',
            'src/**/*.ts'
        ]).pipe(changed("dist", { extension: ".js" }))
        .pipe(ts(tsProject))
        .pipe(gulp.dest("dist/"))
        .pipe(debug({ title: "编译:" }));
});

gulp.task('build-less', function() {
    return gulp.src([
            'src/**/*.less'
        ]).pipe(less({ paths: ['dist'] }))
        .pipe(gulp.dest("dist/"))
        .pipe(debug({ title: "编译:" }));
});

gulp.task('build-changed-less', function() {
    return gulp.src([
            'src/**/*.less'
        ]).pipe(changed("dist", { extension: ".css" }))
        .pipe(less({ paths: ['dist'] }))
        .pipe(gulp.dest("dist/"))
        .pipe(debug({ title: "编译:" }));
});

gulp.task('build', ['build-tsx', 'build-less'], function() {
    return gulp.src([
            'src/**/*.js',
            'src/**/*.html',
            'src/**/*.png'
        ]).pipe(gulp.dest("dist/"))
        .pipe(debug({ title: "拷贝:" }));
});

gulp.task('build-changed', ['build-changed-tsx', 'build-changed-less'], function() {
    return gulp.src([
            'src/**/*.js',
            'src/**/*.html',
            'src/**/*.png',
            'src/**/*.jpg'
        ]).pipe(changed("dist"))
        .pipe(gulp.dest("dist/"))
        .pipe(debug({ title: "拷贝:" }));
});

gulp.task("default", ['build']);

//watch task
gulp.task('watch', ['default'], function() {
    browerSync.init({
        server: 'dist'
    });
    gulp.watch(['src/**/*.*'], ["build-changed"]);

    //alert separate bower_components folder
    gulp.watch([
        'dist/common/**/*.*',
        'dist/digitalMap/**/*.*',
        'dist/digitalAtlas/**/*.*',
        'dist/home/**/*.*',
        "dist/*.*"
    ]).on('change', browerSync.reload);
})