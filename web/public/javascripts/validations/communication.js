define(['models/validation'],
function(Validation) {
	return {
    	type: [
        	new Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new Validation('in', ['Office Phone', 'Mobile Phone', 'Office Fax', 'Email', 'Twitter', 'Other'])
            */          
        ],
    	value: [
        	new Validation('required'),
        	new Validation('bytype', [
            						{type: 'Office Phone', rule: new Validation('regex', '')},
            						{type: 'Mobile Phone', rule: new Validation('regex', '')},
            						{type: 'Office Fax', rule: new Validation('regex', '')},
            						{type: 'Email', rule: new Validation('regex', '')}
                                    ]),
        	new Validation('min', 1),
        	new Validation('max', 50)
		]
    }
});
