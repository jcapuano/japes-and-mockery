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
        	{topic: "editorder", handler: function(order) { this.onEditOrder(order); }},
        	{topic: "setorder", handler: function(order) { this.onSetOrder(order); }},
			{topic: "neworder", handler: function() {this.onNewOrder(); }}
		]);
        
	    //--------------------------------------
	    //  HUB HANDLERS
	    //--------------------------------------
        this.onSetOrder = function(order) {
        	try {
	        	logger.info("Received order");
	            logger.info(order);
				
				ViewPresenter.show("orderEdit.html", order);
				
				
				$('#date').val(Globalize.format( order.requestedDate(), 'd'));
				$('#requestdate').val(Globalize.format( order.requestedDate(), 'd' )).datepicker();
				$('#deliverydate').val(Globalize.format( order.deliveryDate(), 'd' )).datepicker();
				
			}
            catch (e) {
            	logger.error(e);
            }                	
        };
		
	    //--------------------------------------
	    //  VIEW HANDLERS
	    //--------------------------------------
        this.onEditOrder = function(order) {
			logger.info("getting order: " + order.id());
			
			//the data comes from the list so use it....
			this.onSetOrder(order);
			
			//calls hub for data?  or already has a dataset
			//publish event for hub
			//onSetOrder show the page
			
			//var order = {PONumber: "PONumber",
			//			deliveryAddress: {
			//			value:{
			 //   line1: "111 My House",
			//    line2: "",
			//    line3: "",
			//    city: "Big City",
			//    state: "State 72",
			//    country: "Planet Mars",
			//    postalcode: "111111"}
	        //}
			//};
		
			//eventing.publish('getorder', id);
					  
					  
			
			//ViewPresenter.show("address.html", order);
        
        };
        
		this.onNewOrder = function(){
			logger.info("New Order");
			
			ViewPresenter.show("newOrder.html");
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