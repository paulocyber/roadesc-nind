// Aqui nós carregamos o gulp e os plugins através da função `require` do nodejs
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
// Definimos o diretorio dos arquivos para evitar repetição futuramente
var files = "./src/*.js";
//Aqui criamos uma nova tarefa através do ´gulp.task´ e damos a ela o nome 'lint'
gulp.task('lint', function() {
    // Aqui carregamos os arquivos que a gente quer rodar as tarefas com o `gulp.src`
    // E logo depois usamos o `pipe` para rodar a tarefa `jshint`
    gulp.src(files)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
//Criamos outra tarefa com o nome 'dist'
gulp.task('dist', function() {

    gulp.src(files)
        .pipe(concat('./dist'))
        .pipe(rename('dist.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});
gulp.task('default', function() {

    // Usamos o `gulp.run` para rodar as tarefas
    // E usamos o `gulp.watch` para o Gulp esperar mudanças nos arquivos para rodar novamente
    gulp.run('lint', 'dist');
    gulp.watch(files, function(evt) {
        gulp.run('lint', 'dist');
    });
});
