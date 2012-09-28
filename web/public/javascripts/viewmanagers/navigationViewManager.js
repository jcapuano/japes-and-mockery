define(["utils/logger", "utils/eventing"],
function(logger, eventing) {

	return function NavigationViewManager() { 
		
		logger.info("Initialize NavigationViewManager")
		$("#orderList").bind("click", function() {getOrders();});
		$("#orderEdit").bind("click", function() {getOrder();});
		$("#orderNew").bind("click", function() {newOrder();});
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
		
		this.getOrder = function()
		{
			logger.info("Navigation: get order");
			eventing.publish("editorder", 7);
		}
		
		this.newOrder = function()
		{
			logger.info("Navigation: new order");
			eventing.publish("neworder");
		}
		
		//$("#orderList").bind("click", this.getOrders());
	};
});    