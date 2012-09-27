define(["config", 
		"utils/logger",
		"utils/eventing",
		"utils/viewPresenter",
		//"hub/hubClient",
        "mocks/mockHubClient",
		"viewmanagers/navigationViewManager", 
		"viewmanagers/ordersViewManager", 
		"viewmanagers/orderViewManager"], 
function(config, logger, eventing, ViewPresenter, HubClient, NavViewManager, OrdersViewManager, OrderViewManager) {

	return function AppViewManager() {
    	var self = this;
        
        logger.info("Creating Application");
    
    	self.hubclient = null;
        
        self.run = function() {
        	logger.info("Running Application");
        
        	logger.info("Pre-loading Partial Views");
            ViewPresenter.viewselector = '#content';
            
        	ViewPresenter.load(config.views);
            
            self.hubclient = new HubClient();
            self.hubclient.start(config.hubURL);
            
	        NavViewManager();
            OrdersViewManager();
            OrderViewManager();
        };
    };
});
