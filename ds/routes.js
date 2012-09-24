//var OrderBuilder = require('../models/orderBuilder.js');
var codes = require('./orderCodes.js');

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
    },
	{
    	method: "get",
    	url: "/order/CodeIsUnique",
        handler: function(req, res, next) {
	    	try {
	        	console.log("Get Order Service");
                //console.log(req.headers);
                console.log(req.params);
                var code = req.params.code;
                
                res.writeHead(200, {'Content-Type': 'application/json', 
									'Access-Control-Allow-Origin': '*',
									'Access-Control-Allow-Methods': 'GET, OPTIONS',
									'Access-Control-Allow-Headers': '*',
									'Access-Control-Max-Age': 1728000
                					 });
                if (code && codes.indexOf(code) > -1) {
                	console.log("Code found");
					res.end("false", 'utf-8');
                }
                else {
                	console.log("Code NOT found");
					res.end("true", 'utf-8');
                }
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