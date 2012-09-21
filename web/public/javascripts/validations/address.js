define(['models/validation'],
function(Validation) {
	return {
    	type: [
        	new Validation('required')
	    	/* let the view handle this by presenting only valid choices 
        	new Validation('in', ['Main', 'Billing', 'Shipping', 'Other'])
            */          
		],
    	line1: [
        	new Validation('required'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 255)
        ],
    	line2: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 255)
        ],
    	line3: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 255)
        ],
    	line4: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 255)
        ],
    	line5: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 255)
        ],
    	city: [
        	new Validation('required'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 255)
        ],
    	state: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 255)
        ],
    	country: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 255)
        ],
    	postalcode: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 255)
        ]
    }
});
