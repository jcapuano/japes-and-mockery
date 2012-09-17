define(["utils/logger", 
		"utils/eventing",
        "mocks/mockOrders"],
function(logger, eventing, mockOrders) {
    
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
        	
            eventing.publish('setorders', mockOrders);
        };
        
        //noop: null
    };
});
