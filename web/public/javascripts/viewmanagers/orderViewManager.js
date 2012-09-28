define(["utils/logger", 
		"utils/eventing",
		"utils/viewPresenter",
		"models/validation"],
function(logger, eventing, ViewPresenter, validation) {

	return function OrderViewManager() { 
		
	    //--------------------------------------
	    //  EVENTS
	    //--------------------------------------
	    // pub: getorder
	    
	    // sub: editorder
	    // sub: setorder
	    
	    //--------------------------------------
	    //  SUBSCRIPTIONS
	    //--------------------------------------
        eventing.subscribeall([
        	{topic: "editorder", handler: function(id) { this.onEditOrder(id); }},
        	{topic: "setorder", handler: function(order) { this.onSetOrder(order); }}
		]);
        
	    //--------------------------------------
	    //  HUB HANDLERS
	    //--------------------------------------
        this.onSetOrder = function(order) {
        	try {
	        	logger.info("Received order");
	            logger.info(order);
			}
            catch (e) {
            	logger.error(e);
            }                	
        };
		
	    //--------------------------------------
	    //  VIEW HANDLERS
	    //--------------------------------------
        this.onEditOrder = function(id) {
			logger.info("Showing order: " + id);
			
			//calls hub for data?  or already has a dataset
			//publish event for hub
			//onSetOrder show the page
			ViewPresenter.show("orderEdit.html");
        
        };
        
        
	    //--------------------------------------
	    //  VIEW VALIDATIONS
	    //--------------------------------------
        /*
        this.setValidations = function(order) {
        	// attach the validations to the view fields
        	validation.SetViewValidations("#formOrderEdit", [
            		new validation.ViewValidation("#inputOrderCode", order.code.validations),
            		new validation.ViewValidation("#inputPONumber",order.poNumber.validations),
            		new validation.ViewValidation("#selectStatus", order.status.validations)
                    ]);
        };
        */
	};
});    