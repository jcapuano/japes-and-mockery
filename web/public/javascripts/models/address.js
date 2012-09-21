define(['models/property', 'validations/address'],
function(property, validations) {
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
	    this.id = new property(id, validations.id);
	    this.type = new property(type, validations.type);
	    this.line1 = new property(line1, validations.line1);
	    this.line2 = new property(line2, validations.line2);
	    this.line3 = new property(line3, validations.line3);
	    this.line4 = new property(line4, validations.line4);
	    this.line5 = new property(line5, validations.line5);
	    this.city = new property(city, validations.city);
	    this.state = new property(state, validations.state);
	    this.country = new property(country, validations.country);
	    this.postalCode = new property(postalcode, validations.postalcode);
        
        /* less verbose?
        for (var prop in this) {
        	this[prop].validations = validations[prop]
        }
        */
    }
});
