define(["utils/logger",
		//"hub/hubClient",
        "mocks/mockHubClient",
		"controllers/ordersController"], 
function(logger, HubClient, OrdersController) {

	return $.sammy(function() {
		
        logger.info("Creating Application");
        
	    this.VIEW_PATH = '/templates/';
	    
	    // set the selector of the "bound" element
	    this.element_selector = '#content';
	    
		// Configure Sammy JS plugins
		this.use(Sammy.Handlebars, 'html');
		
		// Configure helpers here
		//this.helpers(ApplicationHelper);
		
        HubClient.init();
        
		// Configure controllers here
		OrdersController(this);
	});
});
