define(['models/validation'],
function(validation) {
	return {
    	name: [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
        ],
    	title: [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
		],
    	addresses: [
        	new validation.Validation('optional'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 9999)
		],
    	communications: [
        	new validation.Validation('optional'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 9999)
		]
    }
});
