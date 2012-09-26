define(['models/property', 'models/validation'],
function(Property, validation) {
	/*
     Example:
		var json = {id: 1, 
     			type: 'Main', 
                line1: '123 Fake St', 
                line2: '', 
                line3: 'Suite 22', 
                line4: '', 
                line5: '', 
                city: 'Here', 
                state: 'There', 
                country: 'Everywhere',
                postalcode: '987656'};
                
		// instantiate it               
		var a = new Address(json.id, json.type, json.line1, json.line2, json.line3, json.line4, json.line5, 
							json.city, json.state, json.country, json.postalcode);
                                    
		// get the value of line3
        a.line3.value === 'Suite 22'; // true
        // set the value of country
        a.country.value = 'USA';
        // get validations for line1
        a.line1.validations[0].rule === 'required'; // true
        a.line1.validations[3].rule === 'max'; // true
        a.line1.validations[3].value === 255; // true
        a.line1.validate();
	*/
	return function Address(id, type, line1, line2, line3, line4, line5, city, state, country, postalcode) {
	    this.id = new Property(id);
	    this.type = Property(type, [
        	new validation.Validation('required')
	    	/* let the view handle this by presenting only valid choices 
        	new validation.Validation('in', ['Main', 'Billing', 'Shipping', 'Other'])
            */          
		]);
	    this.line1 = Property(line1, [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
        ]);
	    this.line2 = Property(line2, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
        ]);
	    this.line3 = Property(line3, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
        ]);
	    this.line4 = Property(line4, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
        ]);
	    this.line5 = Property(line5, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
        ]);
	    this.city = Property(city, [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
        ]);
	    this.state = Property(state, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
        ]);
	    this.country = Property(country, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
        ]);
	    this.postalCode = Property(postalcode, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
        ]);
        
        /* less verbose?
        for (var prop in this) {
        	this[prop].validations = validations[prop]
        }
        */
    };
});
