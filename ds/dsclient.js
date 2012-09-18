var cDefaultDataServiceURL = "http://localhost:4343/";
var OrderBuilder = require('../models/orderBuilder.js');

function DataServiceClient(url) {
	var self = this;
    
    self.URL = url || cDefaultDataServiceURL;
    
    self.rest = require('restler');
    
    self.getOrders = function(callback) {
    	try {
        	console.log("Get Orders");
        	var url = self.URL + 'orders';
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
    	console.log("Data Service base URL: " + self.URL);
        if (self.URL.charAt(self.URL.length-1) !== '/') {
        	self.URL +=  '/';
		}           
    }
    self.init();
};

// main entry point
try {
	console.log('Creating Data Service Client');
    var url = process.argv.length > 2 ? process.argv[2] : null;

	var dsc = new DataServiceClient(url);
    dsc.getOrders(function(data) {
    	console.log("Got me some orders!");
        console.log(data);
        
    	console.log("Parse dem orders!");
        //var orders = OrderBuilder.parse(data);
        var orders = JSON.parse(data);
        console.dir(orders);
    });
    
} catch (ex) {
	console.log('Error in creating Data Service Client: ' + ex);
}
