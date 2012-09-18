RESTService = function(port) {
	var self = this;
    
	self.Port = port || 4343;
    
    self.start = function(port) {
    	if (!port) port = self.Port;
        self.Port = port;
        
    	console.log('Starting Mock REST Service');
    
    	var routes = require("./routes.js");
		var restify = require('restify');
		var server = restify.createServer();
        server.use(restify.queryParser());
        server.use(restify.bodyParser({mapParams: false}));
        server.use(restify.authorizationParser());
        
    	console.log('Creating routes...');
        if (routes && routes.length > 0) {
        	for (var i = 0; i<routes.length; i++) {
            	var route = routes[i];
                console.log("   " + route.method + " @ " + route.url);
            	if (route.method == "post") {
                	server.post(route.url, route.handler);
                }
                else if (route.method == "get") {
                	server.get(route.url, route.handler);
                }
                else if (route.method == "put") {
                	server.put(route.url, route.handler);
                }
                else if (route.method == "delete") {
                	server.del(route.url, route.handler);
                }
                else {
                	console.log("Unknown REST operation specified: " + route.method);
                }
            }
        }
        
    	console.log('Listening...');
        
		server.listen(self.Port, function() {
        	console.log('%s listening at %s', server.name, server.url);
		});
        
        console.log('Mock REST Server running at http://127.0.0.1:' + self.Port + '/');
	}
    
};

try {
	console.log('Creating Mock REST Service');
	var port = process.argv.length > 2 ? process.argv[2] : null;

	var ds = new RESTService(port);
	ds.start();
} catch (ex) {
	console.log('Error in creating Mock REST Service: ' + ex);
}


