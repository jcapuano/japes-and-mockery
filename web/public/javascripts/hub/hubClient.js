define(["utils/logger", 
		"utils/eventing", 
        "models/orderBuilder"], 
function(logger, eventing, OrderBuilder) {

	return function() {
    	var self = this;
        
        self.socket = null;
        self.address = null;
	    
        self.start = function(address) {
	    	logger.info("Initializing the Hub Client");
            
            self.address = address || this.address;
	        
            self.subscribe();
            
	    	logger.info("Connecting to Hub Server @ " + self.address);
	    	self.socket = io.connect(self.address);
	        self.socket.on('connect', function() {
            
			    self.socket.on('setorders', function(orders) {
			        logger.info("Orders received");
                    self.OnSetOrders(orders);
			    });
                
	        });
	    };
	    
        self.stop = function() {
	    	logger.info("Stopping the Hub Client");
	        self.socket.disconnect();
	    };

	    //--------------------------------------
	    //  EVENTS
	    //--------------------------------------
	    // pub: setorders
	    
	    // sub: getorders
	    
	    //--------------------------------------
	    //  SUBSCRIPTIONS
	    //--------------------------------------
        self.subscribe = function() {
	    	var subs = [
	        	{topic: "getorders", handler: self.onGetOrders}
	        ];
	        
	    	eventing.subscribeall(subs);
	    };

	    //--------------------------------------
	    //  HUB HANDLERS
	    //--------------------------------------
	    
	    //--------------------------------------
	    //  MODEL HANDLERS
	    //--------------------------------------
        self.onGetOrders = function(options) {
        	options = options || {
            	iDisplayStart: 0,
                iDisplayLength: 10
			};
	    	logger.info("Getting " + options.iDisplayLength + " Orders starting from " + options.iDisplayStart);
        	
	        self.socket.emit('getorders', options);
        };
        
	    //--------------------------------------
	    //  HUB HANDLERS
	    //--------------------------------------
        self.OnSetOrders = function(orders) {
            orders = (typeof orders == "string") ? $.evalJSON(orders) : orders; 
            logger.info(orders);
            
            // hydrate the model
            var o = OrderBuilder.build(orders.aaData);
            orders.aaData = o;
        
        	eventing.publish("setorders", orders);
		};
                    
	    //--------------------------------------
	    //  PRIVATE
	    //--------------------------------------
        
        //noop: null
	};
});
