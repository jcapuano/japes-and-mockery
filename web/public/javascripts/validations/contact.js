define(['models/validation'],
function(Validation) {
	return {
    	name: [
        	new Validation('required'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 255)
        ],
    	title: [
        	new Validation('optional'),
        	new Validation('alphanum'),
        	new Validation('min', 1),
        	new Validation('max', 255)
		],
    	addresses: [
        	new Validation('optional'),
        	new Validation('min', 0),
        	new Validation('max', 9999)
		],
    	communications: [
        	new Validation('optional'),
        	new Validation('min', 0),
        	new Validation('max', 9999)
		]
    }
});
