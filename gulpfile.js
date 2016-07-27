var gulp = require("gulp"),
  tslint = require("gulp-tslint"),
  clean = require("gulp-clean"),
  ts = require("gulp-typescript"),
  less = require("gulp-less"),
  sourcemaps = require("gulp-sourcemaps"),
  changed = require("gulp-changed"),
  browerSync = require("browser-sync").create();

//clean task
gulp.task('clean',function(){
  return gulp.src([
    'dist/*.js', 
    'dist/*.html', 
    'dist/common'
    ],{read: false}).pipe(clean());
});

//lint task
gulp.task('lint', function(){
  return gulp.src([
    'src/**/*.tsx'
  ]).pipe(tslint({
    formatter: "verbose"
  })).pipe(tslint.report());
});

//build tasks
var tsProject = ts.createProject('tsconfig.json');
gulp.task('build-tsx', function(){
  return gulp.src([
    'src/**/*.tsx',
    'src/**/*.ts'
  ]).pipe(ts(tsProject))
  .pipe(gulp.dest("dist/"));
});

gulp.task('build-less', function(){
  return gulp.src([
    'src/**/*.less'
  ]).pipe(less({paths: ['dist']}))
  .pipe(gulp.dest("dist/"));
});

gulp.task('build', ['build-tsx', 'build-less'], function(){
  return gulp.src([
    'src/**/*.js',
    'src/**/*.html',
    'src/**/*.png'
  ]).pipe(gulp.dest("dist/"));
});

gulp.task("default", ['build']);

//watch task
gulp.task('watch', ['default'], function(){
  browerSync.init({
    server:'dist'
  });
  gulp.watch(['src/**/*.*'], ["default"]);
  gulp.watch(['dist/**/*.js', "dist/**/*.css"]).on('change', browerSync.reload);
})
