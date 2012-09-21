define(['models/validation'],
function(Validation) {
	return {
    	number: [
        	new Validation('required'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 20)
        ],
    	paymentterms: [
        	new Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new Validation('in', ['Cash', 'Credit', 'PORequired'])
            */          
        ],
    	creditcode: [
        	new Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new Validation('in', ['Open', 'Closed', 'Hold'])
            */          
        ],
    	creditlimit: [
        	new Validation('optional'),
        	new Validation('numeric'),
        	new Validation('greaterthanequal', 0)
		]
    }
});
