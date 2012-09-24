define(['models/validation'],
function(validation) {
	return {
    	code: [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 20),
        	new validation.Validation('unique', 'http://server:port/products/:code')
        ],
    	description: [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 255)
        ]
    }
});
