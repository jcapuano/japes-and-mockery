define(['models/validation'],
function(validation) {
	return {
    	code: [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 20),
        	new validation.Validation('unique', 'http://server:port/customers/:code')
        ],
    	description: [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 255)
        ],
    	addresses: [
        	new validation.Validation('optional'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 9999)
		],
    	contacts: [
        	new validation.Validation('optional'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 9999)
		],
    	account: [
        	new validation.Validation('required')
        ],
    	status: [
        	new validation.Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new validation.Validation('in', ['Open', 'Closed', 'Hold'])
            */          
        ]
    }
});
