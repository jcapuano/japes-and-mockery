define(["utils/logger", 
		"utils/eventing", 
		"utils/viewPresenter"],
function(logger, eventing, ViewPresenter) {

	return function OrdersViewManager() { 
		
        var dtCallback = null;
        
	    //--------------------------------------
	    //  EVENTS
	    //--------------------------------------
	    // pub: getorders
	    
	    // sub: setorders
	    
	    //--------------------------------------
	    //  SUBSCRIPTIONS
	    //--------------------------------------
        eventing.subscribeall([
        	{topic: "showorders", handler: function() { this.onShowOrders(); }},
        	{topic: "setorders", handler: function(orders) { this.onSetOrders(orders); }}
		]);
        
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
        this.onShowOrders = function() {
            logger.info("Loading orders view");
            
            ViewPresenter.show("orderList.html");
			
            /*
        	$("#content").empty();
            var partial = TemplateLoader.get();
            var template = Handlebars.compile(partial);
        	$("#content").html(template({}));
            */

            logger.info("Requesting orders");
	        this.LoadOrders();
        };
        
        this.LoadOrders = function() {
        
	    	var grid = $('#ordersTable')
	          .dataTable( {
	            "bJQueryUI": true,
	            //"asStripeClasses": ['planningGridOdd', 'planningGridEven'],
	            "bSort": true,
	            "bFilter": true,
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
			
			$('#ordersTable tbody tr').click(function(){
				var data = grid.fnGetData( this ); 
				eventing.publish('editorder', data);
				});
	        
	        // hide the "show entries" goo
	        $('#ordersTable_length').parent().css('display','none'); 
        };
        
        
	    //--------------------------------------
	    //  VIEW VALIDATIONS
	    //--------------------------------------
	};
});    