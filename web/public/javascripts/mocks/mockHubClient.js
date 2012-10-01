define(["utils/logger", 
		"utils/eventing",
        "models/orderBuilder",
        "mocks/mockOrders100"],
function(logger, eventing, OrderBuilder, mockOrders) {
    
    return function() {
    
    	// hydrate the model
        var orders = OrderBuilder.build(mockOrders);
    
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
        this.onGetOrders = function(options) {
        	options = options || {
            	iDisplayStart: 0,
                iDisplayLength: 10,
                sEcho: ""
             };
	    	logger.info("Getting " + options.iDisplayLength + " Orders starting from " + options.iDisplayStart);
            
            var l = options.iDisplayLength;
            if (l > orders.length) {
            	l = orders.length;
            }
            
            var s = options.iDisplayStart;
            if (s < 0) {
            	s = 0;
            }
            else if (s > orders.length - l) {
            	s = orders.length - l;
            }
            var e = s + l;
            
            var o = orders.slice(s, e);
            
            eventing.publish('setorders', {
            	iTotalRecords: orders.length,
                iTotalDisplayRecords: orders.length,
                aaData: o
            });
        };
    };
});
