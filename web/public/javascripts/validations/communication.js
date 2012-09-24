define(['models/validation'],
function(validation) {
	return {
    	type: [
        	new validation.Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new validation.Validation('in', ['Office Phone', 'Mobile Phone', 'Office Fax', 'Email', 'Twitter', 'Other'])
            */          
        ],
    	value: [
        	new validation.Validation('required'),
        	new validation.Validation('bytype', [
            						{type: 'Office Phone', rule: new validation.Validation('regex', '')},
            						{type: 'Mobile Phone', rule: new validation.Validation('regex', '')},
            						{type: 'Office Fax', rule: new validation.Validation('regex', '')},
            						{type: 'Email', rule: new validation.Validation('regex', '')}
                                    ]),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 50)
		]
    }
});
