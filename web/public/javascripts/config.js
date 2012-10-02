define(function() {
	var config = {
	    hubPort: 4242,
	    hubURL: "http://localhost:4242",
        views: [
	    	'orderList.html',
    	    'orderAdd.html',
	        'orderEdit.html',
            'address.html',
			'deliveryContact.html'
        ]
	};
	return config;
});
