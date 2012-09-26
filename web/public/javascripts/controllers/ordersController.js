define(["utils/logger", "utils/eventing", "models/validation"],
function(logger, eventing, validation) {

	return function(app) { 
		
	    //--------------------------------------
	    //  EVENTS
	    //--------------------------------------
	    // pub: setorders
	    
	    // sub: getorders
        var dtCallback = null;
	    
	    //--------------------------------------
	    //  SUBSCRIPTIONS
	    //--------------------------------------
        eventing.subscribeall([
        	{topic: "setorders", handler: function(orders) {
            	this.onSetOrders(orders);
			}}
		]);
        
	    //--------------------------------------
	    //  ROUTES
	    //--------------------------------------
		
		// GET index
		app.get('#/orders', function(context) {
        	logger.info("Requesting orders");
            context.partial(app.VIEW_PATH + 'orderList.html',{}, function() {
            	this.LoadOrders();
			});
		});
		
		// GET new
		app.get('#/orders/new', function(context) {
		});
		
		// POST add
		app.post('#/orders', function(context) {
		});
		
		// GET edit
		app.get('#/orders/edit/:id', function(context) {
		});
		
		// PUT update
		app.put('#/orders/update/:id', function(context) {
		});
		
		// DELETE destroy
		app.del('#/orders/:id', function(context) {
		});
		
		// GET show
		app.get('#/orders/:id', function(context) {
		});
	
	    //--------------------------------------
	    //  HUB HANDLERS
	    //--------------------------------------
        this.onSetOrders = function(orders) {
        	try {
	        	logger.info("Received orders");
	            logger.info(orders);
                if (dtCallback) {
                	dtCallback(orders);
                }
			}
            catch (e) {
            	logger.error(e);
            }                	
        };
	    
		
	    //--------------------------------------
	    //  VIEW HANDLERS
	    //--------------------------------------
        this.LoadOrders = function() {
        
	    	var grid = $('#ordersTable')
	          .dataTable( {
	            "bJQueryUI": true,
	            //"asStripeClasses": ['planningGridOdd', 'planningGridEven'],
	            "bSort": false,
	            "bFilter": false,
	            "bInfo": true,
	            "bPaginate": true,
	           	"iDisplayStart": 0,
	            "iDisplayLength": 10,
                "bProcessing": true,
                "bServerSide": true,
                "sAjaxSource": "ds",
	            //"sDom": "rtS",
	            //"sScrollY": "360px",
	            //"bDeferRender": true,
	            
				"aaData": [],
				"aoColumns": [
					{ "sTitle": "Code", "mDataProp": function(data, type, val) {
	                        return data.code();
	                	}
	                },
					{ "sTitle": "Status", "mDataProp": function(data, type, val) {
	                		return data.status();
	                	}
	                },
					{ "sTitle": "Customer", "mDataProp": function(data, type, val) {
	                		return data.customer().code();
	                	}
	                },
					{ "sTitle": "Delivery Date", "mDataProp": function(data, type, val) {
	                		return data.deliveryDate();
	                	}
	                }
				],
				"fnServerData": function ( sSource, aoData, fnCallback, oSettings ) {
                	dtCallback = fnCallback;
                    var options = {};
                    _.each(aoData, function(opt) {
                    	options[opt.name] = opt.value;
                    });
                    eventing.publish('getorders', options);
				}
			} );	
	        
	        // hide the "show entries" goo
	        $('#ordersTable_length').parent().css('display','none'); 
        };
        
        
	    //--------------------------------------
	    //  VIEW VALIDATIONS
	    //--------------------------------------
        this.setValidations = function(order) {
        	// attach the validations to the view fields
        	validation.SetViewValidations("#formOrderEdit", [
            		new validation.ViewValidation("#inputOrderCode", order.code.validations),
            		new validation.ViewValidation("#inputPONumber",order.poNumber.validations),
            		new validation.ViewValidation("#selectStatus", order.status.validations)
                    ]);
        };
        
	    //--------------------------------------
	    //  VALIDATIONS
	    //--------------------------------------
	};
});    