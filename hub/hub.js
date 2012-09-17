// main entry point
try {
	console.log('Creating Hub Server');
    
    var config = require("./config.js");
    var HubServer = require("./hubServer.js");

	var hs = new HubServer(config);
	hs.start();
} catch (ex) {
	console.log('Error in creating Hub Server: ' + ex);
}
