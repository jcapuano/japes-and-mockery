define(['models/validation'],
function(Validation) {
	return {
    	code: [
        	new Validation('required'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 20),
        	new Validation('unique', 'http://server:port/orders/:code')
        ],
    	poNumber: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 20)
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
    	plannerContact: [
        	new Validation('optional')
        ],
    	billToCustomer: [
        	new Validation('optional')
        ],
    	billToAddress: [
        	new Validation('optional')
        ],
    	payFromCustomer: [
        	new Validation('optional')
        ],
    	payFromAddress: [
        	new Validation('optional')
        ],
    	deliveryAddress: [
        	new Validation('required')
        ],
    	deliveryContact: [
        	new Validation('optional')
        ],
    	deliveryInstructions: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 255)
        ],
    	requestedDate: [
        	new Validation('required'),
        	new Validation('datetime')
        ],
    	deliveryDate: [
        	new Validation('required'),
        	new Validation('datetime')
        ],
    	items: [
        	new Validation('required'),
        	new Validation('min', 1),
        	new Validation('max', 9999)
        ],
    	subTotal: [
        	new Validation('optional'),
        	new Validation('numeric'),
        	new Validation('greaterthan', 0)
		],
    	tax: [
        	new Validation('optional'),
        	new Validation('numeric'),
        	new Validation('greaterthanequal', 0)
		],
    	grandTotal: [
        	new Validation('optional'),
        	new Validation('numeric'),
        	new Validation('greaterthan', 0)
		]
    }
});
