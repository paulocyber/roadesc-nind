require( 'getmodule' );
var http = require('http');
var app = require ('./config/express')();
var passport = require('passport');
//var mongoUriLocal = 'mongodb://127.0.0.1:27017/roadsec';
//var mongo = require('./config/database.js')(mongoUriMlab);
app.use(passport.initialize());  
app.post('/auth', passport.authenticate(  
  'local', {
    session: false
  }), serialize, generateToken, respond);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server escutando na porta ' + 
    app.get('port'));
});

