define(["utils/logger", "utils/eventing"],
function(logger, eventing) {

	return function NavigationViewManager() { 
		
		logger.info("Initialize NavigationViewManager")
		$("#orderList").bind("click", function() {getOrders();});
		//$("#orderList").bind("click", function() {alert("clicked");});
	    //--------------------------------------
	    //  EVENTS
	    //--------------------------------------
	    // pub: setorders
	    
	    // sub: getorders
	    
	    //--------------------------------------
	    //  SUBSCRIPTIONS
	    //--------------------------------------
        /*
        eventing.subscribeall([
        	{topic: "setorders", handler: function(orders) {
            	this.onSetOrders(orders);
			}}
		]);
        */
        
	    //--------------------------------------
	    //  HUB HANDLERS
	    //--------------------------------------
	    
		
	    //--------------------------------------
	    //  VIEW HANDLERS
	    //--------------------------------------
		this.getOrders = function()
		{
			logger.info("Navigation: get order list");
			eventing.publish("showorders");
		}
		
		//$("#orderList").bind("click", this.getOrders());
	};
});    