define(["utils/logger"],
function(logger) {
	var eventing = {
		/*
		 * subscriptions: array of JSON {topic: "", handler: callback}
		 */
		subscribeall: function(subscriptions) {
			if (subscriptions && subscriptions.length > 0) {
		    	for (var i=0; i<subscriptions.length; i++) {
		        	var subscription = subscriptions[i];
		        	this.subscribe(subscription.topic, subscription.handler);
		        }
		    }
		},

		unsubscribeall: function(subscriptions) {
			if (subscriptions && subscriptions.length > 0) {
		    	for (var i=0; i<subscriptions.length; i++) {
		        	var subscription = subscriptions[i];
		        	this.unsubscribe(subscription.topic, subscription.handler);
		        }
		    }
		},

		// using amplifyJS
		// http://amplifyjs.com/api/pubsub/
		subscribe: function(topic, callback) {
			logger.info("Subscribing to event " + topic);
		    amplify.subscribe(topic, callback);
		},

		unsubscribe: function(topic, callback) {
        	logger.info("Unsubscribing from event " + topic);
		    amplify.unsubscribe(topic, callback);
		},

		publish: function(topic) {
			logger.info("Publishing event " + topic);
		    amplify.publish.apply(amplify.publish, arguments);
		}
        
		// using jquery tiny pub/sub
		// https://gist.github.com/661855
		/*
		subscribe: function(topic, callback) {
		    $.subscribe(topic, callback);
		},

		unsubscribe: function(topic, callback) {
		    $.unsubscribe(topic, callback);
		},

		publish: function(topic) {
		    $.publish.apply($.publish, arguments);
		}
		*/
    };
    
    return eventing;
});    


