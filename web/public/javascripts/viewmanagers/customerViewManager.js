define(["utils/logger", 
		"utils/eventing",
		"utils/viewPresenter",
		"models/validation"],
function(logger, eventing, ViewPresenter, validation) {

	return function CustomerViewManager() { 
		
	    //--------------------------------------
	    //  EVENTS
	    //--------------------------------------
	    // pub: getcustomer
	    
	    // sub: editcustomer
	    // sub: setcustomer
	    
	    //--------------------------------------
	    //  SUBSCRIPTIONS
	    //--------------------------------------
        eventing.subscribeall([
        	{topic: "editcustomer", handler: function(customer) { this.onEditCustomer(customer); }},
        	{topic: "setcustomer", handler: function(customer) { this.onSetCustomer(customer); }},
			{topic: "newcustomer", handler: function() {this.onNewCustomer(); }}
		]);
        
	    //--------------------------------------
	    //  HUB HANDLERS
	    //--------------------------------------
        this.onSetCustomer = function(customer) {
        	try {
	        	logger.info("Received customer");
	            logger.info(customer);
				
				
				
				//ViewPresenter.show("orderEdit.html", customer);
				
			}
            catch (e) {
            	logger.error(e);
            }                	
        };
		
	    //--------------------------------------
	    //  VIEW HANDLERS
	    //--------------------------------------
        this.onEditCustomer = function(customer) {
			logger.info("getting customer: " + customer.id()); //or code?
			
			//the data comes from the call so use it.... //no goign to the hub???
			this.onSetCustomer(customer);
			
        
        };
        
		this.onNewCustomer = function(){
			logger.info("New Customer");
			
			//ViewPresenter.show("newOrder.html");
		};
        
	    //--------------------------------------
	    //  VIEW VALIDATIONS
	    //--------------------------------------
       
	};
});    