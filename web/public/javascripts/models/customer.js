define(['models/property', 'models/validation'],
function(Property, validation) {
	return function Customer(id, code, description, locations, contacts, account, status) {
	    this.id = Property(id);
	    this.code = Property(name, [
        	new validation.Validation('required'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 1),
        	new validation.Validation('max', 20),
        	new validation.Validation('unique', 'http://server:port/customers/:code')
        ]);
	    this.description = Property(description, [
        	new validation.Validation('optional'),
        	new validation.Validation('alphanum'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 255)
        ]);
        // collection of Address
	    this.locations = Property(locations, [
        	new validation.Validation('optional'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 9999)
		]);	
        // collection of Contact
	    this.contacts = Property(contacts, [
        	new validation.Validation('optional'),
        	new validation.Validation('min', 0),
        	new validation.Validation('max', 9999)
		]);		
        // Account
	    this.account = Property(account, [
        	new validation.Validation('required')
        ]);			
	    this.status = Property(status, [
        	new validation.Validation('required')
            /* let the view handle this by presenting only valid choices 
        	new validation.Validation('in', ['Open', 'Closed', 'Hold'])
            */          
        ]);
    };
});
