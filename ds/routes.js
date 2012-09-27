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
    	url: "/orders",///start/:start/length/:length/echo/:echo",
        handler: function(req, res, next) {
	    	try {
	        	console.log("Get to Order Service");
                console.dir(req.params);
                /*
                var start = parseInt(req.params.start) || 0;
                var length = parseInt(req.params.length) || 10;
                var echo = req.params.echo || "";
                */
                var start = parseInt(req.params.iDisplayStart) || 0;
                var length = parseInt(req.params.iDisplayLength) || 10;
                var echo = req.params.sEcho || "";
                
                console.log("Get orders");
		    	console.log("Getting " + length + " Orders starting from " + start);
	            
                var mockorders = require('./data/mockOrders100.js');
	            if (length > mockorders.length) {
	            	length = mockorders.length;
	            }
	            if (start < 0) {
	            	start = 0;
	            }
	            else if (start > mockorders.length - length) {
	            	start = mockorders.length - length;
	            }
	            var end = start + length;
	            
                
                console.log("Build orders... " + start + " - " + end);
	            var orders = mockorders.slice(start, end);
                console.log("Build orders...done (" + orders.length + ")");
                
            	var result = {
	            	iTotalRecords: mockorders.length,
	                iTotalDisplayRecords: mockorders.length,
	                sEcho: echo,
	                sColumns: "",
	                aaData: orders
	            };
                
                //console.dir(result);
                
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                //res.end(OrderBuilder.stringify(orders), 'utf-8');                
				res.end(JSON.stringify(result, 'utf-8'));
                
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