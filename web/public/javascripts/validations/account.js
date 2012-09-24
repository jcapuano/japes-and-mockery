define(['models/validation'],
function(validation) {
	return {
    	number: [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 20)
        ],
    	paymentterms: [
        	new validation.Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new validation.Validation('in', ['Cash', 'Credit', 'PORequired'])
            */          
        ],
    	creditcode: [
        	new validation.Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new validation.Validation('in', ['Open', 'Closed', 'Hold'])
            */          
        ],
    	creditlimit: [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthanequal', 0)
		]
    }
});
