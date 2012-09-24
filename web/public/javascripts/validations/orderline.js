define(['models/validation'],
function(validation) {
	return {
    	code: [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 20)
        ],
    	description: [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 255)
        ],
    	quantity: [
        	new validation.Validation('required'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		],
    	unitprice: [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		],
    	tax: [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthanequal', 0)
		],
    	total: [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		],
    	specialinstructions: [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 1000)
        ]
    }
});
