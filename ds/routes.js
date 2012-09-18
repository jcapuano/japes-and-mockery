//var OrderBuilder = require('../models/orderBuilder.js');

var routes = [
	{
    	method: "post",
    	url: "/order",
        handler: function(req, res, next) {
	    	try {
	        	console.log("Posted to Order Service");
                console.log(req.body);
                
                console.log("Created an order");
                
		        res.send(200);
                return next();
            
		    } catch (ex) {
            	var msg = 'Error in processing REST operation: ' + ex;
		    	console.log(msg);
                res.writeHead(500, { 'Content-Type': 'application/text' });
                res.end(msg, 'utf-8');
		    }
		}
    },
	{
    	method: "get",
    	url: "/orders",
        handler: function(req, res, next) {
	    	try {
	        	console.log("Get to Order Service");
                
                console.log("Get orders");
                var mockorders = require('./data/mockOrders.js');
                console.log(mockorders);
                
                console.log("Build orders...");
                var orders = //OrderBuilder.build(mockorders);
						mockorders;
                console.log("Build orders...done");
                console.dir(orders);
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                //res.end(OrderBuilder.stringify(orders), 'utf-8');                
				res.end(JSON.stringify(orders, 'utf-8'));
                
                return next();
            
		    } catch (ex) {
            	var msg = 'Error in processing REST operation: ' + ex;
		    	console.log(msg);
                res.writeHead(500, { 'Content-Type': 'application/text' });
                res.end(msg, 'utf-8');
		    }
		}
    }
    
];

module.exports = routes;