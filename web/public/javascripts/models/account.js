define(['models/property', 'validations/account'],
function(property, validations) {
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
	    this.id = new property(id, validations.id);
	    this.number = new property(number, validations.number);
	    this.paymentTerms = new property(paymentterms, validations.paymentterms);
	    this.creditCode = new property(creditcode, validations.creditcode);
	    this.creditLimit = new property(creditlimit, validations.creditlimit);
    }
});
