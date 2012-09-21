define(['models/validation'],
function(Validation) {
	return {
    	code: [
        	new Validation('required'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 20),
        	new Validation('unique', 'http://server:port/products/:code')
        ],
    	description: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 0),
        	new Validation('max', 255)
        ]
    }
});
