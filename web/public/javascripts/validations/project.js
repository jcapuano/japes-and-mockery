define(['models/validation'],
function(Validation) {
	return {
    	code: [
        	new Validation('required'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 20),
        	new Validation('unique', 'http://server:port/projects/:code')
        ],
    	description: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 0),
        	new Validation('max', 255)
        ],
    	status: [
        	new Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new Validation('in', ['Open', 'Closed', 'Pending', 'Ordered'])
            */          
        ],
    	customer: [
        	new Validation('required')
        ],
    	contacts: [
        	new Validation('optional')
        ],
    	deliveryAddress: [
        	new Validation('required')
        ],
    	product: [
        	new Validation('required')
        ],
    	quantity: [
        	new Validation('required'),
        	new Validation('numeric'),
        	new Validation('greaterthan', 0)
		],
    	estimateCost: [
        	new Validation('required'),
        	new Validation('numeric'),
        	new Validation('greaterthan', 0)
		],
    	estimateDate: [
        	new Validation('required'),
        	new Validation('datetime')
		]
    }
});
