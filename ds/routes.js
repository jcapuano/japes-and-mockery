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
		    	console.log('Error in processing REST operation: ' + ex);
		    }
		}
    },
	{
    	method: "get",
    	url: "/orders",
        handler: function(req, res, next) {
	    	try {
	        	console.log("Get to Order Service");
                console.log(req.body);
                
                console.log("Get orders");
                
                var orders = require('./data/mockOrders.js');
                console.log(orders);
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(orders), 'utf-8');                
                
                return next();
            
		    } catch (ex) {
		    	console.log('Error in processing REST operation: ' + ex);
		    }
		}
    }
    
];

module.exports = routes;