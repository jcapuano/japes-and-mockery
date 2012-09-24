define(['models/validation'],
function(validation) {
	return {
    	code: [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 20),
        	new validation.Validation('unique', 'http://server:port/projects/:code')
        ],
    	description: [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 255)
        ],
    	status: [
        	new validation.Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new validation.Validation('in', ['Open', 'Closed', 'Pending', 'Ordered'])
            */          
        ],
    	customer: [
        	new validation.Validation('required')
        ],
    	contacts: [
        	new validation.Validation('optional')
        ],
    	deliveryAddress: [
        	new validation.Validation('required')
        ],
    	product: [
        	new validation.Validation('required')
        ],
    	quantity: [
        	new validation.Validation('required'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		],
    	estimateCost: [
        	new validation.Validation('required'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		],
    	estimateDate: [
        	new validation.Validation('required'),
        	new validation.Validation('datetime')
		]
    }
});
