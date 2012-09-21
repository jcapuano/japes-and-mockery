define(['models/property', 'validations/contact'],
function(property, validations) {
	return function Contact(id, name, title, addresses, communications) {
	    this.id = new property(id, validations.id);
	    this.name = new property(name, validations.name);
	    this.title = new property(title, validations.title);
	    this.addresses = new property(addresses, validations.addresses);	// collection of Address
	    this.communications = new property(communications, validations.communications);	// collection of Communication
    }
});
