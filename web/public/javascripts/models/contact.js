define(['models/property', 'models/validation'],
function(Property, validation) {
	return function Contact(id, name, title, addresses, communications) {
	    this.id = new Property(id);
	    this.name = new Property(name, [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
        ]);
	    this.title = new Property(title, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 255)
		]);
        // collection of Address
	    this.addresses = new Property(addresses, [
        	new validation.Validation('optional'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 9999)
		]);	
        // collection of Communication
	    this.communications = new Property(communications, [
        	new validation.Validation('optional'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 9999)
		]);	
    }
});
