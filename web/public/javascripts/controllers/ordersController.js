define(["utils/logger", "utils/eventing"],
function(logger, eventing) {

	return function(app) { 
		
	    //--------------------------------------
	    //  EVENTS
	    //--------------------------------------
	    // pub: setorders
	    
	    // sub: getorders
	    
	    //--------------------------------------
	    //  SUBSCRIPTIONS
	    //--------------------------------------
        eventing.subscribeall([
        	{topic: "setorders", handler: function(orders) {
            	app.trigger('setorders', orders);
			}}
		]);
        app.bind('setorders', function(e, orders) {
        	onSetOrders(this, orders);
        });
        
	    //--------------------------------------
	    //  ROUTES
	    //--------------------------------------
		
		// GET index
		app.get('#/orders', function(context) {
        	logger.info("Requesting orders");
            eventing.publish('getorders');
		});
		
		// GET new
		app.get('#/orders/new', function(context) {
			//context.partial(VIEW_PATH + 'posts/new.jshtml');
		});
		
		// POST add
		app.post('#/orders', function(context) {
	    	/*
			var order = new Order(context.params['order']);
			order.save(function(success) {
				context.redirect('#/orders/' + order.id());
			});
	        */
		});
		
		// GET edit
		app.get('#/orders/edit/:id', function(context) {
	    	/*
			context.post = Post.find(context.params['id']);
			context.partial(VIEW_PATH + 'posts/edit.jshtml');
	        */
		});
		
		// PUT update
		app.put('#/orders/update/:id', function(context) {
	    	/*
			var post = Post.find(context.params['id']);
			post.update(context.params['post']).save(function(success) {
				context.redirect('#/posts/' + post.id())
			});
	        */
		});
		
		// DELETE destroy
		app.del('#/orders/:id', function(context) {
	    	/*
			var post = Post.find(context.params['id']);
			post.destroy();
			context.trigger('post_remove', { postId: post.id() });		
	        */
		});
		
		// GET show
		app.get('#/posts/:id', function(context) {
	    	/*
			context.post = Post.find(context.params['id']);
			context.partial(VIEW_PATH + 'posts/show.jshtml');
	        */
		});
	
	    //--------------------------------------
	    //  HUB HANDLERS
	    //--------------------------------------
        this.onSetOrders = function(context, orders) {
        	logger.info("Received orders");
            logger.info(orders);
			context.partial(app.VIEW_PATH + 'orders.html', {orders: orders});
        };
	    
		
	    //--------------------------------------
	    //  VIEW HANDLERS
	    //--------------------------------------
	}
});    