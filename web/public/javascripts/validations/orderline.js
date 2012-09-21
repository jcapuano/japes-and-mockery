define(['models/validation'],
function(Validation) {
	return {
    	code: [
        	new Validation('required'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 20)
        ],
    	description: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 0),
        	new Validation('max', 255)
        ],
    	quantity: [
        	new Validation('required'),
        	new Validation('numeric'),
        	new Validation('greaterthan', 0)
		],
    	unitprice: [
        	new Validation('optional'),
        	new Validation('numeric'),
        	new Validation('greaterthan', 0)
		],
    	tax: [
        	new Validation('optional'),
        	new Validation('numeric'),
        	new Validation('greaterthanequal', 0)
		],
    	total: [
        	new Validation('optional'),
        	new Validation('numeric'),
        	new Validation('greaterthan', 0)
		],
    	specialinstructions: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 0),
        	new Validation('max', 1000)
        ]
    }
});
