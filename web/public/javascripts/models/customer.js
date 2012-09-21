define(['models/property', 'validations/customer'],
function(property, validations) {
	return function Customer(id, code, description, locations, contacts, account, status) {
	    this.id = new property(id, validations.id);
	    this.code = new property(name, validations.code);
	    this.description = new property(description, validations.description);
	    this.locations = new property(locations, validations.locations);	// collection of Address
	    this.contacts = new property(contacts, validations.contacts);		// collection of Contact
	    this.account = new property(account, validations.account);			// Account
	    this.status = new property(status, validations.status);
    }
});
