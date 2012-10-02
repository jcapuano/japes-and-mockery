
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , i18n = require('i18n')
  , http = require('http')
  , path = require('path');
  //, fs = require('fs');
 // , hbs = require('hbs');

var app = express();

//hbs.registerPartial('navigation', fs.readFileSync(__dirname + '/views/navigation.html', 'utf8'));

app.configure(function(){
  app.set('port', process.env.PORT || 4141);
  //app.set('views', [__dirname + '/views', __dirname + '/public/views']);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  app.engine('html', require('ejs').renderFile);  
  //app.engine('html', require('hbs').__express);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(i18n.init);
});

i18n.configure({
	locales:['en'],
	register:global
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

app.get('*.html', function(req, res) {
    //res.render(req.url);
    
	var filename = req.url;	
	path.exists(filename, function(exists) {
    	if (!exists) {			
			filename = filename.substring(filename.lastIndexOf('/') + 1,  filename.length) || filename;
        	//filename = path.basename(req.url);
        }		
		res.render(filename);
    });    
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
