define(["utils/logger", 
		"utils/eventing",
        "models/orderBuilder",
        "mocks/mockOrders"],
function(logger, eventing, OrderBuilder, mockOrders) {
    
    return function() {
    
    	this.start = function() {
	    	logger.info("Initializing the Hub Client");
	    
        	this.subscribe();
	    };
	    
	    this.stop = function() {
	    	logger.info("Stopping the Hub Client");
	    };
        
	    //--------------------------------------
	    //  EVENTS
	    //--------------------------------------
	    // pub: setorders
	    
	    // sub: getorders
	    
	    //--------------------------------------
	    //  SUBSCRIPTIONS
	    //--------------------------------------
	    this.subscribe = function() {
	    	var subs = [
	        	{topic: "getorders", handler: this.onGetOrders}
	        ];
	        
	    	eventing.subscribeall(subs);
	    };

	    //--------------------------------------
	    //  HUB HANDLERS
	    //--------------------------------------
	    
	    //--------------------------------------
	    //  MODEL HANDLERS
	    //--------------------------------------
        this.onGetOrders = function() {
	    	logger.info("Getting Orders");
        	
            // hydrate the model
            var o = OrderBuilder.build(mockOrders);
            
            eventing.publish('setorders', o);
        };
        
        //noop: null
    };
});
