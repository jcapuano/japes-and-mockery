define(["utils/logger", 
		"utils/eventing",
        "mocks/mockOrders"],
function(logger, eventing, mockOrders) {
    
    return {
    
    	init: function() {
	    	logger.info("Initializing the Hub Client");
	    
        	this.subscribe();
	    },
	    
	    //--------------------------------------
	    //  EVENTS
	    //--------------------------------------
	    // pub: setorders
	    
	    // sub: getorders
	    
	    //--------------------------------------
	    //  SUBSCRIPTIONS
	    //--------------------------------------
	    subscribe: function() {
	    	var subs = [
	        	{topic: "getorders", handler: this.onGetOrders}
	        ];
	        
	    	eventing.subscribeall(subs);
	    },

	    //--------------------------------------
	    //  HUB HANDLERS
	    //--------------------------------------
	    
	    //--------------------------------------
	    //  MODEL HANDLERS
	    //--------------------------------------
        onGetOrders: function() {
	    	logger.info("Initializing the Hub Client");
        	
            eventing.publish('setorders', mockOrders);
        },
    
    
    	noop: null
    }
});
