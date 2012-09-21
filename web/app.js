
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http');
 // ,fs = require('fs')
 // , hbs = require('hbs');

var app = express();

//hbs.registerPartial('navigation', fs.readFileSync(__dirname + '/views/navigation.html', 'utf8'));

app.configure(function(){
  app.set('port', process.env.PORT || 4141);
  app.set('views', __dirname + '/views');
  //app.set('view engine', 'jade');
  app.set('view engine', 'html');
  app.engine('html', require('ejs').renderFile);  
  //app.engine('html', require('hbs').__express);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
