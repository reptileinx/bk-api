var gulp, nodemon;
gulp = require('gulp');
nodemon = require('gulp-nodemon');

gulp.task('default', function(){
  nodemon({
      script: 'server.js',
      ext: 'js',
      ignore: ['./node_modules/**']
  })
  .on ('restart', function(){
     console.log("restarting");
  });
});