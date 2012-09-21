define(['models/validation'],
function(Validation) {
	return {
    	code: [
        	new Validation('required'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 20),
        	new Validation('unique', 'http://server:port/customers/:code')
        ],
    	description: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 0),
        	new Validation('max', 255)
        ],
    	addresses: [
        	new Validation('optional'),
        	new Validation('min', 0),
        	new Validation('max', 9999)
		],
    	contacts: [
        	new Validation('optional'),
        	new Validation('min', 0),
        	new Validation('max', 9999)
		],
    	account: [
        	new Validation('required')
        ],
    	status: [
        	new Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new Validation('in', ['Open', 'Closed', 'Hold'])
            */          
        ]
    }
});
