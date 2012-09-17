var cDefaultIOPort = 4242;

function HubServer(config) {

	var self = this;
    self.Port = (config && config.hubPort) || cDefaultIOPort;
    
    var OrdersDSClient = require("./dataserviceOrders.js");
    self.os = new OrdersDSClient(config);
    
    self.io = null;
    
    self.start = function(port) {
    	if (!port) port = self.Port;
        self.Port = port;
    
    	console.log('Starting Hub Server @ ' + self.Port);
    
        self.io = require('socket.io').listen(self.Port);
        
		self.io.sockets.on('connection', function (socket) {
        	console.log("Client connected");
        	//socket.broadcast.emit('user connected');
            socket.on('getorders', function() {
		    	try {
		        	self.os.getOrders(function(orders) {
                    	socket.emit('setorders', orders);
                    });
			    } catch (ex) {
			    	console.log('Error in retrieving orders: ' + ex);
			    }
            });
		});
        
        console.log('Hub Server running at http://127.0.0.1:' + self.Port + '/');
	}
};

module.exports = HubServer;
