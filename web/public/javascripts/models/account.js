define(['models/property', 'models/validation'],
function(Property,validation) {
	/*
     Example:
		var json = {id: 1, 
     			number: '88-TG8765', 
                paymentterms: 'Credit', 
                creditcode: 'Open', 
                creditlimit: 10000.00};
                
		// instantiate it               
		var a = new Account(json.id, json.number, json.paymentterms, json.creditcode, json.creditlimit);
                                    
		// get the value of paymentterms
        a.paymentTerms.value === 'Credit'; // true
        // set the value of creditcode
        a.creditCode.value = 'Cash';
        // get validations for creditlimit
        a.creditLimit.validations[0].rule === 'optional'; // true
        a.creditLimit.validations[1].rule === 'numeric'; // true
        a.creditLimit.validations[2].rule === 'greaterthanequal'; // true
        a.creditLimit.validations[2].value === 0; // true
        a.creditLimit.validate();
	*/
	return function Account(id, number, paymentterms, creditcode, creditlimit) {
	    this.id = Property(id);
	    this.number = Property(number, [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 20)
        ]);
	    this.paymentTerms = Property(paymentterms, [
        	new validation.Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new validation.Validation('in', ['Cash', 'Credit', 'PORequired'])
            */          
        ]);
	    this.creditCode = Property(creditcode, [
        	new validation.Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new validation.Validation('in', ['Open', 'Closed', 'Hold'])
            */          
        ]);
	    this.creditLimit = Property(creditlimit, [
        	new validation.Validation('optional'),
        	new validation.Validation('numeric'),
        	new validation.Validation('greaterthanequal', 0)
		]);
    }
});
