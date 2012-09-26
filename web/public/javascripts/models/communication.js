define(['models/property', 'models/validation'],
function(Property, validation) {
	return function Communication(id, type, value) {
	    this.id = Property(id);
	    this.type = Property(type, [
        	new validation.Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new validation.Validation('in', ['Office Phone', 'Mobile Phone', 'Office Fax', 'Email', 'Twitter', 'Other'])
            */          
        ]);
	    this.value = Property(value, [
        	new validation.Validation('required'),
        	new validation.Validation('bytype', [
            						{type: 'Office Phone', rule: new validation.Validation('regex', 'too lazy to write the regex')},
            						{type: 'Mobile Phone', rule: new validation.Validation('regex', '')},
            						{type: 'Office Fax', rule: new validation.Validation('regex', '')},
            						{type: 'Email', rule: new validation.Validation('regex', '')}
                                    ]),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 50)
		]);
    };
});
