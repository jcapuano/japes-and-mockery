var cDefaultDataServiceURL = "http://localhost:4343";

function DataServiceOrders(config) {
	var self = this;
    
    self.URL = (config && config.ordersURL) || cDefaultDataServiceURL;
    
    self.rest = require('restler');
    
    self.getOrders = function(options, callback) {
    	try {
        	console.log("Get Orders");
            console.dir(options);
            
        	//var url = self.URL + 'orders/start/' + options.iDisplayStart + '/length/' + options.iDisplayLength + '/echo/' + options.sEcho;
        	var url = self.URL + 'orders';
            if (options) {
            	url += "?";
	            for (var opt in options) {
                	if (url[url.length-1] != '?') {
                    	url += "&";
                    }
	            	url += opt + "=" + options[opt];
	            }
            }
            self.get(url, callback);
	    } catch (ex) {
	    	console.log('Error in retrieving orders: ' + ex);
	    }
	}
    
    self.get = function(url, callback) {
    	console.log("Calling REST URL: " + url);
        self.rest.get(url).on('complete', function(result) {
        	if (result instanceof Error) {
            	callback({error: result.message});
			} else {
            	callback(result);
			}
		});
    }
    
    self.init = function() {
    	console.log("Orders Data Service URL: " + self.URL);
        if (self.URL.charAt(self.URL.length-1) !== '/') {
        	self.URL +=  '/';
		}           
    }
    self.init();
};

module.exports = DataServiceOrders;
