define(['models/validation'],
function(validation) {
	return {
    	code: [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('minlength', 1),
        	new validation.Validation('maxlength', 20),
        	new validation.Validation('unique', 'http://localhost:4343/order/CodeIsUnique')
        ],
    	poNumber: [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('minlength', 1),
        	new validation.Validation('maxlength', 20)
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
    	plannerContact: [
        	new validation.Validation('optional')
        ],
    	billToCustomer: [
        	new validation.Validation('optional')
        ],
    	billToAddress: [
        	new validation.Validation('optional')
        ],
    	payFromCustomer: [
        	new validation.Validation('optional')
        ],
    	payFromAddress: [
        	new validation.Validation('optional')
        ],
    	deliveryAddress: [
        	new validation.Validation('required')
        ],
    	deliveryContact: [
        	new validation.Validation('optional')
        ],
    	deliveryInstructions: [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
        ],
    	requestedDate: [
        	new validation.Validation('required'),
        	new validation.Validation('datetime')
        ],
    	deliveryDate: [
        	new validation.Validation('required'),
        	new validation.Validation('datetime')
        ],
    	items: [
        	new validation.Validation('required'),
        	new validation.Validation('minlength', 1),
        	new validation.Validation('maxlength', 9999)
        ],
    	subTotal: [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		],
    	tax: [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthanequal', 0)
		],
    	grandTotal: [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthan', 0)
		]
    }
});
